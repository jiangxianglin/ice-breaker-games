"""Build sitemap.csv: Title | URL | Description from live sitemap + codebase metadata."""
from __future__ import annotations

import csv
import re
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(r"d:\Lvxueting\GAME\ice breaker games\ShipFree")
SITEMAP_XML = ROOT / "sitemap.xml"
OUT_CSV = ROOT / "sitemap.csv"
BASE = "https://www.icebreakergames.site"

NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def title_case_slug(slug: str) -> str:
    specials = {
        "qa": "Q&A",
        "emoji": "Emoji",
        "skribbl": "Skribbl",
        "pictionary": "Pictionary",
    }
    parts = []
    for p in slug.split("-"):
        parts.append(specials.get(p, p.capitalize()))
    return " ".join(parts)


def unescape_js_string(raw: str) -> str:
    return (
        raw.replace(r"\"", '"')
        .replace(r"\'", "'")
        .replace(r"\n", "\n")
        .replace(r"\\", "\\")
    )


def extract_const_string(text: str, name: str) -> str | None:
    # const name = "..." possibly split across lines after =
    m = re.search(
        rf'const\s+{name}\s*=\s*(?:/\*[^*]*\*/\s*)?"((?:[^"\\]|\\.)*)"',
        text,
        re.S,
    )
    if not m:
        m = re.search(
            rf"const\s+{name}\s*=\s*(?:/\*[^*]*\*/\s*)?'((?:[^'\\]|\\.)*)'",
            text,
            re.S,
        )
    if not m:
        return None
    return unescape_js_string(m.group(1))


def load_page_meta() -> dict[str, tuple[str, str]]:
    """Map absolute URL -> (title, description) from page.tsx files."""
    meta: dict[str, tuple[str, str]] = {}
    app = ROOT / "src" / "app"
    for page in app.rglob("page.tsx"):
        rel = page.relative_to(app).as_posix()
        if rel.startswith("auth/") or "/dashboard/" in f"/{rel}":
            continue
        # route path
        parts = rel.split("/")
        if parts[-1] != "page.tsx":
            continue
        route_parts = parts[:-1]
        # skip dynamic [slug] templates for meta extraction except we handle separately
        if any(p.startswith("[") for p in route_parts):
            continue
        if route_parts == ["(site)"]:
            continue
        path = "" if route_parts == [] else "/" + "/".join(route_parts)
        # exclude route groups
        path = "/" + "/".join(p for p in route_parts if not (p.startswith("(") and p.endswith(")")))
        if path == "/":
            path = ""
        url = f"{BASE}{path}" if path else BASE

        text = page.read_text(encoding="utf-8")
        title = extract_const_string(text, "title")
        desc = extract_const_string(text, "description")
        # metadata export style
        if not title:
            m = re.search(r'title:\s*"((?:[^"\\]|\\.)*)"', text)
            if m:
                title = m.group(1)
        if not desc:
            m = re.search(r'description:\s*"((?:[^"\\]|\\.)*)"', text)
            if m:
                desc = m.group(1)
            else:
                m = re.search(
                    r'description:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
                    text,
                )
                if m:
                    desc = m.group(1)

        if title or desc:
            meta[url] = (title or "", desc or "")
            # also without trailing issues
            meta[url.rstrip("/")] = meta[url]
    return meta


def load_blog_meta() -> dict[str, tuple[str, str]]:
    blog_path = ROOT / "src" / "data" / "blog.ts"
    text = blog_path.read_text(encoding="utf-8")
    meta: dict[str, tuple[str, str]] = {}
    # crude block parse
    for m in re.finditer(
        r'slug:\s*"([^"]+)"\s*,\s*title:\s*"((?:[^"\\]|\\.)*)"\s*,\s*excerpt:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
        text,
        re.S,
    ):
        slug, title, excerpt = m.group(1), m.group(2), m.group(3)
        url = f"{BASE}/blog/{slug}"
        meta[url] = (title, excerpt)
    # multiline excerpts
    for m in re.finditer(
        r'slug:\s*"([^"]+)"[\s\S]*?title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?excerpt:\s*"((?:[^"\\]|\\.)*)"',
        text,
    ):
        slug, title, excerpt = m.group(1), m.group(2), m.group(3)
        url = f"{BASE}/blog/{slug}"
        if url not in meta:
            meta[url] = (title, excerpt)
    return meta


def load_game_meta() -> dict[str, tuple[str, str]]:
    seed = ROOT / "src" / "db" / "seed" / "games-supabase.ts"
    text = seed.read_text(encoding="utf-8")
    meta: dict[str, tuple[str, str]] = {}
    # match title + description pairs near slug
    for m in re.finditer(
        r'slug:\s*generateSlug\("((?:[^"\\]|\\.)*)"\)[\s\S]*?title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?description:\s*"((?:[^"\\]|\\.)*)"',
        text,
    ):
        name, title, desc = m.group(1), m.group(2), m.group(3)
        slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
        # better: use title for display; derive slug like generateSlug roughly
        url = f"{BASE}/games/{slug}"
        meta[url] = (unescape_js_string(title), unescape_js_string(desc))

    # Also read GAME_SLUGS and fill missing with title-case
    slugs_file = ROOT / "src" / "data" / "game-slugs.ts"
    for m in re.finditer(r'"([a-z0-9-]+)"', slugs_file.read_text(encoding="utf-8")):
        slug = m.group(1)
        url = f"{BASE}/games/{slug}"
        if url not in meta:
            meta[url] = (title_case_slug(slug), f"How to play {title_case_slug(slug)}: rules, players, time, and facilitator tips.")
    return meta


def parse_sitemap_urls() -> list[str]:
    tree = ET.parse(SITEMAP_XML)
    root = tree.getroot()
    urls = []
    for loc in root.findall("sm:url/sm:loc", NS):
        if loc.text:
            urls.append(loc.text.strip())
    # fallback without ns
    if not urls:
        for loc in root.iter():
            if loc.tag.endswith("loc") and loc.text:
                urls.append(loc.text.strip())
    return urls


def main() -> None:
    page_meta = load_page_meta()
    blog_meta = load_blog_meta()
    game_meta = load_game_meta()

    # Prefer more specific sources
    catalog: dict[str, tuple[str, str]] = {}
    catalog.update(page_meta)
    catalog.update(blog_meta)
    catalog.update(game_meta)

    # Explicit overrides / new pages
    catalog[f"{BASE}/icebreaker-games-for-church"] = (
        "Icebreaker Games for Church (Chooser + 12 Run Cards)",
        "Pick a church-safe icebreaker by room type, group size, and visitor comfort. Twelve facilitator run cards with time, supplies, and what to skip.",
    )
    catalog[BASE] = catalog.get(BASE) or (
        "Free Ice Breaker Games — 100+ Rules & Filters (2026)",
        "Browse 100+ free ice breaker games with clear rules, time, group size, and materials. Filter by occasion and run one today—no signup required.",
    )
    catalog[f"{BASE}/contact"] = (
        "Contact Ice Breaker Games",
        catalog.get(f"{BASE}/contact", ("", ""))[1]
        or "Contact the Ice Breaker Games team with questions about games, facilitation, or the site.",
    )
    catalog[f"{BASE}/about"] = (
        "About Ice Breaker Games",
        catalog.get(f"{BASE}/about", ("", ""))[1]
        or "About Ice Breaker Games: free facilitator guides and a searchable games library.",
    )

    urls = parse_sitemap_urls()
    # Ensure new church URL is included even if not yet deployed
    if f"{BASE}/icebreaker-games-for-church" not in urls:
        urls.append(f"{BASE}/icebreaker-games-for-church")

    rows: list[tuple[str, str, str]] = []
    for url in urls:
        title, desc = catalog.get(url, ("", ""))
        if not title:
            # derive from path
            path = url.replace(BASE, "") or "/"
            if path.startswith("/games/"):
                title = title_case_slug(path.split("/")[-1])
                desc = f"How to play {title}: rules, players, time, and facilitator tips."
            elif path.startswith("/blog/"):
                title = title_case_slug(path.split("/")[-1])
                desc = f"Guide: {title}."
            else:
                title = title_case_slug(path.strip("/").replace("/", " - ") or "Home")
                desc = f"Ice Breaker Games page: {title}."
        if not desc:
            desc = f"{title} — Ice Breaker Games."
        rows.append((title, url, desc))

    # Sort: home, guides, blog, games
    def sort_key(row: tuple[str, str, str]) -> tuple[int, str]:
        u = row[1]
        if u == BASE:
            return (0, u)
        if "/games/" in u and u.count("/") >= 4:
            return (3, u)
        if "/blog/" in u:
            return (2, u)
        return (1, u)

    rows.sort(key=sort_key)

    with OUT_CSV.open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["Title", "URL", "Description"])
        for title, url, desc in rows:
            w.writerow([title, url, desc])

    print(f"Wrote {len(rows)} rows to {OUT_CSV}")


if __name__ == "__main__":
    main()

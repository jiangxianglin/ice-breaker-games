import csv
from pathlib import Path

url = "https://www.icebreakergames.site/free-fun-icebreaker-games"
title = "Free Fun Icebreaker Games (No Signup, No Cringe)"
description = (
    "Free fun icebreaker games you can run today—no signup. Twelve facilitator run cards "
    "with a chooser for meetings, small groups, and Zoom, plus what to skip."
)

sitemap_path = Path(r"d:\Lvxueting\GAME\ice breaker games\ShipFree\sitemap.csv")
rows = list(csv.DictReader(sitemap_path.open(encoding="utf-8-sig")))
rows = [r for r in rows if r["URL"] != url]
new_row = {"Title": title, "URL": url, "Description": description}
out = []
inserted = False
for r in rows:
    out.append(r)
    if r["URL"].endswith("/best-icebreaker-games") and not inserted:
        out.append(new_row)
        inserted = True
if not inserted:
    out.append(new_row)
with sitemap_path.open("w", encoding="utf-8-sig", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["Title", "URL", "Description"])
    w.writeheader()
    w.writerows(out)
Path(r"d:\Lvxueting\GAME\ice breaker games\sitemap.csv").write_bytes(sitemap_path.read_bytes())

pub_path = Path(r"d:\Lvxueting\GAME\ice breaker games\seo\published-content.csv")
prows = list(csv.DictReader(pub_path.open(encoding="utf-8-sig")))
prows = [r for r in prows if r["slug"] != "free-fun-icebreaker-games"]
prows.append(
    {
        "slug": "free-fun-icebreaker-games",
        "title": title,
        "url": url,
        "primary_keyword": "free fun icebreaker games",
        "cluster": "fun-free",
        "status": "published",
        "published_at": "2026-09-16",
        "notes": "Hub for free+fun; distinct from funny-meetings and old ultimate-guide blog",
    }
)
with pub_path.open("w", encoding="utf-8-sig", newline="") as f:
    w = csv.DictWriter(
        f,
        fieldnames=[
            "slug",
            "title",
            "url",
            "primary_keyword",
            "cluster",
            "status",
            "published_at",
            "notes",
        ],
    )
    w.writeheader()
    w.writerows(prows)

cm_path = Path(r"d:\Lvxueting\GAME\ice breaker games\seo\content-map.csv")
lines = []
for line in cm_path.read_text(encoding="utf-8").splitlines():
    if line.startswith("free-fun,"):
        line = line.replace(",in-progress,", ",published,")
    lines.append(line)
cm_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

print("ok", len(out), len(prows))

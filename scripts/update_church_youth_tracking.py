import csv
from pathlib import Path

url = "https://www.icebreakergames.site/icebreaker-games-for-church-youth-group"
title = "Icebreaker Games for Church Youth Group (That Don't Feel Awkward)"
description = (
    "Church youth group icebreakers with a chooser for energy, shy teens, and visitors—"
    "plus 12 run cards, faith-optional twists, and what to skip on week one."
)

sitemap_path = Path(r"d:\Lvxueting\GAME\ice breaker games\ShipFree\sitemap.csv")
rows = list(csv.DictReader(sitemap_path.open(encoding="utf-8-sig")))
rows = [r for r in rows if r["URL"] != url]
new_row = {"Title": title, "URL": url, "Description": description}
out = []
inserted = False
for r in rows:
    out.append(r)
    if r["URL"].endswith("/icebreaker-games-for-church") and not inserted:
        out.append(new_row)
        inserted = True
if not inserted:
    out.append(new_row)
with sitemap_path.open("w", encoding="utf-8-sig", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["Title", "URL", "Description"])
    w.writeheader()
    w.writerows(out)

root_copy = Path(r"d:\Lvxueting\GAME\ice breaker games\sitemap.csv")
root_copy.write_bytes(sitemap_path.read_bytes())

pub_path = Path(r"d:\Lvxueting\GAME\ice breaker games\seo\published-content.csv")
prows = list(csv.DictReader(pub_path.open(encoding="utf-8-sig")))
prows = [r for r in prows if r["slug"] != "icebreaker-games-for-church-youth-group"]
prows.append(
    {
        "slug": "icebreaker-games-for-church-youth-group",
        "title": title,
        "url": url,
        "primary_keyword": "icebreaker games for church youth group",
        "cluster": "church",
        "status": "published",
        "published_at": "2026-09-16",
        "notes": "Supporting page under church hub; distinct from general youth-group hub",
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
lines = cm_path.read_text(encoding="utf-8").splitlines()
fixed = []
for line in lines:
    if line.startswith("church-youth,"):
        line = line.replace(",in-progress,", ",published,").replace(
            ",planned,", ",published,"
        )
    fixed.append(line)
cm_path.write_text("\n".join(fixed) + "\n", encoding="utf-8")

print("sitemap", len(out))
print("published", len(prows))
print("content-map church-youth updated")

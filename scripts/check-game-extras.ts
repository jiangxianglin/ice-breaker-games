/**
 * AdSense / content hygiene checks for game-page-extras.ts
 * Run: pnpm run check:extras
 *
 * Fails (exit 1) on banned phrases that recreate "thin shell" / template tells.
 * Warns on soft issues (no sources, no skip FAQ, etc.) without failing.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const EXTRAS_PATH = path.join(ROOT, "src/data/game-page-extras.ts");
const EXCLUDED_PATH = path.join(ROOT, "src/lib/games/excluded-slugs.ts");

const BANNED: { id: string; re: RegExp; message: string }[] = [
  {
    id: "site-original",
    re: /\(site original\)/i,
    message: "Banned template tag (site original)",
  },
  {
    id: "thin-shell",
    re: /thin shell|This page exists so the library URL/i,
    message: "Banned thin-shell / suicide copy",
  },
  {
    id: "fake-team-byline",
    re: /Ice Breaker Games Editorial Team|IceBreaker Editorial Team|Holiday Events Team/i,
    message: "Use Elena Hart byline (no fake multi-person newsroom)",
  },
];

function extractSlugKeys(src: string): string[] {
  const keys: string[] = [];
  const re = /(?:^|\n)\s*(?:"([^"]+)"|([a-z0-9-]+))\s*:\s*\{/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    const key = m[1] || m[2];
    if (!key) continue;
    // Skip type-ish noise
    if (
      key === "howToSteps" ||
      key === "variations" ||
      key === "rulesTiming" ||
      key === "faqs" ||
      key === "sources" ||
      key === "facilitatorScript" ||
      key === "pitfalls" ||
      key === "originalVariant" ||
      key === "quote" ||
      key === "citeLinks"
    ) {
      continue;
    }
    // Heuristic: game slugs contain hyphen or are known bare keys
    if (key.includes("-") || /^[a-z][a-z0-9-]*$/.test(key)) {
      keys.push(key);
    }
  }
  return [...new Set(keys)];
}

function findBlock(src: string, slug: string): string | null {
  const reQuoted = new RegExp(`"${slug}"\\s*:\\s*\\{`);
  const reBare = new RegExp(`(?:^|\\n)\\s*${slug}\\s*:\\s*\\{`);
  const m = src.match(reQuoted) || src.match(reBare);
  if (!m || m.index === undefined) return null;
  const start = src.indexOf("{", m.index);
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
}

function parseNoindex(excludedSrc: string): Set<string> {
  const set = new Set<string>();
  for (const name of ["NOINDEX_GAME_SLUGS", "EXCLUDED_GAME_SLUGS"]) {
    const block = excludedSrc.match(
      new RegExp(`${name}\\s*=\\s*new Set\\(\\[([\\s\\S]*?)\\]\\)`)
    );
    if (!block) continue;
    for (const m of block[1].matchAll(/"([^"]+)"/g)) set.add(m[1]);
  }
  return set;
}

function main() {
  const src = fs.readFileSync(EXTRAS_PATH, "utf8");
  const excludedSrc = fs.existsSync(EXCLUDED_PATH)
    ? fs.readFileSync(EXCLUDED_PATH, "utf8")
    : "";
  const noindex = parseNoindex(excludedSrc);

  const errors: string[] = [];
  const warnings: string[] = [];

  for (const rule of BANNED) {
    if (rule.re.test(src)) {
      errors.push(`[FAIL] ${rule.id}: ${rule.message}`);
    }
  }

  // Top-level GAME_PAGE_EXTRAS keys: match `"slug": {` after export const
  const extrasStart = src.indexOf("export const GAME_PAGE_EXTRAS");
  const body = extrasStart >= 0 ? src.slice(extrasStart) : src;
  const slugKeys: string[] = [];
  for (const m of body.matchAll(/\n\s*(?:"([^"]+)"|([a-z][a-z0-9-]*))\s*:\s*\{/g)) {
    const key = m[1] || m[2];
    if (!key) continue;
    if (
      [
        "howToSteps",
        "variations",
        "rulesTiming",
        "faqs",
        "sources",
        "facilitatorScript",
        "pitfalls",
        "originalVariant",
        "quote",
        "adultsWork",
        "whyItWorks",
        "sourcesIntro",
      ].includes(key)
    ) {
      continue;
    }
    slugKeys.push(key);
  }
  const uniqueSlugs = [...new Set(slugKeys)];

  let keepChecked = 0;
  for (const slug of uniqueSlugs) {
    if (noindex.has(slug)) continue;
    const block = findBlock(src, slug);
    if (!block) continue;
    keepChecked++;

    if (!/\bfaqs\s*:/.test(block)) {
      warnings.push(`[warn] ${slug}: missing faqs`);
    } else if (!/When should (you|I) skip/i.test(block)) {
      warnings.push(`[warn] ${slug}: no "When should you/I skip" FAQ`);
    }

    if (!/\bsources\s*:/.test(block)) {
      warnings.push(`[warn] ${slug}: missing sources / related guides`);
    }

    if (
      /\bsourcesIntro\s*:/.test(block) &&
      /draws on established|external|reference/i.test(block) &&
      !/external:\s*true/.test(block)
    ) {
      warnings.push(
        `[warn] ${slug}: sourcesIntro sounds external but no external:true links`
      );
    }
  }

  for (const e of errors) console.error(e);
  for (const w of warnings.slice(0, 40)) console.warn(w);
  if (warnings.length > 40) {
    console.warn(`…and ${warnings.length - 40} more warnings`);
  }

  console.log(
    `\nChecked ${uniqueSlugs.length} extras keys (${keepChecked} non-noindex). Errors=${errors.length} Warnings=${warnings.length}`
  );

  if (errors.length > 0) {
    process.exit(1);
  }
}

main();

/**
 * Insert a "When should you skip …" FAQ into extras blocks that lack one.
 * Skips EXCLUDED + NOINDEX slugs. Run: pnpm exec tsx scripts/add-skip-faqs.ts
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const EXTRAS = path.join(ROOT, "src/data/game-page-extras.ts");
const EXCLUDED = path.join(ROOT, "src/lib/games/excluded-slugs.ts");

function titleCaseFromSlug(slug: string): string {
  const special: Record<string, string> = {
    "skribbl-pictionary-online": "Skribbl / Pictionary online",
    "10-things-in-common": "10 Things in Common",
    "5-4-3-2-1-grounding-technique": "5-4-3-2-1",
    "two-truths-and-a-dream": "Two Truths and a Dream",
    "what-are-you-bringing-to-the-meeting": "What Are You Bringing to the Meeting",
    "where-do-we-come-from-what-is-famous": "Where Do We Come From",
  };
  if (special[slug]) return special[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function skipAnswer(slug: string): string {
  const defaults: Record<string, string> = {
    "skittles-sharing":
      "Skip when allergies cannot be accommodated with tokens, when prompts would go intimate, or in formal boardrooms. Prefer a check-in or This or That.",
    "telephone-charades":
      "Skip when the room cannot move or stay silent, when phrases would exclude visitors, or when time is under five minutes. Prefer a seated preference poll.",
    "guess-who-personal-trivia":
      "Skip in low-trust rooms, when facts cannot be screened, or when anyone refuses anonymous sharing. Prefer The Name Game or Chat Waterfall.",
    "skribbl-pictionary-online":
      "Skip if you cannot open a private room or keep a clean word list, or if third-party tools are blocked. Use a shared whiteboard draw-and-guess instead—or skip the opener.",
    "take-a-picture-of-your-shoes":
      "Skip in low-trust rooms, when cameras feel like status checks, or when anyone prefers off-camera. Prefer Chat Waterfall.",
    "the-question-web":
      "Skip when yarn or soft tosses are impractical, prompts would go intimate, or the room is a standup not a workshop. Prefer One Word Check-In.",
    "topics-tables":
      "Skip when seating cannot support table talks, prompts are invasive, or you only have five minutes. Prefer Speed Networking or a check-in.",
    "what-are-you-bringing-to-the-meeting":
      "Skip after bad news, during formal reviews, or if “bringing” would pressure status. Prefer a neutral preference poll or no opener.",
    "desert-island-scenario":
      "Skip when hypotheticals feel tone-deaf, time is tight, or the room needs decisions not fantasy. Prefer This or That.",
    "passions-tic-tac-toe":
      "Skip under about eight people, when the room cannot mingle, or when squares are identity-sensitive. Prefer Common Ground or pair prompts.",
    "show-and-tell":
      "Skip when objects would create status pressure, when sampling would take too long, or cameras are required. Prefer Chat Waterfall.",
    "crossword-names":
      "Skip for recurring teams that already know names, or when spelling games would exclude non-native speakers without help. Prefer The Name Game.",
    "guess-that-team-member":
      "Skip when clues cannot be screened, trust is low, or owners cannot refuse reveal. Prefer The Name Game.",
    "mystery-envelope":
      "Skip when prompts would humiliate, when you cannot screen the deck, or the room needs gravity. Prefer This or That.",
    "invention-pitch":
      "Skip in cold client rooms, when pitches would shame quieter people, or time is under ten minutes. Prefer a check-in.",
    "10-things-in-common":
      "Skip when pairs freeze without category cards, categories go intimate, or the agenda is under five minutes. Prefer This or That.",
    "reception-line":
      "Skip when space cannot form two lines, mobility needs are ignored, or trust is too low for timed hellos. Prefer Chat Waterfall.",
    "sole-mate":
      "Skip when shoe-matching would shame anyone, or safer prompts are unavailable. Prefer Find Your Match with work-safe pairs.",
    "story-swap":
      "Skip when visitor-safe prompts are missing, time is under eight minutes, or personal stories feel forced. Prefer Two Truths and a Dream.",
    "two-truths-and-a-dream":
      "Skip when trust is fragile, the agenda is under five minutes, or personal hopes feel exposed. Prefer One Word Check-In.",
    "appreciation-circle":
      "Skip in brand-new groups, after conflict without repair, or when praise would feel performative. Prefer a preference poll.",
    "year-of-the-coin":
      "Skip when coin years would exclude visitors, or the game becomes a money story. Prefer a light preference poll.",
    "unique-and-shared":
      "Skip when groups freeze without prompts, categories go intimate, or time is under eight minutes. Prefer Common Ground.",
    "count-up":
      "Skip when restarts would shame people, or the room needs gravity not a listening stunt. Prefer a check-in.",
    "wheel-of-fortune-introductions":
      "Skip when wedges would force personal disclosure, or a full circle would eat the agenda. Prefer The Name Game.",
    "where-do-we-come-from-what-is-famous":
      "Skip when origin questions feel excluding or unsafe, or famous-place prompts exclude newcomers. Prefer a preference poll.",
    "fantasy-vacation":
      "Skip when travel talk creates status pressure, or time is under five minutes. Prefer This or That.",
    "speed-dating-icebreaker":
      "Skip when the “dating” frame is wrong for work/school, space cannot rotate, or trust is low. Prefer Speed Networking with work prompts.",
    "near-and-far":
      "Skip when movement is unsafe, criteria are sensitive, or a seated option is missing. Prefer Line-Up seated continuum.",
    "crazy-handshake":
      "Skip when contact is unwelcome, formal attire constrains movement, or trust is low. Prefer a no-contact name game.",
    "helium-stick":
      "Skip when props are missing, contact/close quarters are unwanted, or the room needs gravity. Prefer Line-Up.",
    "group-map":
      "Skip when floor space is missing, origin questions feel unsafe, or standing is required without alternatives. Prefer a chat continuum.",
    "the-check-in":
      "Skip after layoffs, during formal reviews, or if you would diagnose people’s answers in public. Prefer no opener or a preference poll.",
    pterodactyl:
      "Skip in formal rooms, when silly noises would shame quieter people, or after bad news. Prefer a seated preference poll.",
  };
  return (
    defaults[slug] ||
    "Skip when trust is low, time is gone, prompts would force disclosure, or a safer substitute fits better. Prefer a preference poll, a check-in, or jump to the agenda."
  );
}

function parseSet(src: string, name: string): Set<string> {
  const set = new Set<string>();
  const m = src.match(new RegExp(`${name}\\s*=\\s*new Set\\(\\[([\\s\\S]*?)\\]\\)`));
  if (!m) return set;
  for (const x of m[1].matchAll(/"([^"]+)"/g)) set.add(x[1]);
  return set;
}

function findBlockRange(src: string, slug: string): { start: number; end: number } | null {
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
      if (depth === 0) return { start, end: i };
    }
  }
  return null;
}

function main() {
  let src = fs.readFileSync(EXTRAS, "utf8");
  const excludedSrc = fs.readFileSync(EXCLUDED, "utf8");
  const skip = new Set([
    ...parseSet(excludedSrc, "EXCLUDED_GAME_SLUGS"),
    ...parseSet(excludedSrc, "NOINDEX_GAME_SLUGS"),
  ]);

  const extrasStart = src.indexOf("export const GAME_PAGE_EXTRAS");
  const body = src.slice(extrasStart);
  const slugs: string[] = [];
  for (const m of body.matchAll(/\n\s*(?:"([^"]+)"|([a-z][a-z0-9-]*))\s*:\s*\{/g)) {
    const key = m[1] || m[2];
    if (!key || key === "howToSteps" || key === "faqs") continue;
    if (key.includes("-") || /^[a-z][a-z0-9]*$/.test(key)) slugs.push(key);
  }
  const unique = [...new Set(slugs)];

  let added = 0;
  for (const slug of unique) {
    if (skip.has(slug)) continue;
    const range = findBlockRange(src, slug);
    if (!range) continue;
    const block = src.slice(range.start, range.end + 1);
    if (/When should (you|I) skip/i.test(block)) continue;
    if (!/\bfaqs\s*:\s*\[/.test(block)) continue;

    const title = titleCaseFromSlug(slug);
    const faq = `      {
        q: "When should you skip ${title}?",
        a: "${skipAnswer(slug).replace(/"/g, '\\"')}",
      },
`;

    // Insert before the closing of faqs array: find "faqs: [" then matching ]
    const faqsIdx = block.indexOf("faqs:");
    const faqsBracket = block.indexOf("[", faqsIdx);
    let depth = 0;
    let faqsEnd = -1;
    for (let i = faqsBracket; i < block.length; i++) {
      if (block[i] === "[") depth++;
      else if (block[i] === "]") {
        depth--;
        if (depth === 0) {
          faqsEnd = i;
          break;
        }
      }
    }
    if (faqsEnd < 0) continue;

    const absFaqsEnd = range.start + faqsEnd;
    // Ensure previous FAQ entry ends with comma
    let insertAt = absFaqsEnd;
    const before = src.slice(Math.max(0, insertAt - 80), insertAt);
    if (!/,\s*$/.test(before.replace(/\s+$/, "")) && !/\[\s*$/.test(before)) {
      // add comma after last } if needed
      const lastBrace = src.lastIndexOf("}", insertAt - 1);
      if (lastBrace > 0 && src[lastBrace + 1] !== ",") {
        src = src.slice(0, lastBrace + 1) + "," + src.slice(lastBrace + 1);
        insertAt += 1;
      }
    }

    src = src.slice(0, insertAt) + "\n" + faq + "    " + src.slice(insertAt);
    added++;
  }

  fs.writeFileSync(EXTRAS, src, "utf8");
  console.log(`Added skip FAQs to ${added} extras blocks.`);
}

main();

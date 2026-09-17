const fs = require("fs");
const src = fs.readFileSync("src/data/game-page-extras.ts", "utf8");
const slugs = [
  "common-ground",
  "this-or-that-questions",
  "six-word-memoirs",
  "scavenger-hunt",
  "category-mixer",
  "guess-who-personal-trivia",
  "the-check-in",
  "10-things-in-common",
  "minefield",
  "if-then",
  "message-under-a-plate",
  "one-word-at-a-time",
  "5-4-3-2-1-grounding-technique",
  "dicebreakers",
  "story-swap",
  "fantasy-vacation",
  "two-truths-and-a-tinsel",
  "news-headline-warm-up",
  "beach-ball-qa",
  "sole-mate",
  "holiday-fortunes",
  "group-map",
  "bang",
  "team-superpower-collage",
];

function findBlock(slug) {
  const reQuoted = new RegExp('"' + slug + '": \\{');
  const reBare = new RegExp("\\b" + slug + ": \\{");
  let m = src.match(reQuoted) || src.match(reBare);
  if (!m) return null;
  const idx = m.index;
  const start = src.indexOf("{", idx);
  let depth = 0;
  let end = start;
  for (let i = start; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  return src.slice(start, end + 1);
}

function has(block, key) {
  return new RegExp("\\b" + key + "\\s*:").test(block);
}

function countFaqs(block) {
  const m = block.match(/\bq:\s*"/g);
  return m ? m.length : 0;
}

for (const slug of slugs) {
  const block = findBlock(slug);
  if (!block) {
    console.log(JSON.stringify({ slug, missing: true }));
    continue;
  }
  console.log(
    JSON.stringify({
      slug,
      chars: block.length,
      faqs: countFaqs(block),
      howToSteps: has(block, "howToSteps"),
      variations: has(block, "variations"),
      rulesTiming: has(block, "rulesTiming"),
      whyItWorks: has(block, "whyItWorks"),
      facilitatorScript: has(block, "facilitatorScript"),
      pitfalls: has(block, "pitfalls"),
      adultsWork: has(block, "adultsWork"),
      quote: has(block, "quote"),
      sources: has(block, "sources"),
      originalVariant: has(block, "originalVariant"),
    })
  );
}

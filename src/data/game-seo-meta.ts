/**
 * Per-slug SERP overrides for game detail pages.
 * Titles ≤60 chars; descriptions ≤160 chars. No keywords meta.
 * Prefer unique mechanism + players/time over "Learn how to play X…" templates.
 */
export type GameSeoMeta = {
  title: string;
  description: string;
};

export const GAME_SEO_META: Record<string, GameSeoMeta> = {
  "common-ground": {
    title: "Common Ground Icebreaker | Timed Shared Interests",
    description:
      "Pairs find non-obvious commonalities in timed rounds. 6–40 players, 8–12 min. Category cards, pass rules, and when to skip intimacy prompts.",
  },
  "this-or-that-questions": {
    title: "This or That Questions | 5-Minute Preference Poll",
    description:
      "Binary preference polls with hands, sides, or chat. 4–50 players, 5–8 min. Meeting-safe prompts and a two-channel vote variant included.",
  },
  "six-word-memoirs": {
    title: "Six Word Memoirs Icebreaker | Write-Then-Share",
    description:
      "Write exactly six words on a prompt, then optional share. 4–30 players, 10–15 min. Pass-as-write-only and sticky-note variant for quiet rooms.",
  },
  "scavenger-hunt": {
    title: "Scavenger Hunt Icebreaker | Short Team Hunt",
    description:
      "Run an 8–12 item hunt with photo proof and a hard stop. Small teams, seated roles, and youth-safe lists—not a half-day field day.",
  },
  "category-mixer": {
    title: "Category Mixer Icebreaker | Fast Hello Clusters",
    description:
      "Call a category; people cluster and share one mini-story. Inclusive prompts, seated options, and when bingo cards work better instead.",
  },
  "guess-who-personal-trivia": {
    title: "Guess Who Personal Trivia | Screened Facts",
    description:
      "Submit unique safe facts; group guesses authors. Owners may refuse reveal. 8–40 players, 10–20 min. Safer than unscreened party versions.",
  },
  "the-check-in": {
    title: "The Check-In Icebreaker | Meeting Arrival Ritual",
    description:
      "One word, color, weather, or scale to arrive before the agenda. Keep it short; compare One Word and Weather Check-In when you need a named format.",
  },
  "10-things-in-common": {
    title: "10 Things in Common | Pair Discovery Mixer",
    description:
      "Pairs list shared interests beyond the obvious, then share one surprise. Quieter cousin to Human Bingo for 6–50 people in about 8–12 minutes.",
  },
  minefield: {
    title: "Minefield Team Game | Guided Trust Navigation",
    description:
      "A walker crosses soft obstacles with a guide’s voice only. Consent, veto cards, and debrief questions for work teams—skip as a stranger opener.",
  },
  "if-then": {
    title: "If Then Icebreaker | Playful Prompt Completions",
    description:
      "Complete light If/Then prompts out loud or in chat. 5–30 players, 8–12 min. Work-safe decks and when moral dilemmas belong elsewhere.",
  },
  "message-under-a-plate": {
    title: "Message Under a Plate | Holiday Table Prompt",
    description:
      "Seat guests find a prompt under a plate and share briefly. Pass and redraw rules, allergy-aware setups, and quieter write-first options.",
  },
  "one-word-at-a-time": {
    title: "One Word at a Time | Shared Sentence Game",
    description:
      "Build one silly sentence together—one word each turn. Not the same as One Word Check-In. Best after names are known; pass anytime.",
  },
  "5-4-3-2-1-grounding-technique": {
    title: "5-4-3-2-1 Grounding | Optional Sensory Reset",
    description:
      "Private sensory reset—not a party game or therapy claim. 3–6 min. Offer opt-out; use before tense agendas, not as forced entertainment.",
  },
  dicebreakers: {
    title: "Dicebreakers Icebreaker | Roll-for-Prompt Talk",
    description:
      "Roll a die to pick conversation prompts. 4–30 players. Keep decks school- and work-safe; swap candy mechanics for tokens when needed.",
  },
  "story-swap": {
    title: "Story Swap Icebreaker | Paired Prompt Stories",
    description:
      "Partners exchange short stories from visual or text prompts. 6–40 players, 10–15 min. Visitor-safe options for church small groups.",
  },
  "fantasy-vacation": {
    title: "Fantasy Vacation Icebreaker | Dream Trip Share",
    description:
      "Share a dream destination in one minute—no budget talk required. 4–30 players, 8–15 min. Skip origin grilling; keep travel optional.",
  },
  "two-truths-and-a-tinsel": {
    title: "Two Truths and a Tinsel | Holiday TTL Twist",
    description:
      "Holiday twist on Two Truths: two facts plus one festive fib or wish. Pass rules and no-lie dream variant for mixed family tables.",
  },
  "news-headline-warm-up": {
    title: "News Headline Warm-up | Funny Meeting Opener",
    description:
      "Invent a playful headline about the meeting topic, then share one line. 4–30 players, 8–12 min. Keep satire kind; no real-news trauma.",
  },
  "beach-ball-qa": {
    title: "Beach Ball Q&A Icebreaker | Toss-and-Answer",
    description:
      "Catch a soft ball, answer the nearest prompt, toss on. Pass allowed. Zone large rooms; great for teens and youth nights with light prompts.",
  },
  "sole-mate": {
    title: "Sole Mate Icebreaker | Pair by Prompt Match",
    description:
      "Match on shoe style—or safer snack/commute prompts; shoes stay on. Fast pairing for mixers when Human Bingo feels too long.",
  },
  "holiday-fortunes": {
    title: "Holiday Fortunes Icebreaker | Prompt Jar Shares",
    description:
      "Draw a festive prompt and answer briefly. Pass/redraw allowed. Keep faith-optional for mixed holiday rooms and church tables.",
  },
  "group-map": {
    title: "Group Map Icebreaker | Spectrum Not Binary",
    description:
      "People place themselves on a room spectrum by prompt—not a forced binary. Seated continua for mobility needs; skip identity audits.",
  },
  bang: {
    title: "Bang Icebreaker | Optional Pointing Spike",
    description:
      "Optional high-energy pointing spike with no-elimination defaults. Often skip at work; rename and soften for youth rooms that need movement.",
  },
  "team-superpower-collage": {
    title: "Team Superpower Collage | Shared Identity Tiles",
    description:
      "Groups add tiles naming observable strengths plus a process kryptonite. For existing teams—not a stranger opener. Keep two tiles as a trial.",
  },

  // Discovered / not indexed (2026-09-18 GSC pass)
  "appreciation-circle": {
    title: "Appreciation Circle Icebreaker | Trusted Groups",
    description:
      "Take turns naming one appreciation about others. 5–20 players, 15–30 min. Trusted groups only—skip with strangers or cold client rooms.",
  },
  "crossword-names": {
    title: "Crossword Names Icebreaker | Name Grid Warm-Up",
    description:
      "Build a visible crossword of names on a board or slide. 8–30 players, 10–15 min. Virtual-friendly; great for name learning without drills.",
  },
  "guess-that-team-member": {
    title: "Guess That Team Member | Anonymous Fact Guess",
    description:
      "Anonymous safe facts; the group guesses who wrote each. 6–40 players, 10–15 min. Owners may refuse reveal—screen prompts first.",
  },
  "icebreaker-bingo": {
    title: "Icebreaker Bingo | Theme-Deck Mingling Game",
    description:
      "Custom bingo prompts for large mingling rooms. Soft line wins and pass anytime. Distinct from classic Human Bingo decks.",
  },
  "marshmallow-challenge": {
    title: "Marshmallow Challenge | Tower Team Build",
    description:
      "Teams build a spaghetti tower that holds a marshmallow. 8–40 players, 15–25 min. Allergen stand-ins and seated roles included.",
  },
  "motion-name-game": {
    title: "Motion Name-Game | Gesture Name Recall",
    description:
      "Attach a small gesture to each name, then replay the chain. 8–30 players, 8–12 min. Offer seated gestures; chunk groups over 12.",
  },
  pterodactyl: {
    title: "Pterodactyl Icebreaker | Soft No-Teeth Laughs",
    description:
      "Say “pterodactyl” without showing teeth—soft or no-elimination defaults. 8–30 players, 8–12 min. Skip forced humiliation rounds.",
  },
  "show-and-tell": {
    title: "Show and Tell Icebreaker | Object Story Share",
    description:
      "Share a meaningful object in one short story. 4–15 players, 20–40 min. Virtual photo options; pass anytime for shy rooms.",
  },
  "take-a-picture-of-your-shoes": {
    title: "Picture of Your Shoes | Quick Virtual Share",
    description:
      "Share a shoe photo and one line about it. 5–30 players, 5–10 min. Shoes stay on; offer snack/commute alt prompts for privacy.",
  },
  "telephone-charades": {
    title: "Telephone Charades | Act-Down-the-Line Game",
    description:
      "Act a prompt down a line and watch it change. 10–40 players, 10–15 min. Clean prompt lists; seated lane options for access.",
  },
  "unique-and-shared": {
    title: "Unique and Shared Icebreaker | One Each",
    description:
      "Find one unique fact and one shared interest per pair or trio. 6–40 players. Bridges Common Ground without a long second game.",
  },
  "where-do-we-come-from-what-is-famous": {
    title: "Hometown Famous Icebreaker | Optional Share",
    description:
      "Share hometown or a local highlight—optional, not an origin quiz. 6–50 players, 10–20 min. Ban grilling; pass anytime.",
  },
  "crazy-handshake": {
    title: "Crazy Handshake Icebreaker | Pair Invent Moves",
    description:
      "Pairs invent a short handshake, then remix with new partners. Space and consent first; offer no-contact fist-bump variants.",
  },
  "desert-island-scenario": {
    title: "Desert Island Scenario | Three-Item Choice",
    description:
      "Pick three items for a playful island prompt—not survival theater. 4–20 players, 15–25 min. Keep answers light and optional.",
  },
  "helium-stick": {
    title: "Helium Stick Team Game | Lower the Stick",
    description:
      "Group lowers a light stick together without dropping it. Needs floor space and clear safety. Skip cramped or formal rooms.",
  },
  "near-and-far": {
    title: "Near and Far Icebreaker | Room Spectrum",
    description:
      "Stand on a continuum by prompt—spectrum, not a forced binary. Seated options for mobility; skip identity-audit prompts.",
  },
  "paper-bag-pickup": {
    title: "Paper Bag Pickup | Low-Contact Lane Race",
    description:
      "Relay-style pickup with seated lane options. Lower-contact Human Knot alternative for teams that need movement without tangles.",
  },
  "passions-tic-tac-toe": {
    title: "Passions Tic-Tac-Toe | Interest Grid Mixer",
    description:
      "Fill a tic-tac-toe grid with interests, then find matches. Work-friendly prompts; great curated opener for meeting kickoffs.",
  },
  "virtual-background-story": {
    title: "Virtual Background Story | 15-Second Why",
    description:
      "Pick a themed background (or blur) and share a 15-second why. Plain walls count. Reset before slides; great for Zoom warm-ups.",
  },
  "year-of-the-coin": {
    title: "Year of the Coin | Memory Year Draw",
    description:
      "Draw a year and share one memory—or pass and redraw. 4–30 players, 8–12 min. Keep prompts light for church and work rooms.",
  },

  // Related not-indexed (URL unknown) — same SERP pass
  "guess-who": {
    title: "Guess Who Icebreaker | Classroom Fact Bowl",
    description:
      "Collect fun facts and guess who they belong to. Distinct from screened Personal Trivia—use for classes that need a simple bowl format.",
  },
  "mystery-envelope": {
    title: "Mystery Envelope Icebreaker | Draw-a-Prompt",
    description:
      "Draw a prompt from an envelope and discuss briefly. 6–50 players, 10–15 min. Facilitator-screened prompts; pass/redraw allowed.",
  },
  "skittles-sharing": {
    title: "Skittles Sharing Icebreaker | Color Prompts",
    description:
      "Color maps to light prompts—or allergy-safe tokens. 6–40 players, 8–12 min. No forced eating; visitor-safe for youth rooms.",
  },
  "the-movie-pitch-icebreaker": {
    title: "Movie Pitch Icebreaker | One-Minute Pitch",
    description:
      "Pitch a fake movie in one minute using a prompt card. Creative laugh warm-up; keep ratings G and skip mean character jabs.",
  },
  "two-truths-and-a-dream": {
    title: "Two Truths and a Dream | No-Lie TTL Twist",
    description:
      "Two facts plus one aspiration—no lie round. Safer for church small groups and work rooms that want storytelling without gotchas.",
  },
  "would-you-rather-training": {
    title: "Would You Rather Training | Work Tradeoffs",
    description:
      "Work-oriented either/or prompts for training rooms. Differentiated from party Would You Rather—process choices, not dares.",
  },
};

export function getGameSeoMeta(slug: string): GameSeoMeta | undefined {
  return GAME_SEO_META[slug];
}

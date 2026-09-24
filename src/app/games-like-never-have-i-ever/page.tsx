import { getAllGames } from "@/db/queries/games";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./nhie.module.css";

export const revalidate = 86400;

const title = "12 Games Like Never Have I Ever (2026)";
const description =
  "Compare 12 games like Never Have I Ever for work, class, and Zoom—safer prompts, timing, no drinking, and when to skip the party deck.";
const canonical = "https://www.icebreakergames.site/games-like-never-have-i-ever";
const ogImage = "https://www.icebreakergames.site/img/games-like-never-have-i-ever-hero.jpg";
const ogImageAlt =
  "games-like-never-have-i-ever — adults raising hands during a facilitator-led prompt circle";
const authorName = "Elena Hart";
const datePublished = "2026-09-19";
const dateModified = "2026-09-19";

const nhieEntitySameAs = ["https://en.wikipedia.org/wiki/Never_have_I_ever"] as const;

const scenarioPicks = [
  {
    title: "Work meetings",
    body: "Skip confession rounds. Run This or That, Would You Rather, or Dicebreakers with a work-safe die. Six to eight prompts, then the agenda.",
    href: "/icebreaker-games-for-meetings",
    linkLabel: "Meeting icebreakers",
  },
  {
    title: "Classrooms & teens",
    body: "Use Would You Rather or Six Word Memoirs unless you already screened every prompt. Ban dating, money, family conflict, and anything illegal.",
    href: "/icebreaker-games-for-teens",
    linkLabel: "Icebreakers for teens",
  },
  {
    title: "Virtual / Zoom",
    body: "Chat beats fingers. People type “I have” or “pass.” This or That and Emoji Introduction finish faster than a spoken circle.",
    href: "/virtual-icebreaker-games",
    linkLabel: "Virtual icebreaker games",
  },
  {
    title: "Only a party deck on hand",
    body: "Do not improvise cleaner prompts in the room. Skip the game. A spicy list will get read out loud the moment you hand over the mic.",
    href: "/when-to-skip-an-icebreaker",
    linkLabel: "When to skip an icebreaker",
  },
];

const comparisonRows = [
  ["Never Have I Ever", "Med–High", "5–10 min", "Only with your own safe deck"],
  ["This or That", "Low", "5–8 min", "Fastest work-safe substitute"],
  ["Would You Rather", "Low", "5–10 min", "Opinions, not confessions"],
  ["Dicebreakers", "Low", "5–10 min", "Prompt deck without targeting"],
  ["Two Truths and a Lie", "Medium", "15–20 min", "Stories people choose to tell"],
  ["Two Truths and a Dream", "Low", "8–12 min", "No lie, no drinking frame"],
  ["Common Ground", "Low", "8–12 min", "Shared facts, small groups"],
  ["Emoji Introduction", "Low", "5–15 min", "Chat-first on Zoom"],
  ["Six Word Memoirs", "Low", "8–12 min", "Write first, share optional"],
  ["Guess Who (trivia)", "Medium", "10–15 min", "Screen facts before the reveal"],
  ["Story Swap", "Med", "10–15 min", "Pairs, not a public confession"],
  ["Desert Island", "Low", "8–12 min", "Fictional picks, easy pass"],
];

const gameEntries = [
  {
    slug: "never-have-i-ever",
    name: "Never Have I Ever",
    bestFor: "The classic “who has done this” reveal—only when you own the prompt list",
    players: "6–30 (larger in chat)",
    time: "5–10 min",
    materials: "Curated prompt list",
    steps: [
      "Rewrite the deck before you arrive. Travel, food, skills, hobbies, mild work firsts. Ban dating, alcohol, illegal acts, and trauma.",
      "You read every prompt. Do not let the room invent lines unless you can veto on the spot.",
      "People put a finger down, raise a hand, or type “I have.” Pass is always allowed. No explaining.",
      "Stop after six to eight prompts. Do not rank who is “most experienced.”",
    ],
    variation:
      "Work-only deck: tools and mild process fails, such as shipping on a Friday on purpose. If the laugh targets one person, end the round.",
  },
  {
    slug: "this-or-that-questions",
    name: "This or That Questions",
    bestFor: "The default substitute when Never Have I Ever would force a confession",
    players: "4–60+",
    time: "5–8 min",
    materials: "Prompt list or slide",
    steps: [
      "Read a clean pair (coffee/tea, docs/slides, morning/night).",
      "People vote with hands, sides of the room, or chat—at the same time.",
      "Do not ask anyone to justify a minority answer.",
      "Run about eight pairs, then start the meeting.",
    ],
    variation: "On Zoom, use reactions so large rooms do not unmute one by one.",
  },
  {
    slug: "would-you-rather",
    name: "Would You Rather",
    bestFor: "A debate-shaped cousin that stays hypothetical instead of biographical",
    players: "6–100+",
    time: "5–10 min",
    materials: "Prompt list",
    steps: [
      "Read two options. Keep them silly or work-process, not body, money, or dating.",
      "People pick A or B. One sentence per side is enough.",
      "Skip any pair someone flags. Do not force a defense.",
      "Six to ten prompts, then stop.",
    ],
    variation: "Training rooms can use process tradeoffs instead of party dilemmas.",
  },
  {
    slug: "dicebreakers",
    name: "Dicebreakers",
    bestFor: "A prompt deck with the same pace as Never Have I Ever, without a confession score",
    players: "4–30",
    time: "5–10 min",
    materials: "One die and six prompts",
    steps: [
      "Map faces 1–6 to safe prompts: tool, small win, snack, hobby, learning goal, weekend plan.",
      "Each person rolls once and answers in 20–30 seconds, or passes and re-rolls once.",
      "Above 12 people, sample in groups of four instead of a full circle.",
      "Put the die away after one pass.",
    ],
    variation: "No die in the room: draw a numbered sticky. Same six prompts.",
  },
  {
    slug: "two-truths-and-a-lie",
    name: "Two Truths and a Lie",
    bestFor: "When the group wants a reveal, but each person should choose what to share",
    players: "3–20",
    time: "15–20 min",
    materials: "None",
    steps: [
      "Each person prepares two true statements and one false statement.",
      "They share all three. The group guesses the lie.",
      "Reveal quickly. Cheer the story, not the “gotcha.”",
      "Cap turns so a large circle does not eat the agenda.",
    ],
    variation: "Theme the round: hobbies, travel, or one fact from this project.",
  },
  {
    slug: "two-truths-and-a-dream",
    name: "Two Truths and a Dream",
    bestFor: "Rooms that want personal stories and refuse both lying and drinking-game energy",
    players: "4–12 ideal",
    time: "8–12 min",
    materials: "None",
    steps: [
      "Each person shares two true facts and one hope or plan.",
      "Listeners may ask one question. Guessing which line is the dream is optional.",
      "Model a mild example first (learn a song, visit a park).",
      "Name two themes you heard, then open the real session.",
    ],
    variation: "Skip the guess entirely if the room is shy.",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    bestFor: "Small groups that want overlap without a public “I have” tally",
    players: "6–40",
    time: "8–12 min",
    materials: "Timer",
    steps: [
      "Split into groups of 4–6.",
      "Find non-obvious things everyone shares. Ban “we all breathe.”",
      "Each group reports one find.",
      "Do not score who found the most.",
    ],
    variation: "Theme cards: food, tools, or how people like to work.",
  },
  {
    slug: "emoji-introduction",
    name: "Emoji Introduction",
    bestFor: "A visual stand-in when fingers and spoken confessions fail on video",
    players: "5–30",
    time: "5–15 min",
    materials: "Chat or whiteboard",
    steps: [
      "Each person posts 2–3 emojis about themselves or the week.",
      "The group guesses once. The author explains in one sentence.",
      "In large calls, only volunteers explain.",
      "Show your own example before anyone else posts.",
    ],
    variation: "Chat-only rounds can finish in under eight minutes.",
  },
  {
    slug: "six-word-memoirs",
    name: "Six Word Memoirs",
    bestFor: "A writing constraint that keeps depth optional",
    players: "4–30",
    time: "8–12 min",
    materials: "Paper, notes, or chat",
    steps: [
      "Prompt: six words about this week, this team, or today.",
      "Everyone writes. Reading aloud is optional.",
      "Invite two volunteers to expand one word for 20 seconds.",
      "Do not grade the writing.",
    ],
    variation: "Sticky notes on a wall for quiet rooms that dislike the mic.",
  },
  {
    slug: "guess-who-personal-trivia",
    name: "Guess Who (Personal Trivia)",
    bestFor: "A reveal game where you can screen facts before anyone hears them",
    players: "6–25",
    time: "10–15 min",
    materials: "Paper, bowl, or form",
    steps: [
      "Each person writes one surprising true fact.",
      "You read the pile and cut anything mean, private, or off-brief.",
      "The group guesses the author. The writer may refuse the reveal.",
      "Keep teasing short. No pile-on.",
    ],
    variation: "Collect facts in a form before a virtual session so screening happens offline.",
  },
  {
    slug: "story-swap",
    name: "Story Swap",
    bestFor: "When you want stories, but not in front of the whole room",
    players: "6–12 ideal",
    time: "10–15 min",
    materials: "Timer",
    steps: [
      "Pair people. Prompt: a small win this month, or a favorite local food.",
      "Each person speaks 60–90 seconds. The partner only listens.",
      "Partners introduce each other in one sentence. Self-intro is allowed.",
      "Thank the pairs and start the agenda. No second round unless trust is already high.",
    ],
    variation: "Above 12, sample two pairs in the main room after breakout swaps.",
  },
  {
    slug: "desert-island-scenario",
    name: "Desert Island Scenario",
    bestFor: "Preference sharing that stays fictional, so nobody confesses a real history",
    players: "6–30",
    time: "8–12 min",
    materials: "None",
    steps: [
      "Prompt: three items you would take. Keep it playful, not survival theater.",
      "Give 60–90 seconds of quiet think time. Listening only is a valid pass.",
      "Share in trios. One volunteer per trio can report a funny combo.",
      "Optional one-minute bridge: which item maps to something this project needs. Or skip it.",
    ],
    variation: "Office island: only workplace tools, snacks, and headphones.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    authors: [{ name: authorName, url: "https://www.icebreakergames.site/about" }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "Ice Breaker Games",
      publishedTime: datePublished,
      modifiedTime: dateModified,
      authors: [authorName],
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
          type: "image/jpeg",
          width: 1600,
          height: 900,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: { url: ogImage, alt: ogImageAlt },
    },
    robots: { index: true, follow: true },
  };
}

export default async function GamesLikeNeverHaveIEverPage() {
  const games = await getAllGames();
  const featured = gameEntries
    .map((entry) => {
      const game = games.find((g) => g.slug === entry.slug);
      return game ? { ...entry, game } : { ...entry, game: null };
    })
    .filter((entry) => entry.game);

  const listSource = featured.length > 0 ? featured : gameEntries;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    numberOfItems: listSource.length,
    itemListElement: listSource.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      url: `https://www.icebreakergames.site/games/${entry.slug}`,
    })),
  };

  const faqs = [
    {
      q: "What are good games like Never Have I Ever?",
      a: "For the same fast reveal with less risk, use This or That, Would You Rather, or Dicebreakers. If you want stories people choose themselves, use Two Truths and a Lie or Two Truths and a Dream. Keep classic Never Have I Ever only with a deck you wrote.",
    },
    {
      q: "What can I play instead of Never Have I Ever at work?",
      a: "This or That or Would You Rather. Both finish in about 5–10 minutes, need no props beyond a prompt list, and do not ask who has done something personal. Dicebreakers works if you want a rolled prompt and a 30-second answer.",
    },
    {
      q: "Is Never Have I Ever okay for school or teens?",
      a: "Only with school-safe prompts you control, a pass rule, and no alcohol. If the list mentions dating, money, family conflict, or illegal acts, do not run it. Use Would You Rather or Six Word Memoirs instead.",
    },
    {
      q: "Can you play Never Have I Ever without drinking?",
      a: "Yes. Fingers, raised hands, or a chat reply replace drinks. This site does not publish a drinking version. The party mechanic—say something you have not done, anyone who has done it drinks—does not belong in meetings, class, or youth groups.",
    },
    {
      q: "What are safe Never Have I Ever prompts?",
      a: "Examples we use: traveled solo; cooked for more than five people; given a talk to 50 or more people; learned a new language; worked remotely for a year. You read them. People may pass without explaining.",
    },
    {
      q: "How do you run games like Never Have I Ever on Zoom?",
      a: "Do not go around the gallery. Post the prompt in chat and have people reply “I have” or “pass” at once. For a shorter call, switch to This or That reactions or Emoji Introduction.",
    },
    {
      q: "When should you skip Never Have I Ever?",
      a: "Skip it when the only deck you have is a party list, when trust is thin, when someone already asked not to share personal history, or when you have under five minutes and no pass rule. Open the agenda instead.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: title,
    description,
    image: [ogImage],
    datePublished,
    dateModified,
    inLanguage: "en",
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
      url: canonical,
    },
    about: {
      "@type": "Thing",
      name: "Never have I ever",
      description:
        "A party game in which players name something they have not done and others indicate if they have.",
      sameAs: [...nhieEntitySameAs],
    },
    author: { "@id": "https://www.icebreakergames.site/#organization" },
    publisher: { "@id": "https://www.icebreakergames.site/#organization" },
    isPartOf: {
      "@id": "https://www.icebreakergames.site/#website",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src="/img/games-like-never-have-i-ever-hero.jpg"
              alt={ogImageAlt}
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className={styles.heroScrim} aria-hidden="true" />
          <div className={styles.heroInner}>
            <nav className={styles.crumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/games">Games</Link>
              <span>/</span>
              <span>Games like Never Have I Ever</span>
            </nav>
            <p className={styles.brand}>Ice Breaker Games</p>
            <h1 className={styles.heroTitle}>12 Games Like Never Have I Ever</h1>
            <p className={styles.heroLead}>
              Need games like Never Have I Ever that still work in a meeting or classroom? Compare
              12 substitutes by risk and time—and keep the classic only with a deck you control.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/games/never-have-i-ever" className={styles.ctaPrimary}>
                How to play Never Have I Ever
              </Link>
              <Link href="/when-to-skip-an-icebreaker" className={styles.ctaGhost}>
                When to skip it
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.body}>
          <p className={styles.byline}>
            By <Link href="/about">{authorName}</Link>
            <span aria-hidden="true"> · </span>
            <time dateTime={datePublished}>Published {datePublished}</time>
            <span aria-hidden="true"> · </span>
            <time dateTime={dateModified}>Updated {dateModified}</time>
          </p>

          <section className={styles.guide}>
            <h2>Quick answer: best games like Never Have I Ever</h2>
            <p>
              If you want the hand-raise reveal and you already wrote a clean list, run{" "}
              <Link href="/games/never-have-i-ever">Never Have I Ever</Link> for 5–10 minutes and
              stop after six to eight prompts. If the deck is a party list, do not “tone it down”
              live. Switch to{" "}
              <Link href="/games/this-or-that-questions">This or That</Link> or{" "}
              <Link href="/games/would-you-rather">Would You Rather</Link>. If trust is thin, skip
              the opener. The “party deck only” scenario below links the skip guide.
            </p>
          </section>

          <section className={styles.snapshot} aria-label="When these games work best">
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Best for</p>
              <p>
                Groups that like a fast shared reveal. The useful part is simultaneous answers, not
                the drinking frame most people remember.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Players / Time</p>
              <p>
                Finger rounds fit about 6–30 people in 5–10 minutes. Chat versions can go larger.
                Binary substitutes often finish in under eight minutes.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Avoid when</p>
              <p>
                You only have dating, alcohol, or dare prompts; the room includes students or new
                coworkers; or someone has asked not to share personal history.
              </p>
            </div>
          </section>

          <section className={styles.guide}>
            <h2>What people mean by “games like Never Have I Ever”</h2>
            <p>
              Searchers usually want a <strong>short confession-or-preference round</strong> where
              everyone answers at once. They do not always want the party version. Good substitutes
              keep the speed and drop the scoreboard of who has “done more.”
            </p>
            <blockquote className={styles.quote}>
              <p>
                “A version that requires no drinking, usually played by children and underage
                adolescents, has players counting scores on their fingers instead.”
              </p>
              <cite className={styles.cite}>
                —{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Never_have_I_ever"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wikipedia, “Never have I ever”
                </a>
              </cite>
            </blockquote>
            <p>
              Wikipedia also describes the common drinking form: a player names something they have
              not done, and anyone who has done it takes a drink. We do not publish that version.
              Fingers, hands, or chat are the mechanics on this site. Even then, the facilitator
              owns the list. Crowd-sourced prompts are how a school or work round goes sideways.
            </p>
            <p>
              Party lists often sit next to Truth or Dare or “most likely to” votes that pick a
              person in the room. We do not host those. If you want a guess, use screened personal
              trivia. If you want opinions, use a binary poll. For story reveals people control
              themselves, the closer cousin is{" "}
              <Link href="/games-like-two-truths-and-a-lie">games like Two Truths and a Lie</Link>.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/games-like-never-have-i-ever-meeting.jpg"
              alt="games-like-never-have-i-ever — work team answering a safe prompt with raised hands"
              width={1600}
              height={900}
              className={styles.figureImg}
            />
            <figcaption className={styles.figureCaption}>
              Work rooms: you read the card. Hands up is enough. No one explains.
            </figcaption>
          </figure>

          <section className={styles.sectionHead}>
            <h2>Pick by scenario</h2>
            <p>Choose by what the deck asks people to admit. Time is the second constraint.</p>
          </section>
          <div className={styles.scenarioGrid}>
            {scenarioPicks.map((item) => (
              <article key={item.title} className={styles.scenarioCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href}>{item.linkLabel} →</Link>
              </article>
            ))}
          </div>

          <section className={styles.guide}>
            <h2>Quick comparison: risk, time, and vibe</h2>
            <p>Shortlist two options here, then open the run card. Do not collect all twelve.</p>
            <div className={styles.tableWrap}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Risk</th>
                    <th scope="col">Time</th>
                    <th scope="col">Best vibe</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([game, risk, time, vibe]) => (
                    <tr key={game}>
                      <td>{game}</td>
                      <td>{risk}</td>
                      <td>{time}</td>
                      <td>{vibe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.sectionHead}>
            <h2>Best games like Never Have I Ever</h2>
            <p>
              Ordered from closest mechanic to safest pivot. Numbers match the facilitator cards in
              our library, not a party-app timer.
            </p>
          </section>

          <section className={styles.gameList}>
            {listSource.map((entry, index) => (
              <article key={entry.slug} className={styles.gameItem}>
                <div className={styles.gameIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className={styles.gameTitle}>
                    <Link href={`/games/${entry.slug}`}>{entry.name}</Link>
                  </h2>
                  <p className={styles.gameBestFor}>{entry.bestFor}</p>
                  <div className={styles.metaRow}>
                    <span className={styles.meta}>Players: {entry.players}</span>
                    <span className={styles.meta}>Time: {entry.time}</span>
                    <span className={styles.meta}>Materials: {entry.materials}</span>
                  </div>
                  <div className={styles.howTo}>
                    <h3>How to play</h3>
                    <ol>
                      {entry.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  <p className={styles.variation}>
                    <strong>Variation: </strong>
                    {entry.variation}
                  </p>
                  <Link href={`/games/${entry.slug}`} className={styles.gameLink}>
                    Full facilitator guide →
                  </Link>
                </div>
              </article>
            ))}
          </section>

          <section className={styles.scriptBand}>
            <h2>Facilitator script (30 seconds)</h2>
            <p>
              “I will read the prompts. Raise a hand or put a finger down if it applies. Type ‘I
              have’ if we are on video. Pass anytime—no story required. We are not ranking anyone.
              Six prompts, then we start.”
            </p>
          </section>

          <section className={styles.safety}>
            <h2>Facilitator notes &amp; safety</h2>
            <p>
              The game fails when the list is meaner than the room. Use these rules for Never Have
              I Ever and for any substitute that still asks people to reveal something.
            </p>
            <ul>
              <li>Write the deck yourself. Six to eight lines is a full round.</li>
              <li>No alcohol mechanic in school, work, church, or youth settings.</li>
              <li>Ban dating, bodies, salary, illegal acts, and family conflict.</li>
              <li>Pass is silent. Do not ask “why did you pass?”</li>
              <li>If laughter targets one person, stop. Do not finish the list.</li>
            </ul>
          </section>

          <section className={styles.guide}>
            <h2>How to choose among games like Never Have I Ever</h2>
            <p>
              Pick by disclosure, not by how funny the app store version looks. A clean Never Have
              I Ever deck still reveals real history. This or That and Would You Rather reveal a
              preference. Six Word Memoirs and Story Swap reveal only what someone agrees to say
              out loud.
            </p>
            <h3>Safe prompt examples</h3>
            <p>Use these as a starter deck, then cut any line that does not fit the room:</p>
            <ul>
              <li>Never have I ever traveled solo.</li>
              <li>Never have I ever cooked for more than five people.</li>
              <li>Never have I ever given a talk to 50 or more people.</li>
              <li>Never have I ever learned a new language.</li>
              <li>Never have I ever worked remotely for a year.</li>
            </ul>
            <h3>For work</h3>
            <p>
              Prefer This or That, Would You Rather, or a six-prompt Dicebreakers die. A work twist
              on the classic—“never have I ever shipped on a Friday on purpose”—is optional, and
              only after you have modeled a mild one. More timed openers are on the meeting
              icebreakers page linked above.
            </p>
            <h3>For classrooms and teens</h3>
            <p>
              Default to Would You Rather or Six Word Memoirs.{" "}
              <Link href="/games/human-bingo">Human Bingo</Link> is the better mingling option when
              you need movement and a printed card, not a confession circle. The teen hub linked
              above is the chooser for advisory and youth nights.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/img/games-like-never-have-i-ever-classroom.jpg"
                alt="games-like-never-have-i-ever — students in a classroom circle using a low-risk prompt list"
                width={1600}
                height={900}
                className={styles.figureImg}
              />
              <figcaption className={styles.figureCaption}>
                Classrooms: a printed list you screened beats prompts students shout out.
              </figcaption>
            </figure>

            <h3>For virtual calls</h3>
            <p>
              Simultaneous chat. One prompt, everyone replies, you do not call on the quiet tiles.
              If the call is already late, drop to This or That. The virtual hub covers Zoom and
              Teams timing in more detail.
            </p>
            <h3>Debrief, if you need one</h3>
            <ul>
              <li>Which prompt was easiest to answer without a story?</li>
              <li>Did anyone need the pass, and did we honor it?</li>
              <li>What should we cut before we run this with a new group?</li>
            </ul>
          </section>

          <section className={styles.guide}>
            <h2>FAQ about games like Never Have I Ever</h2>
            {faqs.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section className={styles.sources} aria-labelledby="sources-heading">
            <h2 id="sources-heading">Sources &amp; further reading</h2>
            <p>
              The drinking-game description and the finger-count variation are from the Wikipedia
              article below. Run cards and bans on this page follow our own facilitator notes.
            </p>
            <ol>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Never_have_I_ever"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wikipedia — Never have I ever
                </a>
              </li>
              <li>
                <Link href="/games/never-have-i-ever">
                  Ice Breaker Games — Never Have I Ever rules
                </Link>
              </li>
            </ol>
          </section>

          <section className={styles.related}>
            <h2>Related guides</h2>
            <p>
              Rules for the classic sit on the Never Have I Ever page. For a story-based cousin,
              use the Two Truths comparison. Meeting, teen, and virtual choosers are linked in the
              scenario cards above.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

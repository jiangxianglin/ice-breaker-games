import { getAllGames } from "@/db/queries/games";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./free-fun.module.css";

export const revalidate = 86400;

const title = "Free Fun Icebreaker Games (No Signup, No Cringe)";
const description =
  "Free fun icebreaker games you can run today—no signup. Twelve facilitator run cards with a chooser for meetings, small groups, and Zoom, plus what to skip.";
const canonical = "https://www.icebreakergames.site/free-fun-icebreaker-games";
const ogImage =
  "https://www.icebreakergames.site/img/free-fun-icebreaker-games-hero.jpg";
const ogImageAlt =
  "Adults laughing during free-fun-icebreaker-games at a meeting table";
const authorName = "Ice Breaker Games Editorial Team";
const datePublished = "2026-09-16";
const dateModified = "2026-09-16";

const gameEntries = [
  {
    slug: "would-you-rather",
    name: "Would You Rather",
    bestFor: "Fast laughs when the room needs motion",
    players: "6–60",
    time: "5–10 min",
    materials: "Prompt list",
    funLevel: "High",
    steps: [
      "Read two absurd-but-safe options.",
      "People move sides, raise hands, or reply A/B in chat.",
      "Ask one person per side for a one-sentence defense—optional.",
      "Run 5–8 rounds, then start the real agenda.",
    ],
    variation: "Meeting-tool prompts: sticky notes vs whiteboard; camera-on vs strong chat.",
    safety: "Skip body jokes, politics, money, and dating prompts.",
  },
  {
    slug: "rock-paper-scissors-tournament",
    name: "Rock Paper Scissors Tournament",
    bestFor: "Huge groups that need noise and cheering",
    players: "12–100+",
    time: "5–10 min",
    materials: "None",
    funLevel: "High",
    steps: [
      "Pair up and play Rock Paper Scissors.",
      "Losers become the winner’s cheer squad; winners keep playing.",
      "Continue until one champion remains.",
      "Celebrate the loudest cheer section, not only the champion.",
    ],
    variation: "Best of three for groups under 20.",
    safety: "Not ideal right before a quiet grief or crisis conversation.",
  },
  {
    slug: "two-truths-and-a-lie",
    name: "Two Truths and a Lie",
    bestFor: "Small-to-mid groups that like storytelling laughs",
    players: "4–20",
    time: "8–15 min",
    materials: "None",
    funLevel: "High",
    steps: [
      "Model with two true statements and one false statement.",
      "Each person shares three statements; the group guesses the lie.",
      "Celebrate creative lies more than “gotchas.”",
      "Keep turns under a minute.",
    ],
    variation: "Pairs first, then share one favorite lie with the full room.",
    safety: "Ban salary, dating, and private family drama.",
  },
  {
    slug: "emoji-introduction",
    name: "Emoji Introduction",
    bestFor: "Virtual meetings that need a visual gag in under five minutes",
    players: "5–40",
    time: "5–8 min",
    materials: "Chat or whiteboard",
    funLevel: "High",
    steps: [
      "Each person posts 2–3 emojis for their week or mood.",
      "The group guesses once; the author clarifies in one sentence—optional.",
      "For larger calls, only volunteers explain.",
      "Model a funny example first.",
    ],
    variation: "Theme: emoji for the project, the customer, or “my meeting energy.”",
    safety: "Emoji-only rounds work for shy teammates.",
  },
  {
    slug: "this-or-that-questions",
    name: "This or That",
    bestFor: "Seated rooms and mixed mobility",
    players: "4–40",
    time: "4–8 min",
    materials: "Prompt list",
    funLevel: "Medium–high",
    steps: [
      "Offer two light options (tea/coffee, early bird/night owl).",
      "People point, raise hands, or step to sides.",
      "Run 4–6 rapid rounds; skip long debate.",
      "Close with the funniest split.",
    ],
    variation: "Silent pointing only when newcomers are watching.",
    safety: "Avoid identity or status traps.",
  },
  {
    slug: "telephone-charades",
    name: "Telephone Charades",
    bestFor: "Teams that want physical comedy without a stage",
    players: "8–24",
    time: "8–12 min",
    materials: "Prompt cards",
    funLevel: "High",
    steps: [
      "Line people up; whisper a phrase to the first person.",
      "They act it (no words) for the next person, and so on.",
      "The last person guesses aloud.",
      "Reveal the original and enjoy the mutation.",
    ],
    variation: "Use workplace phrases only (“standup,” “shared doc,” “parking lot item”).",
    safety: "No body-contact prompts.",
  },
  {
    slug: "human-bingo",
    name: "Human Bingo",
    bestFor: "Mixers and welcome events",
    players: "10–50",
    time: "15–25 min",
    materials: "Bingo cards and pens",
    funLevel: "High",
    steps: [
      "Hand out cards with light prompts.",
      "People mingle for signatures.",
      "First line wins a cheer.",
      "Require a different person per square.",
    ],
    variation: "Four corners only when time is short.",
    safety: "No appearance or dating squares.",
  },
  {
    slug: "virtual-background-story",
    name: "Virtual Background Story",
    bestFor: "Remote all-hands that need a visual laugh",
    players: "5–40",
    time: "8–12 min",
    materials: "Video platform with backgrounds",
    funLevel: "High",
    steps: [
      "Everyone sets a surprising virtual background.",
      "In turn (or volunteers), share one sentence about why they chose it.",
      "Keep shares to 15–20 seconds.",
      "Screenshot a collage if your team likes souvenirs.",
    ],
    variation: "Theme: favorite vacation fail, childhood room, or “my ideal Friday.”",
    safety: "Allow camera-off people to describe a background in chat instead.",
  },
  {
    slug: "one-word-check-in",
    name: "One Word Check-In",
    bestFor: "When you want a smile without a long game",
    players: "4–30",
    time: "3–5 min",
    materials: "None or chat",
    funLevel: "Medium",
    steps: [
      "Prompt: “One word for how you are arriving.”",
      "Go once around or collect in chat.",
      "Reflect one funny pattern briefly.",
      "Start the agenda within five minutes.",
    ],
    variation: "“One word + one emoji.”",
    safety: "Pass allowed; no probing.",
  },
  {
    slug: "line-up",
    name: "Line-Up",
    bestFor: "In-person energy with almost no prep",
    players: "8–40",
    time: "5–10 min",
    materials: "None",
    funLevel: "Medium–high",
    steps: [
      "Ask the group to line up by a simple rule (birthday month, first name A–Z).",
      "Talking versions lower stress; silent versions raise challenge.",
      "Check once, cheer the attempt, sit down.",
      "Avoid height, weight, age, or income orderings.",
    ],
    variation: "Silent line-up by “how awake are you?”",
    safety: "Clear space; no shoving.",
  },
  {
    slug: "skittles-sharing",
    name: "Color Share (Skittles / chips)",
    bestFor: "Table groups that want prop-based laughs",
    players: "6–24",
    time: "10–15 min",
    materials: "Colored candy or paper chips",
    funLevel: "Medium–high",
    steps: [
      "Give each person a few colored pieces.",
      "Assign a light prompt to each color.",
      "Share 20–30 seconds per color.",
      "Offer paper chips for allergies.",
    ],
    variation: "Work-safe colors: favorite meeting snack, weekend plan, pet peeve about email.",
    safety: "Always offer a non-food option.",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    bestFor: "Small groups that want laughs from unlikely overlaps",
    players: "4–12",
    time: "8–15 min",
    materials: "None",
    funLevel: "Medium",
    steps: [
      "Work as one group of 4–6, or two groups.",
      "Find three non-obvious things everyone shares.",
      "Share one surprising commonality with the room.",
      "Block “we all work here.”",
    ],
    variation: "Theme: childhood snacks, travel fails, or “apps we refuse to delete.”",
    safety: "Keep private details private.",
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

export default async function FreeFunIcebreakerGamesPage() {
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
      q: "Are these icebreaker games really free?",
      a: "Yes. On Ice Breaker Games you can browse rules, copy steps, and print guides without creating an account. There is no paid unlock required to run the activities listed here.",
    },
    {
      q: "What are the best free fun icebreaker games for a meeting?",
      a: "Would You Rather, Emoji Introduction, Two Truths and a Lie, and Rock Paper Scissors Tournament are reliable. Keep them to about 5–10 minutes and use work-safe prompts.",
    },
    {
      q: "What fun icebreakers work with no supplies?",
      a: "Would You Rather, Rock Paper Scissors Tournament, Two Truths and a Lie, This or That, One Word Check-In, Line-Up, and Common Ground need only people.",
    },
    {
      q: "How do I keep “fun” from turning into cringe?",
      a: "Model a light example, allow passes, timebox hard, and ban prompts about bodies, dating, salary, and politics. If energy drops, stop early.",
    },
    {
      q: "What is the difference between this page and “best icebreaker games”?",
      a: "This page filters for free access plus laugh-friendly formats. The best-icebreaker-games hub is a broader quality shortlist across work, meetings, and virtual settings.",
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
    headline: title,
    description,
    image: [ogImage],
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://www.icebreakergames.site/about",
    },
    publisher: { "@id": "https://www.icebreakergames.site/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
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
              src="/img/free-fun-icebreaker-games-hero.jpg"
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
              <span>Free fun icebreaker games</span>
            </nav>
            <p className={styles.brand}>Ice Breaker Games</p>
            <h1 className={styles.heroTitle}>Free Fun Icebreaker Games</h1>
            <p className={styles.heroLead}>
              No signup. No paywall. Twelve run cards that aim for laughs without the cringe.
            </p>
            <div className={styles.ctaRow}>
              <Link href="#chooser" className={styles.ctaPrimary}>
                Open the chooser
              </Link>
              <Link href="/games" className={styles.ctaGhost}>
                Browse the free library
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
            <h2>What to run in the next ten minutes</h2>
            <p>
              If you need one free, fun opener: run{" "}
              <Link href="/games/would-you-rather">Would You Rather</Link> for about eight
              minutes with work-safe prompts, allow passes, then start the meeting. For Zoom,
              open with Emoji Introduction instead. For a quiet circle of 4–12, use Two Truths
              and a Lie or Common Ground.
            </p>
          
            <blockquote className={styles.quote}>
              <p>
                Free, fun icebreakers work when rules are clear, materials stay light, and nobody is humiliated for entertainment—laughter without a spotlight trap.
              </p>
              <cite className={styles.cite}>
                — {authorName}, summarizing guidance from{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Icebreaker_(facilitation)"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wikipedia, “Icebreaker (facilitation)”
                </a> and <a
                  href="https://www.sessionlab.com/library/icebreaker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SessionLab’s icebreaker library
                </a>.
              </cite>
            </blockquote>
            <p>
              Browse established formats in{" "}
              <a
                href="https://www.sessionlab.com/library/icebreaker"
                rel="noopener noreferrer"
                target="_blank"
              >
                SessionLab’s icebreaker library
              </a>{" "}
              or the overview on{" "}
              <a
                href="https://en.wikipedia.org/wiki/Icebreaker_(facilitation)"
                rel="noopener noreferrer"
                target="_blank"
              >
                Wikipedia’s icebreaker (facilitation) page
              </a>
              , then adapt prompts to your room.
            </p>
          </section>

          <section className={styles.snapshot} aria-label="What free means here">
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Free means</p>
              <p>
                Rules, steps, and print/copy guides on this site do not require an account or a
                paid plan. You are not downloading a multiplayer app—you are running a
                facilitator guide.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Fun means</p>
              <p>
                Formats that produce laughter or playful energy without humiliation, forced
                dancing, or personal oversharing.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Default time</p>
              <p>5–10 minutes. Mixers like Human Bingo can take 15–25 minutes.</p>
            </div>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/free-fun-icebreaker-games-meeting.jpg"
              alt="Meeting team laughing while running free-fun-icebreaker-games Would You Rather"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Keep the opener shorter than the agenda item that follows.
            </figcaption>
          </figure>

          <section id="chooser" className={styles.guide}>
            <h2>60-second chooser</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>If this is true</th>
                    <th>Run this</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Need laughs before a workshop</td>
                    <td>Would You Rather or Rock Paper Scissors Tournament</td>
                    <td>Movement, no supplies</td>
                  </tr>
                  <tr>
                    <td>Zoom / Teams call</td>
                    <td>Emoji Introduction or Virtual Background Story</td>
                    <td>Works on camera and in chat</td>
                  </tr>
                  <tr>
                    <td>4–12 people seated</td>
                    <td>Two Truths and a Lie or Common Ground</td>
                    <td>Story laughs without a gym</td>
                  </tr>
                  <tr>
                    <td>Welcome mixer, 15+</td>
                    <td>Human Bingo</td>
                    <td>Many people talk at once</td>
                  </tr>
                  <tr>
                    <td>Almost no time</td>
                    <td>One Word Check-In or This or That</td>
                    <td>Under five minutes</td>
                  </tr>
                  <tr>
                    <td>Want physical comedy</td>
                    <td>Telephone Charades</td>
                    <td>High fun; needs space</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Need a workplace-only shortlist with meeting scenes? See{" "}
              <Link href="/funny-icebreaker-games-for-meetings">
                funny ice breaker games for meetings
              </Link>
              . For a broader quality list across occasions, see{" "}
              <Link href="/best-icebreaker-games">best icebreaker games</Link>.
            </p>
          </section>

          <section className={styles.safety}>
            <h2>Fun filters (what we leave out)</h2>
            <ul>
              <li>Forced dancing, trust falls, or stranger hand-holding on minute one</li>
              <li>Prompts about bodies, dating, salary, politics, or trauma</li>
              <li>Games that only reward the loudest person for ten minutes straight</li>
              <li>“Spirit animal” or elementary circle-time prompts for adult rooms</li>
            </ul>
          </section>

          <section className={styles.scriptBand}>
            <h2>Facilitator script (15 seconds)</h2>
            <p>
              “We’re doing a short, optional icebreaker—about eight minutes. You can pass. I’ll
              go first with a boring example, then we’ll start the real work.”
            </p>
          </section>

          <section className={styles.sectionHead}>
            <h2>12 free fun icebreaker run cards</h2>
            <p>
              Each card includes players, time, materials, fun level, steps, and a variation.
              Open the game page when you need longer notes—still free, still no signup.
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
                    <span className={styles.meta}>Fun: {entry.funLevel}</span>
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
                  <p className={styles.variation}>
                    <strong>Facilitator note: </strong>
                    {entry.safety}
                  </p>
                  <Link href={`/games/${entry.slug}`} className={styles.gameLink}>
                    Full facilitator guide →
                  </Link>
                </div>
              </article>
            ))}
          </section>

          <section className={styles.guide}>
            <h2>By setting</h2>
            <h3>Meetings and workshops</h3>
            <p>
              Prefer Would You Rather, Two Truths, Emoji Introduction, and Telephone Charades.
              Cap at ten minutes unless the session is explicitly a social.
            </p>
            <h3>Small groups</h3>
            <p>
              Seated laughs work better than elimination tournaments. Common Ground, Color
              Share, and Two Truths fit a living room or breakout. More seated options live on{" "}
              <Link href="/icebreaker-games-for-small-groups">
                ice breaker games for small groups
              </Link>
              .
            </p>

            <figure className={styles.figure}>
              <Image
                src="/img/free-fun-icebreaker-games-small-group.jpg"
                alt="Friends on couches playing free-fun-icebreaker-games with no supplies"
                width={1600}
                height={900}
                className={styles.figureImg}
                sizes="(max-width: 72rem) 100vw, 72rem"
              />
              <figcaption className={styles.figureCaption}>
                Small groups: story formats beat cheer-squad tournaments.
              </figcaption>
            </figure>

            <h3>Virtual</h3>
            <p>
              Use chat-first formats first. Emoji Introduction and Virtual Background Story
              fail less often than whispered telephone games on a laggy call. Expand the remote
              list with{" "}
              <Link href="/virtual-icebreaker-games">virtual ice breaker games</Link>.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/img/free-fun-icebreaker-games-virtual.jpg"
                alt="Remote team on a video call using free-fun-icebreaker-games emoji check-in"
                width={1600}
                height={900}
                className={styles.figureImg}
                sizes="(max-width: 72rem) 100vw, 72rem"
              />
              <figcaption className={styles.figureCaption}>
                On video calls, visual or chat prompts beat long go-arounds.
              </figcaption>
            </figure>
          </section>

          <section className={styles.guide}>
            <h2>FAQ</h2>
            {faqs.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section className={styles.sources} aria-labelledby="sources-heading">
            <h2 id="sources-heading">Sources &amp; further reading</h2>
            <p>
              Timing and inclusion guidance draws on established facilitation references:
            </p>
            <ol>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Icebreaker_(facilitation)"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wikipedia — Icebreaker (facilitation)
                </a>
              </li>
              <li>
                <a
                  href="https://www.sessionlab.com/library/icebreaker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SessionLab — Icebreaker library
                </a>
              </li>
              <li>
                <Link href="/best-icebreaker-games">
                  Ice Breaker Games — Best icebreaker games
                </Link>
              </li>
              <li>
                <Link href="/virtual-icebreaker-games">
                  Ice Breaker Games — Virtual icebreaker games
                </Link>
              </li>
            </ol>
          </section>

          <section className={styles.related}>
            <h2>Related guides</h2>
            <p>
              Start from the <Link href="/">Ice Breaker Games home</Link> if you need filters by
              time and group size across the full catalog.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

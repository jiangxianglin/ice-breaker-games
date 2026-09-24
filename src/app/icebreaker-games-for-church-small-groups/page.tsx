import { getAllGames } from "@/db/queries/games";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./church-small.module.css";

export const revalidate = 86400;

const title = "Church Small Group Icebreakers | Living Room";
const description =
  "Church small-group icebreakers for home Bible studies—12 seated run cards, a visitor-safe chooser, and what to skip before prayer.";
const canonical =
  "https://www.icebreakergames.site/icebreaker-games-for-church-small-groups";
const ogImage =
  "https://www.icebreakergames.site/img/icebreaker-games-for-church-small-groups-hero.jpg";
const ogImageAlt =
  "Adults in a living-room circle for icebreaker-games-for-church-small-groups";
const authorName = "Elena Hart";
const datePublished = "2026-09-16";
const dateModified = "2026-09-16";

const gameEntries = [
  {
    slug: "one-word-check-in",
    name: "One Word Check-In",
    bestFor: "Default living-room opener before study or prayer",
    players: "4–12",
    time: "3–5 min",
    materials: "None",
    awkwardness: "Low",
    steps: [
      "Prompt: “One word for how you are arriving tonight.”",
      "Go once around the circle; allow a pass.",
      "Name one pattern you heard in a single sentence.",
      "Open the passage within five minutes total.",
    ],
    variation:
      "Established groups only: “One word for what you need from this study.” Skip on a visitor’s first night.",
    safety: "Do not probe “why” after someone’s word.",
  },
  {
    slug: "weather-check-in",
    name: "Weather Check-In",
    bestFor: "When one word feels too short but stories feel too long",
    players: "4–12",
    time: "3–8 min",
    materials: "None",
    awkwardness: "Low",
    steps: [
      "Ask everyone to describe how they feel as weather (sunny, foggy, stormy).",
      "Model a light example first.",
      "Go around once or collect answers on phones if hybrid.",
      "Reflect the room’s overall weather, then start the study.",
    ],
    variation: "Project weather: “What’s the weather on your week?”—not a crisis inventory.",
    safety: "Thank hard shares without turning the icebreaker into counseling.",
  },
  {
    slug: "this-or-that-questions",
    name: "This or That",
    bestFor: "Newcomers who do not want a speaking spotlight",
    players: "4–16",
    time: "4–8 min",
    materials: "Prompt list",
    awkwardness: "Low",
    steps: [
      "Offer two light options (coffee/tea, early service/late service).",
      "People point, raise hands, or shift on the couch.",
      "Run 4–6 rapid rounds; skip debate.",
      "Transition to the reading.",
    ],
    variation: "Silent pointing only when a first-time guest is watching carefully.",
    safety: "Avoid romance, politics, or “how spiritual are you?” binaries.",
  },
  {
    slug: "would-you-rather",
    name: "Would You Rather",
    bestFor: "Slightly more energy without leaving the living room",
    players: "4–16",
    time: "5–10 min",
    materials: "Prompt list",
    awkwardness: "Low",
    steps: [
      "Read two vivid, work-and-home-safe options.",
      "Hands or couch sides for answers.",
      "Ask for one optional one-sentence reason per side.",
      "Stop after 5–7 rounds.",
    ],
    variation:
      "Faith-optional later weeks only: Bible dilemmas for groups that already share scripture familiarity.",
    safety: "Raise-hands mode if space is tight or mobility varies.",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    bestFor: "Groups of 4–10 that need connection before discussion",
    players: "4–12",
    time: "8–12 min",
    materials: "None",
    awkwardness: "Low–medium",
    steps: [
      "Stay as one circle, or split pairs of 3–4 if you are 10+.",
      "Find three non-obvious things everyone shares.",
      "Share one surprising commonality with the room.",
      "Block “we all go to this church” and “we all breathe.”",
    ],
    variation: "Theme: weekend habits, favorite hymns growing up, or kitchen disasters.",
    safety: "Keep private medical or family details private.",
  },
  {
    slug: "six-word-memoirs",
    name: "Six Word Memoirs",
    bestFor: "Creative adults who dislike forced small talk",
    players: "4–12",
    time: "8–12 min",
    materials: "Paper or phones",
    awkwardness: "Low–medium",
    steps: [
      "Ask for exactly six words about the week (or about hope).",
      "Share aloud or pass papers for a silent read-around.",
      "Invite 1–2 volunteers to expand one word for 20 seconds.",
      "Bridge one theme into the study question.",
    ],
    variation: "Prompt: “six words about belonging” for established groups only.",
    safety: "Writing first reduces freeze for quieter members.",
  },
  {
    slug: "skittles-sharing",
    name: "Color Share (Skittles / chips)",
    bestFor: "Hosted homes that already have snacks out",
    players: "4–12",
    time: "8–15 min",
    materials: "Colored candy or paper chips",
    awkwardness: "Medium",
    steps: [
      "Give each person a few colored pieces.",
      "Assign a light prompt to each color (hobby, gratitude, funny fail).",
      "Share 20–30 seconds per color drawn.",
      "Offer paper chips for allergies.",
    ],
    variation: "Always keep a non-food chip option visible.",
    safety: "Do not assign “deepest struggle” or testimony colors on week one.",
  },
  {
    slug: "two-truths-and-a-dream",
    name: "Two Truths and a Dream",
    bestFor: "Storytelling without asking anyone to invent a lie",
    players: "4–12",
    time: "8–12 min",
    materials: "None",
    awkwardness: "Medium",
    steps: [
      "Each person shares two true facts and one dream or hope.",
      "Listeners may ask one clarifying question.",
      "Optionally guess which item is the dream.",
      "Close by naming shared themes.",
    ],
    variation: "Make the dream study-related for series kickoffs.",
    safety: "Model first with mild facts—no status flexes.",
  },
  {
    slug: "two-truths-and-a-lie",
    name: "Two Truths and a Lie",
    bestFor: "Groups that already enjoy light guessing",
    players: "4–10",
    time: "8–15 min",
    materials: "None",
    awkwardness: "Medium",
    steps: [
      "Model two truths and one lie.",
      "Each person shares three statements; the group guesses once.",
      "Keep turns under a minute.",
      "Prompt hobbies, travel, food—not private conflict.",
    ],
    variation:
      "If anyone dislikes lying, switch to Two Truths and a Dream or see games like Two Truths.",
    safety: "Offer a pass; celebrate curiosity over catching people out.",
  },
  {
    slug: "the-name-game",
    name: "The Name Game",
    bestFor: "Brand-new small groups and rotating hosts",
    players: "4–12",
    time: "5–10 min",
    materials: "None (name tags help)",
    awkwardness: "Low",
    steps: [
      "Each person says name plus one simple detail (snack, neighborhood, hobby).",
      "The next person repeats a few previous names before adding theirs.",
      "Help immediately if someone blanks.",
      "End by greeting two people by name at snack.",
    ],
    variation: "Skip memory pressure after week two—use One Word instead.",
    safety: "Never punish forgetting a name.",
  },
  {
    slug: "year-of-the-coin",
    name: "Year of the Coin",
    bestFor: "Story nights when the host has loose change",
    players: "4–12",
    time: "8–15 min",
    materials: "Coins with readable years",
    awkwardness: "Medium",
    steps: [
      "Pass a bowl of coins; each person draws one.",
      "Share a short memory from that year—or from an age near that number.",
      "Keep shares to about 45 seconds.",
      "Thank the circle and open the study.",
    ],
    variation: "No coins? Use phone random years between 1990–2020.",
    safety: "Allow a pass if a year lands on a hard season.",
  },
  {
    slug: "story-swap",
    name: "Story Swap",
    bestFor: "Pairs before a longer discussion or prayer time",
    players: "6–12",
    time: "10–15 min",
    materials: "Timer",
    awkwardness: "Medium",
    steps: [
      "Pair people; give a prompt (small win this month, funny travel mishap).",
      "Each speaks 60–90 seconds while the partner listens.",
      "Partners introduce each other with one highlight sentence.",
      "Return to the full circle for the study.",
    ],
    variation: "Hybrid: in-room pairs plus one Zoom breakout of two.",
    safety: "Prompt must stay light on week one with visitors.",
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

export default async function IcebreakerGamesForChurchSmallGroupsPage() {
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
      q: "What are good icebreaker games for church small groups?",
      a: "Start with One Word Check-In, Weather Check-In, This or That, or Common Ground. They fit a living room, finish in about 3–12 minutes, and do not force deep testimony before the study.",
    },
    {
      q: "How is this different from general small-group icebreakers?",
      a: "Church small groups often mix longtime members with first-time visitors, then move into Scripture and prayer. This page prioritizes visitor-safe, seated openers and a faith-prompt ladder—not office energizers or contact games.",
    },
    {
      q: "What works when someone new shows up?",
      a: "Use This or That, One Word Check-In, or The Name Game. Say the pass rule out loud. Skip cold-call prayer, forced testimony, and “share your deepest struggle” prompts on night one.",
    },
    {
      q: "How long should the icebreaker last before Bible study?",
      a: "Plan for about 5–10 minutes. Story formats like Year of the Coin or Story Swap can use 10–15 minutes when the group already trusts each other.",
    },
    {
      q: "Are there no-supply options for a home group?",
      a: "Yes. One Word Check-In, Weather Check-In, This or That, Would You Rather, Common Ground, Six Word Memoirs, Two Truths variants, The Name Game, and Story Swap run with people only.",
    },
    {
      q: "What should we skip in church small groups?",
      a: "Skip Human Knot, trust falls, wink-elimination games, and any activity that rewards dating, appearance, or public confession. Save deep faith prompts until week 2–3.",
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
              src="/img/icebreaker-games-for-church-small-groups-hero.jpg"
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
              <Link href="/icebreaker-games-for-church">Church</Link>
              <span>/</span>
              <span>Church small groups</span>
            </nav>
            <p className={styles.brand}>Ice Breaker Games</p>
            <h1 className={styles.heroTitle}>
              Icebreaker Games for Church Small Groups
            </h1>
            <p className={styles.heroLead}>
              Seated, visitor-safe openers for living-room Bible studies—short enough to protect
              discussion time.
            </p>
            <div className={styles.ctaRow}>
              <Link href="#chooser" className={styles.ctaPrimary}>
                Open the chooser
              </Link>
              <Link href="/icebreaker-games-for-church" className={styles.ctaGhost}>
                All church icebreakers
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
            <h2>What to run tonight</h2>
            <p>
              Need one pick? Run{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link> for about four
              minutes, say that passing is fine, then open the passage. If the circle wants a
              little more talk without a spotlight, use This or That. Save forced testimony and
              contact games for never—or at least not week one.
            </p>
          
            <blockquote className={styles.quote}>
              <p>
                Living-room church groups welcome newcomers best with seated, optional openers—never forced testimony or contact games in week one.
              </p>
              <cite className={styles.cite}>
                — {authorName}, summarizing guidance from{" "}
                <a
                  href="https://women.lifeway.com/2024/05/21/how-to-include-the-newcomer-in-your-small-group/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Women on including newcomers
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
              Hospitality guidance from{" "}
              <a
                href="https://women.lifeway.com/2024/05/21/how-to-include-the-newcomer-in-your-small-group/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lifeway Women on including newcomers
              </a>{" "}
              aligns with short check-ins before Scripture or prayer.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-small-groups-living-room.jpg"
              alt="Living-room adults in icebreaker-games-for-church-small-groups before Bible study"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Most church small groups need a seated opener—not a fellowship-hall energizer.
            </figcaption>
          </figure>

          <section className={styles.snapshot} aria-label="When these games work best">
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Best for</p>
              <p>
                Home Bible studies, adult small groups, ladies’ circles, and hybrid living-room
                nights that open into Scripture or prayer.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Default time</p>
              <p>5–10 minutes. Story rounds may use 10–15 minutes once trust exists.</p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Skip when</p>
              <p>
                Someone is in crisis, the study is already late, or the activity needs strangers
                to hold hands.
              </p>
            </div>
          </section>

          <section id="chooser" className={styles.guide}>
            <h2>60-second chooser</h2>
            <p>Match the constraint you actually have tonight.</p>
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
                    <td>First-time visitor present</td>
                    <td>This or That or One Word Check-In</td>
                    <td>Low spotlight; easy pass</td>
                  </tr>
                  <tr>
                    <td>4–8 adults on couches</td>
                    <td>Weather Check-In or Common Ground</td>
                    <td>Fits living-room volume</td>
                  </tr>
                  <tr>
                    <td>Need energy without standing</td>
                    <td>Would You Rather (hands only)</td>
                    <td>Motion of opinions, not bodies</td>
                  </tr>
                  <tr>
                    <td>Brand-new rotating hosts</td>
                    <td>The Name Game</td>
                    <td>Names before discussion</td>
                  </tr>
                  <tr>
                    <td>Group already trusts each other</td>
                    <td>Year of the Coin or Story Swap</td>
                    <td>Deeper story; not for week one</td>
                  </tr>
                  <tr>
                    <td>Someone dislikes lying games</td>
                    <td>Two Truths and a Dream</td>
                    <td>Same curiosity, no fake fact</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For non-church living rooms (work teams, book clubs), use{" "}
              <Link href="/icebreaker-games-for-small-groups">
                ice breaker games for small groups
              </Link>
              . For the full church chooser across youth, kids, and large gatherings, stay on{" "}
              <Link href="/icebreaker-games-for-church">icebreaker games for church</Link>.
            </p>
          </section>

          <section className={styles.safety}>
            <h2>Church small-group rules that protect visitors</h2>
            <ul>
              <li>Announce the pass rule before the first prompt.</li>
              <li>Host goes first with a boring, light example.</li>
              <li>Keep faith twists optional until week 2–3.</li>
              <li>Do not cold-call a visitor to pray, read aloud, or share a testimony.</li>
              <li>
                Prefer seated formats. Save Human Knot, wink games, and clothing stunts for
                other rooms—or skip them.
              </li>
            </ul>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-small-groups-checkin.jpg"
              alt="Sticky-note check-in during icebreaker-games-for-church-small-groups around a study table"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              One Word and Weather Check-In keep the opener under five minutes.
            </figcaption>
          </figure>

          <section className={styles.scriptBand}>
            <h2>Facilitator script (20 seconds)</h2>
            <p>
              “We’re doing a short icebreaker—about five minutes—then we’ll open the passage.
              You can pass anytime. I’ll go first.”
            </p>
          </section>

          <section className={styles.sectionHead}>
            <h2>12 church small-group run cards</h2>
            <p>
              Each card lists players, time, materials, awkwardness level, steps, and a home-group
              variation. Open the game page for longer notes.
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
                    <span className={styles.meta}>Awkwardness: {entry.awkwardness}</span>
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
                    <strong>Home-group variation: </strong>
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
            <h2>When someone prefers no lying</h2>
            <p>
              Swap classic Two Truths for Two Truths and a Dream, Six Word Memoirs, or Common
              Ground. A longer comparison list lives in{" "}
              <Link href="/games-like-two-truths-and-a-lie">
                games like Two Truths and a Lie
              </Link>
              .
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-small-groups-hybrid.jpg"
              alt="Hybrid living-room and video call for icebreaker-games-for-church-small-groups"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Hybrid nights: collect One Word or Weather answers in chat so remote guests are equal.
            </figcaption>
          </figure>

          <section className={styles.guide}>
            <h2>Faith-prompt ladder for home groups</h2>
            <ul>
              <li>
                <strong>Week 1:</strong> snacks, commute, hobbies, This or That
              </li>
              <li>
                <strong>Weeks 2–3:</strong> favorite worship song, a Bible story you liked as a
                kid
              </li>
              <li>
                <strong>Established group:</strong> optional deeper share, always with a pass
              </li>
            </ul>
          </section>

          <section className={styles.guide}>
            <h2>Ladies’ / women’s ministry nights</h2>
            <p>
              This or That, Color Share, Six Word Memoirs, and light Two Truths rounds work well
              in hosted homes. Avoid activities that reward physical speed or put bodies on
              display. For broader adult formats outside church, see{" "}
              <Link href="/blog/ice-breaker-games-for-adults">
                ice breaker games for adults
              </Link>
              .
            </p>
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
              Visitor-care and timing notes below draw on ministry hospitality guidance and facilitation libraries:
            </p>
            <ol>
              <li>
                <a
                  href="https://women.lifeway.com/2024/05/21/how-to-include-the-newcomer-in-your-small-group/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Women — How to Include the Newcomer in Your Small Group
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
                <Link href="/icebreaker-games-for-church">
                  Ice Breaker Games — Icebreaker games for church
                </Link>
              </li>
              <li>
                <Link href="/church-icebreaker-questions">
                  Ice Breaker Games — Church icebreaker questions
                </Link>
              </li>
            </ol>
          </section>

          <section className={styles.related}>
            <h2>Related guides</h2>
            <p>
              Parent hub:{" "}
              <Link href="/icebreaker-games-for-church">icebreaker games for church</Link>.
              Youth nights (higher energy):{" "}
              <Link href="/icebreaker-games-for-church-youth-group">
                icebreaker games for church youth group
              </Link>
              . Full library: <Link href="/games">browse all games</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

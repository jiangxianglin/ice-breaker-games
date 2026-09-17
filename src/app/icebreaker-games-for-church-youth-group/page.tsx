import { getAllGames } from "@/db/queries/games";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./church-youth.module.css";

export const revalidate = 86400;

const title = "Church Youth Group Icebreakers | 12 Run Cards";
const description =
  "Church youth icebreakers with a chooser for energy, shy teens, and visitors—12 run cards, faith-optional twists, and what to skip on week one.";
const canonical =
  "https://www.icebreakergames.site/icebreaker-games-for-church-youth-group";
const ogImage =
  "https://www.icebreakergames.site/img/icebreaker-games-for-church-youth-group-hero.jpg";
const ogImageAlt =
  "Teens in a fellowship hall playing icebreaker-games-for-church-youth-group";
const authorName = "Ice Breaker Games Editorial Team";
const datePublished = "2026-09-16";
const dateModified = "2026-09-16";

const gameEntries = [
  {
    slug: "would-you-rather",
    name: "Would You Rather",
    bestFor: "Default opener when the room feels stiff",
    players: "6–40",
    time: "5–10 min",
    materials: "Prompt list",
    awkwardness: "Low",
    steps: [
      "Read two options; teens move to sides of the room or raise hands.",
      "Ask one person from each side for a one-sentence reason—optional.",
      "Run 5–8 rounds, then sit for the lesson.",
      "Keep choices funny and age-fit—not dating, body, or money traps.",
    ],
    variation:
      "Faith-optional later weeks: “ark for a year / desert forty days” only if the group already knows those stories.",
    safety: "Raise-hands-only mode for shy nights or tight rooms.",
  },
  {
    slug: "rock-paper-scissors-tournament",
    name: "Rock Paper Scissors Tournament",
    bestFor: "Fast wake-up before discussion",
    players: "12–80",
    time: "5–10 min",
    materials: "None",
    awkwardness: "Low",
    steps: [
      "Pair up and play Rock Paper Scissors.",
      "Losers become the winner’s cheer squad; winners keep playing.",
      "Continue until one champion remains.",
      "Celebrate the loudest cheer section, not only the champion.",
    ],
    variation: "Best of three for groups under 15.",
    safety: "Skip if the night is grief-focused or already running late.",
  },
  {
    slug: "this-or-that-questions",
    name: "This or That",
    bestFor: "Seated youth rooms and mixed mobility",
    players: "6–40",
    time: "4–8 min",
    materials: "Prompt list",
    awkwardness: "Low",
    steps: [
      "Offer two light options (pizza/tacos, early service/late service).",
      "Teens point, raise hands, or step to sides.",
      "Run 4–6 rapid rounds; skip long debate.",
      "Close and transition.",
    ],
    variation: "Silent pointing only—good when newcomers are watching.",
    safety: "Avoid identity, appearance, or romance prompts.",
  },
  {
    slug: "line-up",
    name: "Line-Up",
    bestFor: "Gyms, camps, and outdoor nights",
    players: "8–40",
    time: "5–10 min",
    materials: "None",
    awkwardness: "Low–medium",
    steps: [
      "Ask the group to line up by a simple rule (birthday month, first name A–Z, travel time).",
      "Talking versions lower stress; silent versions raise challenge.",
      "Check once, cheer the attempt, sit down.",
      "Do not use height, weight, age, or “how spiritual” orderings.",
    ],
    variation: "Silent line-up by “how awake are you?” from low to high.",
    safety: "Clear space first; no shoving.",
  },
  {
    slug: "two-truths-and-a-lie",
    name: "Two Truths and a Lie",
    bestFor: "Groups that can give everyone a short turn",
    players: "5–20",
    time: "8–15 min",
    materials: "None",
    awkwardness: "Medium",
    steps: [
      "Model first with two true statements and one false statement.",
      "Each person shares three statements; the group guesses the lie.",
      "Keep turns under a minute.",
      "Prompt hobbies, food, school, sports—not private family conflict.",
    ],
    variation:
      "Pairs first, then only share one favorite “lie” with the full room—faster for 15+ teens.",
    safety: "If a new student looks frozen, switch to This or That.",
  },
  {
    slug: "the-name-game",
    name: "The Name Game",
    bestFor: "First nights and retreat arrivals",
    players: "8–20",
    time: "5–10 min",
    materials: "None (name tags help)",
    awkwardness: "Low",
    steps: [
      "Each person says their name plus one simple detail (snack, sport, emoji).",
      "The next person repeats a few previous names before adding theirs.",
      "Help quickly if someone blanks.",
      "End by asking everyone to greet two people by name at snack.",
    ],
    variation: "Large hall: split into circles of 8–10.",
    safety: "Never punish forgetting a name.",
  },
  {
    slug: "one-word-check-in",
    name: "One Word Check-In",
    bestFor: "Small church youth groups (about 5–12) and quiet nights",
    players: "4–16",
    time: "3–5 min",
    materials: "None",
    awkwardness: "Low",
    steps: [
      "Prompt: “One word for how you are arriving tonight.”",
      "Go once around, or collect words on a whiteboard.",
      "Reflect one pattern briefly.",
      "Start the study within five minutes total.",
    ],
    variation:
      "Established groups only: “One word for what you need this week.” Skip on visit one.",
    safety: "Pass is always allowed; no probing why.",
  },
  {
    slug: "human-bingo",
    name: "Human Bingo",
    bestFor: "Welcome nights and larger fellowship halls",
    players: "10–40",
    time: "15–25 min",
    materials: "Bingo cards and pens",
    awkwardness: "Low–medium",
    steps: [
      "Hand out cards with teen-safe squares (instrument, pet, left-handed, visits another church).",
      "Mingle for signatures; first line wins a cheer.",
      "Invite two winners to share one interesting match.",
      "Require a different person per square.",
    ],
    variation: "Four corners only when time is short.",
    safety: "No appearance or dating squares.",
  },
  {
    slug: "beach-ball-qa",
    name: "Beach Ball Q&A",
    bestFor: "Outdoor or gym openers",
    players: "8–40",
    time: "8–12 min",
    materials: "Beach ball with written questions",
    awkwardness: "Medium",
    steps: [
      "Write light questions on a beach ball with a marker.",
      "Toss; the catcher answers the question under their thumb.",
      "Continue until most people have answered once.",
      "Offer a pass every time.",
    ],
    variation: "Indoors: soft foam ball, underhand only.",
    safety: "Sitting participants can receive a short underhand pass.",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    bestFor: "Breakouts of 4–8 before small-group discussion",
    players: "4–12",
    time: "8–15 min",
    materials: "None",
    awkwardness: "Medium",
    steps: [
      "Work in groups of 4–6.",
      "Find three non-obvious things everyone shares.",
      "Share one surprising commonality with the room.",
      "Block “we all go to this church.”",
    ],
    variation: "Theme: weekend habits, school lunch, or music.",
    safety: "Keep private details private.",
  },
  {
    slug: "skittles-sharing",
    name: "Color Share (Skittles / chips)",
    bestFor: "Discussion openers in chairs",
    players: "6–24",
    time: "10–15 min",
    materials: "Colored candy or paper chips",
    awkwardness: "Medium",
    steps: [
      "Give each person a few colored pieces.",
      "Assign a light prompt to each color.",
      "Share 20–30 seconds per color drawn.",
      "Eat or set candy aside; paper chips for allergies.",
    ],
    variation: "Always offer non-food chips.",
    safety: "Do not assign “deepest struggle” colors on week one.",
  },
  {
    slug: "guess-who-personal-trivia",
    name: "Guess Who (Personal Trivia)",
    bestFor: "Groups that already know each other a little",
    players: "6–16",
    time: "8–12 min",
    materials: "Paper or chat",
    awkwardness: "Medium–high",
    steps: [
      "Each person submits one true, slightly mysterious fact.",
      "Read facts without names; guess who wrote each.",
      "Reveal and allow a 10-second follow-up.",
      "Keep clues light: hobbies, travel quirks, first jobs.",
    ],
    variation: "Leader collects facts before the meeting to save time.",
    safety: "Ban embarrassing or private life clues. Not for brand-new mixed nights.",
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

export default async function IcebreakerGamesForChurchYouthGroupPage() {
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
      q: "What are good ice breaker games for a church youth group?",
      a: "Start with Would You Rather, Rock Paper Scissors Tournament, This or That, or Line-Up. They need little or no supplies, finish in about 5–10 minutes, and do not force deep sharing.",
    },
    {
      q: "How is this different from general youth group icebreakers?",
      a: "Church youth nights often mix school friends, first-time visitors, and volunteer leaders, then move into Bible study or prayer. This page prioritizes visitor-safe openers and optional faith twists—not contact-heavy stunts on week one.",
    },
    {
      q: "What works for shy teens?",
      a: "Use raise-hands This or That, One Word Check-In, or pairs-first Two Truths. Say out loud that passing is fine. Avoid full-circle testimony questions until the group has trust.",
    },
    {
      q: "How long should the icebreaker last?",
      a: "Plan for about 5–10 minutes before the main teaching. Mixer formats like Human Bingo can take 15–25 minutes on welcome night only.",
    },
    {
      q: "Are there icebreakers with no supplies?",
      a: "Yes. Would You Rather, Rock Paper Scissors Tournament, This or That, Line-Up, Two Truths and a Lie, The Name Game, One Word Check-In, and Common Ground all run with people only.",
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
              src="/img/icebreaker-games-for-church-youth-group-hero.jpg"
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
              <span>Church youth group</span>
            </nav>
            <p className={styles.brand}>Ice Breaker Games</p>
            <h1 className={styles.heroTitle}>
              Icebreaker Games for Church Youth Group
            </h1>
            <p className={styles.heroLead}>
              Movement-first openers for ministry nights—visitor-safe, short, and
              faith-twist optional.
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
              <Link href="/games/would-you-rather">Would You Rather</Link> for about eight
              minutes, say that passing is fine, then start the lesson. If the room is tiny or
              quiet, use One Word Check-In instead. Save Human Knot, trust falls, and forced
              testimony for later—or skip them.
            </p>
          
            <blockquote className={styles.quote}>
              <p>
                Church youth nights need movement and clear pass rules before discussion—not forced testimony or contact games among students who just met.
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
              Pair energy games with hospitality habits described in{" "}
              <a
                href="https://women.lifeway.com/2024/05/21/how-to-include-the-newcomer-in-your-small-group/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lifeway Women’s newcomer guidance
              </a>
              , then hand off to the lesson while energy is still up.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-youth-group-energy.jpg"
              alt="Fellowship-hall teens moving during icebreaker-games-for-church-youth-group Would You Rather"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Most church youth nights need movement before discussion—not a long go-around.
            </figcaption>
          </figure>

          <section className={styles.snapshot} aria-label="When these games work best">
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Best for</p>
              <p>
                Church youth nights, student ministry, retreats, and camp cabins that open into
                Bible study or small groups.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Default time</p>
              <p>5–10 minutes. Welcome-night mixers may use 15–25 minutes once.</p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Skip when</p>
              <p>
                The schedule is already late, a student is in crisis, or the game needs
                strangers to hold hands.
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
                    <td>Room feels awkward / low energy</td>
                    <td>Would You Rather or Rock Paper Scissors Tournament</td>
                    <td>Movement without supplies</td>
                  </tr>
                  <tr>
                    <td>First-time visitors present</td>
                    <td>This or That or The Name Game</td>
                    <td>Low spotlight; easy pass</td>
                  </tr>
                  <tr>
                    <td>About 5–12 teens in chairs</td>
                    <td>One Word Check-In or Common Ground</td>
                    <td>Fits small church rooms</td>
                  </tr>
                  <tr>
                    <td>Welcome night, 15+ people</td>
                    <td>Human Bingo</td>
                    <td>Many conversations at once</td>
                  </tr>
                  <tr>
                    <td>Shy students dominate the room</td>
                    <td>Raise-hands This or That</td>
                    <td>No forced speeches</td>
                  </tr>
                  <tr>
                    <td>Group already trusts each other</td>
                    <td>Guess Who (Personal Trivia)</td>
                    <td>Higher reveal; not for week one</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For non-church teen settings (school clubs, advisory), use{" "}
              <Link href="/icebreaker-games-for-teens">ice breaker games for teens</Link>. For a
              wider youth catalog beyond ministry constraints, see{" "}
              <Link href="/icebreaker-games-for-youth-group">
                ice breaker games for youth group
              </Link>
              .
            </p>
          </section>

          <section className={styles.safety}>
            <h2>Church youth rules that prevent cringe</h2>
            <ul>
              <li>Announce the pass rule before the first prompt.</li>
              <li>Leader goes first with a boring, light example.</li>
              <li>Keep faith twists optional until week 2–3.</li>
              <li>Do not cold-call a visitor to pray, read, or share a testimony.</li>
              <li>
                Avoid Human Knot, wink-elimination games, and clothing stunts with people who
                just met.
              </li>
            </ul>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-youth-group-shy.jpg"
              alt="Volunteer inviting a shy teen into icebreaker-games-for-church-youth-group without pressure"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Shy teens need structure and an explicit pass—not a surprise spotlight.
            </figcaption>
          </figure>

          <section className={styles.scriptBand}>
            <h2>Facilitator script (20 seconds)</h2>
            <p>
              “We’re doing a short icebreaker—about eight minutes. You can pass anytime. I’ll go
              first. After that we’ll start the lesson.”
            </p>
          </section>

          <section className={styles.sectionHead}>
            <h2>12 church youth run cards</h2>
            <p>
              Each card lists players, time, materials, awkwardness level, steps, and a
              ministry variation. Open the game page for longer notes.
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
                    <strong>Ministry variation: </strong>
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
            <h2>Small church youth groups (under ~12)</h2>
            <p>
              Long elimination games leave too many people watching. Prefer One Word Check-In,
              Common Ground, Color Share, or pairs-first Two Truths. If you want more
              seated formats,{" "}
              <Link href="/games-like-two-truths-and-a-lie">
                games like Two Truths and a Lie
              </Link>{" "}
              lists quieter substitutes.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-youth-group-small.jpg"
              alt="Small church youth circle after icebreaker-games-for-church-youth-group ready for discussion"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Under twelve teens: shorter turns beat tournament formats.
            </figcaption>
          </figure>

          <section className={styles.guide}>
            <h2>Faith-prompt ladder</h2>
            <ul>
              <li>
                <strong>Week 1:</strong> snacks, school, sports, This or That
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
              Visitor-care and timing notes below draw on ministry hospitality guidance and established facilitation libraries:
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
                <Link href="/icebreaker-games-for-youth-group">
                  Ice Breaker Games — Ice breaker games for youth group
                </Link>
              </li>
            </ol>
          </section>

          <section className={styles.related}>
            <h2>Related guides</h2>
            <p>
              Parent hub:{" "}
              <Link href="/icebreaker-games-for-church">icebreaker games for church</Link>.
              Name-heavy first nights:{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>. Full library:{" "}
              <Link href="/games">browse all games</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

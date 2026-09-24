import { getAllGames } from "@/db/queries/games";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./church.module.css";

export const revalidate = 86400;

const title = "12 Ice Breaker Games for Church (2026)";
const description =
  "Ice breaker games for church small groups, youth nights, and welcome events. Twelve visitor-safe run cards with time, supplies, and what to skip.";
const canonical =
  "https://www.icebreakergames.site/icebreaker-games-for-church";
const ogImage =
  "https://www.icebreakergames.site/img/icebreaker-games-for-church-visitor-safe.jpg";
const ogImageAlt =
  "Ice breaker games for church — facilitator welcoming a visitor before a short group opener";
const authorName = "Elena Hart";
const datePublished = "2026-09-16";
const dateModified = "2026-09-16";

const gameEntries = [
  {
    slug: "one-word-check-in",
    name: "One Word Check-In",
    bestFor: "Any church circle with less than five minutes and a visitor in the room",
    players: "4–20",
    time: "3–5 min",
    materials: "None",
    visitorSafe: "Yes",
    steps: [
      "Prompt: “One word for how you are arriving tonight.”",
      "Go once around the circle, or collect answers on a shared board.",
      "You may reflect one pattern (“lots of ‘tired’—we’ll keep the opener short”).",
      "Start the study or meeting within five minutes total.",
    ],
    variation:
      "Faith-light option for established groups: “One word for what you need from God this week.” Skip that prompt on a first visit night.",
    safety: "Allow a pass. Do not ask people to explain the word.",
  },
  {
    slug: "this-or-that-questions",
    name: "This or That",
    bestFor: "Living-room small groups and ladies’ gatherings that want motion without contact",
    players: "4–30",
    time: "4–8 min",
    materials: "Prompt list",
    visitorSafe: "Yes",
    steps: [
      "Offer two light options (coffee/tea, hymn/chorus, early service/late service).",
      "People point, raise hands, or step to sides of the room.",
      "Ask one person from each side for a one-sentence reason—optional.",
      "Run 4–6 rounds, then stop.",
    ],
    variation:
      "Seated version: raise left hand or right hand only. Useful when mobility varies.",
    safety: "Keep options light. Avoid money, dating, politics, and body-image prompts.",
  },
  {
    slug: "two-truths-and-a-lie",
    name: "Two Truths and a Lie",
    bestFor: "New small groups, church meetings, and youth nights that need a classic",
    players: "4–16",
    time: "8–15 min",
    materials: "None",
    visitorSafe: "Yes, with light prompts",
    steps: [
      "Model first with two true statements and one false statement about yourself.",
      "Each person shares three statements; the group guesses the lie.",
      "Reveal and move on. Keep each turn under a minute.",
      "Coach prompts toward hobbies, food, travel, church roles—not private family conflict.",
    ],
    variation:
      "Pairs first: practice with one partner, then share only one favorite “lie” with the full room.",
    safety: "If a visitor looks tense, switch to raise-hands This or That instead.",
  },
  {
    slug: "the-name-game",
    name: "The Name Game",
    bestFor: "First meetings when people do not know names yet",
    players: "6–16",
    time: "5–10 min",
    materials: "None (name tags help)",
    visitorSafe: "Yes",
    steps: [
      "Each person says their name plus one simple detail (favorite snack, hometown, or a hobby).",
      "The next person repeats a few previous names before adding theirs.",
      "Help quickly if someone blanks.",
      "End by asking everyone to greet two people by name during the break.",
    ],
    variation: "Large fellowship hall: split into circles of 8–10.",
    safety: "Never punish forgetting a name. Treat blanking as normal.",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    bestFor: "Church small groups of 4–12 who need connection before discussion",
    players: "4–12",
    time: "8–15 min",
    materials: "None",
    visitorSafe: "Yes",
    steps: [
      "Work as one group, or two groups of 4–6.",
      "Find three non-obvious things everyone shares.",
      "Share one surprising commonality with the full room.",
      "Block obvious answers (“we all go to this church”).",
    ],
    variation:
      "Theme rounds: childhood snacks, weekend habits, or “something that always makes you laugh.”",
    safety: "Remind people they can keep private details private.",
  },
  {
    slug: "would-you-rather",
    name: "Would You Rather",
    bestFor: "Youth group energy and family events that need movement",
    players: "6–40",
    time: "5–10 min",
    materials: "Prompt list",
    visitorSafe: "Yes",
    steps: [
      "Read two options; people move to opposite sides of the room or raise hands.",
      "Ask one person from each side for a one-sentence reason.",
      "Run 5–8 rounds, then close.",
      "Use funny, age-appropriate choices—not moral traps.",
    ],
    variation:
      "Bible-story version for youth who already know each other: “ark for a year / desert for forty days.” Save that for groups with shared scripture familiarity.",
    safety: "Skip prompts about money, dating, body image, or family conflict.",
  },
  {
    slug: "human-bingo",
    name: "Human Bingo",
    bestFor: "Larger welcome nights, church camps, and mixed-age mixers",
    players: "10–40",
    time: "15–25 min",
    materials: "Bingo cards and pens",
    visitorSafe: "Yes, if prompts stay light",
    steps: [
      "Hand out cards with prompts such as “plays an instrument” or “has visited another country.”",
      "People mingle, find matches, and collect signatures.",
      "First to complete a line wins a cheer or small prize.",
      "Invite two winners to share one interesting match they found.",
    ],
    variation:
      "Church-friendly squares: “can name all four Gospels,” “sings in a choir,” “brought a dish tonight.” Avoid appearance or dating prompts.",
    safety: "Require a different signature per square so people do not cluster with friends only.",
  },
  {
    slug: "skittles-sharing",
    name: "Color Share (Skittles / chips)",
    bestFor: "Seated small groups, ladies’ nights, and kids’ tables with a simple prop",
    players: "6–24",
    time: "10–15 min",
    materials: "Colored candy or paper chips",
    visitorSafe: "Yes, with light color prompts",
    steps: [
      "Give each person a few colored pieces.",
      "Assign a prompt to each color (red = favorite meal, green = a win this week).",
      "People share based on the colors they drew.",
      "Keep shares to 20–30 seconds.",
    ],
    variation:
      "Allergy-safe nights: use colored paper chips. For kids, use only food and hobby prompts.",
    safety: "Always offer a non-food option. Do not assign “share a deep struggle” to a color on visit one.",
  },
  {
    slug: "year-of-the-coin",
    name: "Year of the Coin",
    bestFor: "Adult small groups and church meetings with almost no prep",
    players: "4–16",
    time: "8–12 min",
    materials: "Coins (or a written year on paper)",
    visitorSafe: "Yes",
    steps: [
      "Each person picks a coin and notes the year, or writes a memorable year on paper.",
      "Share one light fact or memory connected to that year.",
      "Keep turns under 45 seconds.",
      "Pass is always allowed.",
    ],
    variation:
      "If someone has no coin, they pick a year between 1990 and today from a slip bowl.",
    safety: "Steer away from trauma years. Model a low-stakes memory first.",
  },
  {
    slug: "line-up",
    name: "Line-Up",
    bestFor: "Youth rooms and camps that can stand and move",
    players: "8–40",
    time: "5–10 min",
    materials: "None",
    visitorSafe: "Usually",
    steps: [
      "Ask the group to line up by a simple rule (birthday month, first name A–Z, travel time to church).",
      "No talking versions raise the challenge; talking versions lower stress for new groups.",
      "Check the line quickly, celebrate the attempt, reset once if needed.",
      "Sit down and transition to the meeting.",
    ],
    variation: "Silent line-up by “how awake do you feel?” from low to high.",
    safety: "Avoid height, weight, age, or income orderings.",
  },
  {
    slug: "rock-paper-scissors-tournament",
    name: "Rock Paper Scissors Tournament",
    bestFor: "Church youth group openers when the room feels stiff",
    players: "12–80",
    time: "5–10 min",
    materials: "None",
    visitorSafe: "Yes",
    steps: [
      "Pair up and play Rock Paper Scissors.",
      "Losers become the winner’s cheer squad; winners keep playing.",
      "Continue until one champion remains.",
      "Celebrate the loudest cheer section, not only the champion.",
    ],
    variation: "Best of three for smaller youth nights.",
    safety: "Good before quieter discussion. Not ideal as the only opener for a grief or prayer-heavy meeting.",
  },
  {
    slug: "six-word-memoirs",
    name: "Six Word Memoirs",
    bestFor: "Adult classes and leadership meetings that prefer writing over performance",
    players: "4–16",
    time: "5–10 min",
    materials: "Paper or sticky notes",
    visitorSafe: "Yes",
    steps: [
      "Prompt a six-word line about the week, the season, or “why you showed up tonight.”",
      "Share around the circle or post on a board.",
      "Read 2–3 aloud without critique.",
      "Bridge one theme into the agenda or study.",
    ],
    variation: "Strict five minutes: write for 60 seconds, hear three lines, start the meeting.",
    safety: "No grading language. Written-only sharing is fine for shy rooms.",
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

export default async function IcebreakerGamesForChurchPage() {
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
      q: "Why do churches use icebreaker games?",
      a: "Most church rooms mix regulars and newcomers. A short, structured opener gives everyone a low-risk way to speak before prayer, study, or planning. The goal is recognition and ease, not entertainment for its own sake.",
    },
    {
      q: "How do you choose the right icebreaker for a church group?",
      a: "Match four constraints: group size, energy, supplies, and whether a visitor is present. If anyone new is in the room, pick a visitor-safe format under 10 minutes. If the group is established and seated, use a share round or Six Word Memoirs.",
    },
    {
      q: "What’s a good group size for icebreaker games?",
      a: "Circle games work best at about 4–12 people. Above 15, use mixers like Human Bingo or split into smaller circles so turns do not drag.",
    },
    {
      q: "Are there icebreaker games that don’t need any supplies?",
      a: "Yes. One Word Check-In, This or That, Two Truths and a Lie, The Name Game, Common Ground, Would You Rather, Line-Up, and Rock Paper Scissors Tournament all run with people only.",
    },
    {
      q: "What’s the difference between icebreaker games and icebreaker questions?",
      a: "Games usually add movement, matching, or a win condition. Questions are seated prompts. Use games when the room needs energy or mixing. Use questions when you want quieter sharing—see our church icebreaker questions bank.",
    },
    {
      q: "How long should a church icebreaker last?",
      a: "Plan for about 5–10 minutes. Some mixer formats need 15–25 minutes. Stop while people still have energy for the main meeting.",
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
              src="/img/icebreaker-games-for-church-visitor-safe.jpg"
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
              <span>Ice breaker games for church</span>
            </nav>
            <p className={styles.brand}>Ice Breaker Games</p>
            <h1 className={styles.heroTitle}>Ice breaker games for church</h1>
            <p className={styles.heroLead}>
              A chooser for church rooms, then twelve run cards with time, supplies, and
              visitor notes.
            </p>
            <div className={styles.ctaRow}>
              <Link href="#chooser" className={styles.ctaPrimary}>
                Open the chooser
              </Link>
              <Link href="/icebreaker-games-for-youth-group" className={styles.ctaGhost}>
                Youth group icebreakers
              </Link>
              <Link href="/icebreaker-games-for-small-groups" className={styles.ctaGhost}>
                Small group icebreakers
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
              If you need one answer: use{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link> when the room is
              mixed or quiet,{" "}
              <Link href="/games/would-you-rather">Would You Rather</Link> when you need
              movement, and{" "}
              <Link href="/games/two-truths-and-a-lie">Two Truths and a Lie</Link> when people
              can each take a short turn. Keep the opener to about 5–10 minutes, say that
              passing is fine, and move into the study or meeting while energy is still up.
            </p>
          
            <blockquote className={styles.quote}>
              <p>
                Church openers welcome newcomers best when they are brief, optional, and low-pressure—so visitors are not forced into testimony before the study or prayer begins.
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
              Hospitality guidance such as{" "}
              <a
                href="https://women.lifeway.com/2024/05/21/how-to-include-the-newcomer-in-your-small-group/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lifeway Women’s advice on including newcomers
              </a>{" "}
              pairs well with short, time-boxed games before the real agenda.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-small-group.jpg"
              alt="Adults in a living-room circle running icebreaker-games-for-church with a short seated check-in"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Seated openers like One Word Check-In fit church small groups before study or prayer.
            </figcaption>
          </figure>

          <section className={styles.snapshot} aria-label="When these games work best">
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Best for</p>
              <p>
                Church small groups, youth nights, ladies’ gatherings, kids’ tables, staff
                meetings, and camp cabins that need a short opener before the real agenda.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Default time</p>
              <p>
                Aim for 5–10 minutes. Mixer formats like Human Bingo can take 15–25 minutes in
                a fellowship hall.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Skip when</p>
              <p>
                The meeting is already late, someone is grieving and needs quiet, or the
                activity would force physical contact among people who just met.
              </p>
            </div>
          </section>

          <section id="chooser" className={styles.guide}>
            <h2>60-second chooser</h2>
            <p>
              Start with the constraint that limits you most. Then open the matching run card
              below.
            </p>
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
                    <td>A visitor is present</td>
                    <td>
                      <Link href="/games/one-word-check-in">One Word Check-In</Link> or{" "}
                      <Link href="/games/this-or-that-questions">This or That</Link>
                    </td>
                    <td>Low spotlight, easy pass, under five minutes</td>
                  </tr>
                  <tr>
                    <td>Living-room small group, 4–12 adults</td>
                    <td>
                      <Link href="/games/common-ground">Common Ground</Link> or{" "}
                      <Link href="/games/year-of-the-coin">Year of the Coin</Link>
                    </td>
                    <td>Seated, conversational, no gym energy</td>
                  </tr>
                  <tr>
                    <td>Youth night needs a wake-up</td>
                    <td>
                      <Link href="/games/would-you-rather">Would You Rather</Link> or{" "}
                      <Link href="/games/rock-paper-scissors-tournament">
                        Rock Paper Scissors Tournament
                      </Link>
                    </td>
                    <td>Movement without supplies</td>
                  </tr>
                  <tr>
                    <td>First night, names unknown</td>
                    <td>
                      <Link href="/games/the-name-game">The Name Game</Link>
                    </td>
                    <td>Names first; details second</td>
                  </tr>
                  <tr>
                    <td>Fellowship hall, 15+ people</td>
                    <td>
                      <Link href="/games/human-bingo">Human Bingo</Link>
                    </td>
                    <td>Many people talk at once instead of one long circle</td>
                  </tr>
                  <tr>
                    <td>Zero supplies, any age mix</td>
                    <td>
                      <Link href="/games/this-or-that-questions">This or That</Link>
                    </td>
                    <td>Works standing or seated</td>
                  </tr>
                  <tr>
                    <td>Leadership or staff meeting</td>
                    <td>
                      <Link href="/games/six-word-memoirs">Six Word Memoirs</Link>
                    </td>
                    <td>Short, written, adult-friendly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For youth-heavy programming, also use{" "}
              <Link href="/icebreaker-games-for-youth-group">
                ice breaker games for youth group
              </Link>
              . For home Bible studies, see{" "}
              <Link href="/icebreaker-games-for-church-small-groups">
                icebreaker games for church small groups
              </Link>
              .
            </p>
          </section>

          <section className={styles.safety}>
            <h2>What not to run on week one</h2>
            <p>
              These formats show up on many church lists. They can work later. They are a poor
              fit when strangers or visitors are present.
            </p>
            <ul>
              <li>
                Forced testimony, “share your deepest struggle,” or public prayer requests from
                newcomers
              </li>
              <li>
                Human Knot or trust falls with people who just met (contact + mobility issues)
              </li>
              <li>Wink / “murder” elimination games that create suspicion as the first memory</li>
              <li>Clothing-through-string relays or other body-awkward stunts</li>
              <li>Inside jokes, nickname rounds, or games that reward long-time members only</li>
              <li>
                Cold-calling a visitor to read Scripture, pray aloud, or answer a faith-depth
                question
              </li>
            </ul>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/icebreaker-games-for-church-visitor-safe.jpg"
              alt="Facilitator welcoming a visitor before icebreaker-games-for-church so participation stays optional"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              On week one, greet visitors first and keep the opener optional—no cold-call sharing.
            </figcaption>
          </figure>

          <section className={styles.scriptBand}>
            <h2>Facilitator script (20 seconds)</h2>
            <p>
              “We’re going to do a short icebreaker—about eight minutes. You can pass anytime.
              The point is to hear a few voices before we start, not to perform. I’ll go first.”
            </p>
          </section>

          <section className={styles.sectionHead}>
            <h2>12 church icebreaker run cards</h2>
            <p>
              Each card includes players, time, materials, visitor notes, steps, and a church
              variation. Open the full game page when you need longer facilitation notes.
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
                    <span className={styles.meta}>Visitor-safe: {entry.visitorSafe}</span>
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
                    <strong>Church variation: </strong>
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
            <h2>Quick picks by church setting</h2>
            <h3>Church youth group</h3>
            <p>
              Prefer movement and short rounds: Would You Rather, Rock Paper Scissors
              Tournament, Line-Up. Keep faith-twist prompts optional until the group has trust.
              Full ministry list:{" "}
              <Link href="/icebreaker-games-for-church-youth-group">
                icebreaker games for church youth group
              </Link>
              .
            </p>

            <figure className={styles.figure}>
              <Image
                src="/img/icebreaker-games-for-church-youth.jpg"
                alt="Church youth group playing Would You Rather as icebreaker-games-for-church movement openers"
                width={1600}
                height={900}
                className={styles.figureImg}
                sizes="(max-width: 72rem) 100vw, 72rem"
              />
              <figcaption className={styles.figureCaption}>
                Youth nights usually need movement first; save deeper faith prompts for later weeks.
              </figcaption>
            </figure>

            <h3>Church small groups</h3>
            <p>
              Stay seated. Common Ground, Year of the Coin, Color Share, and One Word Check-In
              fit a living room. Full run cards:{" "}
              <Link href="/icebreaker-games-for-church-small-groups">
                icebreaker games for church small groups
              </Link>
              . For non-church living rooms, see also{" "}
              <Link href="/icebreaker-games-for-small-groups">
                icebreaker games for small groups
              </Link>
              .
            </p>
            <h3>Church ladies / women’s ministry</h3>
            <p>
              This or That, Color Share, Six Word Memoirs, and light Two Truths rounds work
              well. Avoid activities that reward physical speed or put bodies on display.
            </p>
            <h3>Church kids</h3>
            <p>
              Use short movement games and concrete prompts. Line-Up, This or That, and Color
              Share with food/hobby prompts are safer than testimony questions.
            </p>
            <h3>Church adults and leaders</h3>
            <p>
              Six Word Memoirs and One Word Check-In fit staff meetings. For broader adult
              formats, see{" "}
              <Link href="/blog/ice-breaker-games-for-adults">
                ice breaker games for adults
              </Link>{" "}
              and{" "}
              <Link href="/icebreaker-games-for-meetings">
                ice breaker games for meetings
              </Link>
              .
            </p>
            <h3>Church camp</h3>
            <p>
              Human Bingo and Would You Rather scale to larger cabins. Save contact-heavy team
              challenges for later in the week, after names are known.
            </p>
          </section>

          <section className={styles.guide}>
            <h2>Games vs questions</h2>
            <p>
              If the room is stiff, run a game. If people are already talking and you only need
              a prompt, ask one question and stop. Use the{" "}
              <Link href="/church-icebreaker-questions">church icebreaker questions</Link> bank
              so you are not scrolling past 60 prompts when you need rules.
            </p>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Use a game when</th>
                    <th>Use questions when</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>People need to move or meet more than one person</td>
                    <td>The group is seated and already knows names</td>
                  </tr>
                  <tr>
                    <td>You have 8–15 minutes and want a clear finish line</td>
                    <td>You have 3–5 minutes before prayer or study</td>
                  </tr>
                  <tr>
                    <td>Youth energy is high</td>
                    <td>Adults prefer low noise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.guide}>
            <h2>Depth ladder for faith prompts</h2>
            <p>
              Do not start a brand-new mixed group with “What is your testimony?” Use a ladder.
            </p>
            <ul>
              <li>
                <strong>Visit one:</strong> snacks, hobbies, This or That, One Word Check-In
              </li>
              <li>
                <strong>Weeks 2–3:</strong> favorite worship song, a Bible story you liked as a
                kid, a kindness you saw this week
              </li>
              <li>
                <strong>Established group:</strong> optional faith-share rounds, only with a
                clear pass rule
              </li>
            </ul>
          </section>

          <section className={styles.guide}>
            <h2>FAQ about icebreaker games for church</h2>
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
              Timing ranges and visitor-care notes below reflect common facilitation practice
              and ministry hospitality guidance. Game mechanics are drawn from our library
              pages.
            </p>
            <ol>
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
                <a
                  href="https://en.wikipedia.org/wiki/Icebreaker_(facilitation)"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Wikipedia — Icebreaker (facilitation)
                </a>
              </li>
              <li>
                <Link href="/icebreaker-games-for-church-small-groups">
                  Ice Breaker Games — Icebreaker games for church small groups
                </Link>
              </li>
              <li>
                <Link href="/icebreaker-games-for-youth-group">
                  Ice Breaker Games — Ice breaker games for youth group
                </Link>
              </li>
              <li>
                <Link href="/best-icebreaker-games">
                  Ice Breaker Games — Best icebreaker games
                </Link>
              </li>
              <li>
                <a
                  href="https://women.lifeway.com/2024/05/21/how-to-include-the-newcomer-in-your-small-group/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Women — How to Include the Newcomer in Your Small Group
                </a>
              </li>
            </ol>
          </section>

          <section className={styles.related}>
            <h2>Related guides</h2>
            <p>
              Start from the <Link href="/best-icebreaker-games">best icebreaker games</Link>{" "}
              hub, then branch to{" "}
              <Link href="/icebreaker-games-for-church-youth-group">church youth group</Link>,{" "}
              <Link href="/icebreaker-games-for-church-small-groups">
                church small groups
              </Link>
              , <Link href="/church-icebreaker-questions">church icebreaker questions</Link>,{" "}
              <Link href="/blog/ice-breaker-games-for-adults">adults</Link>, and the{" "}
              <Link href="/games">full games library</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./church-questions.module.css";

export const revalidate = 86400;

const title = "Church Icebreaker Questions | Visitor-Safe Bank";
const description =
  "Church icebreaker questions by depth for small groups, youth, and Bible study—funny options, a pass rule, and what to skip on week one.";
const canonical = "https://www.icebreakergames.site/church-icebreaker-questions";
const ogImage =
  "https://www.icebreakergames.site/img/church-icebreaker-questions-hero.jpg";
const ogImageAlt =
  "Adults answering church-icebreaker-questions in a living-room small group";
const authorName = "Ice Breaker Games Editorial Team";
const datePublished = "2026-09-16";
const dateModified = "2026-09-16";

const lightQuestions = [
  "What is one good thing from your week so far?",
  "Coffee, tea, or neither—and how do you take it?",
  "Morning person or night owl?",
  "What snack should every church potluck include?",
  "What is your go-to road-trip music or podcast?",
  "Beach day or mountain day?",
  "What chore would you happily never do again?",
  "What is the last show or book you actually finished?",
  "If dinner were free tonight, what would you order?",
  "What emoji fits your energy right now?",
  "Sweet breakfast or savory breakfast?",
  "What is your “always in the cart” grocery item?",
  "Windows down or AC blasting?",
  "What is a skill you wish you had learned earlier?",
  "What local place would you take a visitor first?",
  "Paper map nostalgia or GPS forever?",
  "What is your favorite season—and one reason why?",
  "Dogs, cats, or plants as your ideal housemate?",
];

const funnyQuestions = [
  "What is the most “church basement” snack you secretly love?",
  "What hymn tempo is too slow for you to stay awake?",
  "If your life had a sitcom title this week, what would it be?",
  "What is the weirdest thing you have ever brought to a potluck?",
  "Would you rather lose your bulletin or your parking spot?",
  "What childhood chore did you fake-complete most creatively?",
  "What is a household rule you still break as an adult?",
  "If the worship team played only one genre forever, which would you pick?",
  "What is your most useless talent?",
  "What autocorrect fail still haunts you?",
  "Would you rather greet everyone at the door or run the coffee pot?",
  "What is the funniest thing a kid has said in your hearing at church?",
];

const getToKnowQuestions = [
  "Where did you grow up, and what do people get wrong about that place?",
  "What is a hobby that quietly takes over your weekends?",
  "What job or school season shaped you the most?",
  "Who is someone outside your family who believed in you early?",
  "What tradition from childhood do you still keep?",
  "What is a small kindness you notice more than most people do?",
  "What is something you are learning right now—even if you are bad at it?",
  "What place feels most like “home” to you?",
  "What is a win you had this month that nobody clapped for?",
  "What is one way you recharge after a hard week?",
  "What language, tool, or craft would you love to try once?",
  "What is a story behind your name—or a nickname you accept?",
];

const faithOptionalQuestions = [
  "What worship song helps you when the week feels heavy?",
  "What Bible story did you love as a kid (even if details are fuzzy)?",
  "If you could ask one Bible character one practical question, who and what?",
  "What is a verse or phrase you keep coming back to lately?",
  "How do you usually read Scripture—paper, app, audio, or with others?",
  "What does “rest” look like for you on a good Sabbath-ish day?",
  "Who has modeled faith for you without preaching at you?",
  "What ministry or service role fits your energy best right now?",
  "What is one way your church community has helped you this year?",
  "If prayer had a “default setting” for you, what would you ask for first?",
  "What season of the church calendar feels most meaningful to you—and why?",
  "What is a simple practice that helps you notice God in ordinary days?",
];

const deeperQuestions = [
  "Where do you need courage this month?",
  "What are you grieving or releasing that the group should know gently?",
  "Where do you sense hope growing, even if it is small?",
  "What boundary would help you love people better right now?",
  "What prayer request can wait until you trust the room?",
  "What habit is quietly draining you?",
  "Where do you want accountability without shame?",
  "What would “being known” look like in this group over the next year?",
];

const youthQuestions = [
  "What class or activity drains you the fastest?",
  "Pizza topping hill you will die on?",
  "What song is stuck in your head this week?",
  "Would you rather lose your charger or your headphones for a day?",
  "What is your go-to after-school snack?",
  "What game or app do friends always ask you about?",
  "If your week were weather, what is the forecast?",
  "What chore at home do you bargain hardest to avoid?",
  "Who makes you laugh without trying?",
  "What is one thing adults misunderstand about teens?",
  "Favorite school lunch trade (or the one you refuse)?",
  "If youth group had a mascot, what animal would fit tonight?",
];

const thisOrThatPairs = [
  ["Early service", "Late service"],
  ["Hymns", "Modern worship"],
  ["Potluck dessert table", "Potluck main dishes"],
  ["Small group at home", "Small group at church"],
  ["Journaling", "Voice notes"],
  ["Serve on a team", "Host a meal"],
  ["Quiet prayer", "Walk-and-talk prayer"],
  ["Paper Bible", "Bible app"],
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

export default function ChurchIcebreakerQuestionsPage() {
  const faqs = [
    {
      q: "What are good church icebreaker questions for week one?",
      a: "Stay light: snacks, commute, hobbies, This or That, and “one good thing from your week.” Save testimony and struggle questions until the group has trust.",
    },
    {
      q: "How many icebreaker questions should I ask?",
      a: "Usually one prompt is enough. For a chatty circle of 8–12, budget 5–10 minutes total. If answers run long, switch to raise-hands This or That.",
    },
    {
      q: "What is the difference between church icebreaker questions and icebreaker games?",
      a: "Questions are seated prompts. Games add movement, matching, or a clear finish line. Use questions when the room is already settled; use games when people need energy or mixing.",
    },
    {
      q: "Are funny church icebreaker questions okay?",
      a: "Yes—if they stay kind and visitor-safe. Potluck jokes and mild church-life humor work. Skip jokes about bodies, dating, politics, or someone’s faith maturity.",
    },
    {
      q: "What church icebreaker questions work for youth?",
      a: "Use the youth list below, keep answers short, and allow a pass. For movement-first nights, pair a question with Would You Rather or This or That from the church youth games page.",
    },
    {
      q: "When should we use faith or Bible questions?",
      a: "Usually week 2–3 or later, and only as optional. Never cold-call a visitor to share a verse, testimony, or prayer struggle on night one.",
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
              src="/img/church-icebreaker-questions-hero.jpg"
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
              <span>Icebreaker questions</span>
            </nav>
            <p className={styles.brand}>Ice Breaker Games</p>
            <h1 className={styles.heroTitle}>Church Icebreaker Questions</h1>
            <p className={styles.heroLead}>
              A visitor-safe prompt bank for small groups, youth, and Bible study—organized by
              depth so you pick one question and protect discussion time.
            </p>
            <div className={styles.ctaRow}>
              <Link href="#chooser" className={styles.ctaPrimary}>
                Open the depth chooser
              </Link>
              <Link href="/icebreaker-games-for-church" className={styles.ctaGhost}>
                Prefer games instead?
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
            <h2>How to use this bank tonight</h2>
            <p>
              Pick <strong>one</strong> question. Say the pass rule out loud. Host answers first
              with a boring, light example. Cap the whole opener at about 5–10 minutes, then open
              the passage or prayer. If the room needs movement instead of talking, switch to a
              game from{" "}
              <Link href="/icebreaker-games-for-church">icebreaker games for church</Link>.
            </p>
          
            <blockquote className={styles.quote}>
              <p>
                One well-chosen question beats a long list—especially when visitors are present and the host models a light, boring answer first.
              </p>
              <cite className={styles.cite}>
                — {authorName}, summarizing guidance from{" "}
                <a
                  href="https://women.lifeway.com/2023/12/05/100-icebreaker-questions-for-your-small-group/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Women — icebreaker questions for small groups
                </a> and <a
                  href="https://research.lifeway.com/2020/02/19/75-icebreaker-questions-for-church-small-groups/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Research — church small-group icebreaker questions
                </a>.
              </cite>
            </blockquote>
            <p>
              Ministry facilitation resources such as{" "}
              <a
                href="https://women.lifeway.com/2023/12/05/100-icebreaker-questions-for-your-small-group/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lifeway Women’s icebreaker question lists
              </a>{" "}
              and{" "}
              <a
                href="https://research.lifeway.com/2020/02/19/75-icebreaker-questions-for-church-small-groups/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lifeway Research’s church small-group prompts
              </a>{" "}
              reinforce keeping openers short and visitor-safe.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/church-icebreaker-questions-circle.jpg"
              alt="Living-room circle using church-icebreaker-questions before Bible study"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              One prompt beats a long list—especially when visitors are present.
            </figcaption>
          </figure>

          <section className={styles.snapshot} aria-label="When questions work best">
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Best for</p>
              <p>
                Seated small groups, ladies’ studies, youth lounges, and hybrid living-room nights
                that already know most names.
              </p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Default time</p>
              <p>5–10 minutes. One question for the whole circle—or 4–6 This or That rounds.</p>
            </div>
            <div className={styles.snapshotItem}>
              <p className={styles.snapshotLabel}>Skip when</p>
              <p>
                Someone is in crisis, the study is already late, or the prompt would force a
                visitor into testimony.
              </p>
            </div>
          </section>

          <section id="chooser" className={styles.guide}>
            <h2>60-second depth chooser</h2>
            <p>Match the prompt to the trust level in the room.</p>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>If this is true</th>
                    <th>Use this bank</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>First-time visitor present</td>
                    <td>Light or Funny</td>
                    <td>No faith quiz; easy pass</td>
                  </tr>
                  <tr>
                    <td>Week 2–3, names known</td>
                    <td>Get-to-know or Faith-optional</td>
                    <td>Slightly deeper without crisis talk</td>
                  </tr>
                  <tr>
                    <td>Established group only</td>
                    <td>Deeper</td>
                    <td>Always optional; never cold-call</td>
                  </tr>
                  <tr>
                    <td>Youth night, low energy</td>
                    <td>Youth list or This or That</td>
                    <td>Short answers; less spotlight</td>
                  </tr>
                  <tr>
                    <td>Room needs movement</td>
                    <td>
                      Skip questions—run a{" "}
                      <Link href="/icebreaker-games-for-church-youth-group">
                        church youth game
                      </Link>
                    </td>
                    <td>Questions alone will drag</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.safety}>
            <h2>Rules that keep questions church-safe</h2>
            <ul>
              <li>Announce “pass anytime” before the first answer.</li>
              <li>Host models a short, low-stakes answer first.</li>
              <li>Do not follow up with “tell us more” unless they invite it.</li>
              <li>Keep faith prompts optional until week 2–3.</li>
              <li>
                Never use questions that rate someone’s spirituality, body, dating life, or
                giving.
              </li>
            </ul>
          </section>

          <section className={styles.scriptBand}>
            <h2>Facilitator script (15 seconds)</h2>
            <p>
              “One question, about five minutes. You can pass. I’ll go first, then we’ll start the
              study.”
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/church-icebreaker-questions-notebook.jpg"
              alt="Facilitator notebook ready with church-icebreaker-questions for a small group"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Write your chosen prompt at the top of the page so you do not scroll mid-meeting.
            </figcaption>
          </figure>

          <section className={styles.guide}>
            <h2 id="light">Light church icebreaker questions (week one)</h2>
            <p>Use these when trust is thin or a visitor just walked in.</p>
            <ol>
              {lightQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>

          <section className={styles.guide}>
            <h2 id="funny">Funny church icebreaker questions</h2>
            <p>
              Keep humor kind. If anyone looks uncomfortable, switch back to the light list.
            </p>
            <ol>
              {funnyQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>

          <section className={styles.guide}>
            <h2 id="get-to-know">Get-to-know questions</h2>
            <p>Best after names are familiar—still not a therapy circle.</p>
            <ol>
              {getToKnowQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>

          <section className={styles.guide}>
            <h2 id="faith-optional">Faith-optional questions (week 2–3+)</h2>
            <p>
              Offer a pass. Do not treat these as a quiz of Bible knowledge. For living-room run
              cards that pair with study time, see{" "}
              <Link href="/icebreaker-games-for-church-small-groups">
                icebreaker games for church small groups
              </Link>
              .
            </p>
            <ol>
              {faithOptionalQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>

          <section className={styles.guide}>
            <h2 id="deeper">Deeper questions (established groups only)</h2>
            <p>
              Use rarely. Prefer pairs first, then optional shares with the full circle. Skip
              entirely if a visitor is present.
            </p>
            <ol>
              {deeperQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>

          <section className={styles.guide}>
            <h2 id="youth">Church youth icebreaker questions</h2>
            <p>
              Short answers win. For movement-first youth nights, pair one question with a game
              from{" "}
              <Link href="/icebreaker-games-for-church-youth-group">
                icebreaker games for church youth group
              </Link>
              .
            </p>
            <ol>
              {youthQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/img/church-icebreaker-questions-youth.jpg"
              alt="Youth lounge chatting with church-icebreaker-questions before the lesson"
              width={1600}
              height={900}
              className={styles.figureImg}
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            <figcaption className={styles.figureCaption}>
              Youth lists should stay light—raise hands beats long go-arounds.
            </figcaption>
          </figure>

          <section className={styles.guide}>
            <h2 id="this-or-that">This or That prompts (fast rounds)</h2>
            <p>
              Read both options. People point, raise hands, or step to couch sides. Run 4–6
              rounds. Full game rules:{" "}
              <Link href="/games/this-or-that-questions">This or That Questions</Link>.
            </p>
            <ul>
              {thisOrThatPairs.map(([a, b]) => (
                <li key={`${a}-${b}`}>
                  {a} <strong>or</strong> {b}?
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.guide}>
            <h2>When a game beats a question</h2>
            <p>
              If people stare at the floor after your prompt, stop adding questions. Try{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link>,{" "}
              <Link href="/games/would-you-rather">Would You Rather</Link>, or a short Two Truths
              substitute from{" "}
              <Link href="/games-like-two-truths-and-a-lie">
                games like Two Truths and a Lie
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
              Timing and visitor-care notes below reflect common small-group facilitation
              practice. Prompt lists on this page are original to Ice Breaker Games.
            </p>
            <ol>
              <li>
                <Link href="/icebreaker-games-for-church">
                  Ice Breaker Games — Icebreaker games for church
                </Link>
              </li>
              <li>
                <Link href="/icebreaker-games-for-church-small-groups">
                  Ice Breaker Games — Church small groups
                </Link>
              </li>
              <li>
                <a
                  href="https://women.lifeway.com/2023/12/05/100-icebreaker-questions-for-your-small-group/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Women — 100 Icebreaker Questions for Your Small Group
                </a>
              </li>
              <li>
                <a
                  href="https://research.lifeway.com/2020/02/19/75-icebreaker-questions-for-church-small-groups/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lifeway Research — 75 Icebreaker Questions for Church Small Groups
                </a>
              </li>
            </ol>
          </section>

          <section className={styles.related}>
            <h2>Related guides</h2>
            <p>
              Parent hub:{" "}
              <Link href="/icebreaker-games-for-church">icebreaker games for church</Link>.
              Seated run cards:{" "}
              <Link href="/icebreaker-games-for-church-small-groups">
                church small groups
              </Link>
              . Youth energy:{" "}
              <Link href="/icebreaker-games-for-church-youth-group">church youth group</Link>.
              Library: <Link href="/games">browse all games</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

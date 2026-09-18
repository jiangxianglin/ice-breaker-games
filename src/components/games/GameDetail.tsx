import Image from "next/image";
import Link from "next/link";
import { ChainlinkPlay } from "./ChainlinkPlay";
import { EmojiIntroductionPlay } from "./EmojiIntroductionPlay";
import { GameActions } from "./GameActions";
import { GamePageExtras } from "./GamePageExtras";
import { RelatedGames } from "./RelatedGames";
import { getGamePageExtras } from "@/data/game-page-extras";
import { getGameHeroPath, getGameScenePath } from "@/lib/games/media";
import type { GameDetailProps } from "@/types/game";
import styles from "./game-detail.module.css";

function truncateLead(text: string, max = 180) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trimEnd()}…`;
}

export function GameDetail({ game, relatedGames = [] }: GameDetailProps) {
  const extras = getGamePageExtras(game.slug);
  const materialsList = game.materials
    ? game.materials.split("\n").filter(Boolean)
    : [];
  const stepsList = game.steps ? game.steps.split("\n").filter(Boolean) : [];
  const showBasicSteps =
    stepsList.length > 0 && !(extras?.howToSteps && extras.howToSteps.length > 0);
  const heroSrc = getGameHeroPath(game);
  const sceneSrc = getGameScenePath(game);
  const lead = truncateLead(game.description);
  const heroAlt = `${game.slug} — ${game.title} icebreaker game, group playing together`;

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src={heroSrc}
            alt={heroAlt}
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
            <span>{game.title}</span>
          </nav>
          <p className={styles.brand}>Ice Breaker Games</p>
          <h1 className={styles.heroTitle}>{game.title}</h1>
          <p className={styles.heroLead}>{lead}</p>
          <div className={styles.heroMeta}>
            {game.category ? (
              <span className={styles.heroMetaChip}>{game.category}</span>
            ) : null}
            {game.players ? (
              <span className={styles.heroMetaChip}>{game.players} players</span>
            ) : null}
            {game.duration ? (
              <span className={styles.heroMetaChip}>{game.duration}</span>
            ) : null}
            {game.difficulty ? (
              <span className={styles.heroMetaChip}>{game.difficulty}</span>
            ) : null}
          </div>
          <GameActions
            title={game.title}
            players={game.players ?? undefined}
            duration={game.duration ?? undefined}
            materials={game.materials ?? undefined}
            steps={game.steps ?? undefined}
            variant="hero"
          />
          {game.slug === "emoji-introduction" ? (
            <p className={styles.heroPlayCue}>
              <a href="#play-emoji">Try the emoji intro builder ↓</a>
            </p>
          ) : null}
          {game.slug === "chainlink" ? (
            <p className={styles.heroPlayCue}>
              <a href="#play-chainlink">Practice a Chainlink round ↓</a>
            </p>
          ) : null}
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.snapshot} aria-label="Game at a glance">
          <div className={styles.snapshotItem}>
            <p className={styles.snapshotLabel}>Players</p>
            <p>{game.players || "Flexible group size"}</p>
          </div>
          <div className={styles.snapshotItem}>
            <p className={styles.snapshotLabel}>Time</p>
            <p>{game.duration || "A few minutes"}</p>
          </div>
          <div className={styles.snapshotItem}>
            <p className={styles.snapshotLabel}>Difficulty</p>
            <p>{game.difficulty || "Easy to facilitate"}</p>
          </div>
        </section>

<section className={styles.lede}>
          <h2>What is {game.title}?</h2>
          <p>{game.description}</p>
        </section>

        {game.slug === "emoji-introduction" ? <EmojiIntroductionPlay /> : null}
        {game.slug === "chainlink" ? <ChainlinkPlay /> : null}

        <section className={styles.section}>
          <h3>Why Play {game.title}?</h3>
          {game.title === "Find Your Match" ? (
            <p>
              Find Your Match is one of the most engaging ice breaker games for social events and networking. 
              This pairing ice breaker game helps participants connect through fun interactions while learning about famous pairs and shared interests. 
              Find Your Match works perfectly as an ice breaker for parties, conferences, team building sessions, and social gatherings. 
              The game encourages movement, conversation, and makes name learning easy - ideal as an opening activity for any group event. 
              As an ice breaker game, Find Your Match is easy to set up, requires minimal materials, and guarantees everyone will have a great time getting to know each other.
            </p>
          ) : game.title === "Human Bingo" ? (
            <p>
              Human Bingo is a mingling icebreaker: each person carries a grid of prompts and collects
              initials from people who match each square. It gives shy participants a script for
              starting conversations and scales to conferences and orientations when prompts stay
              clean. Customize cards for school or work, print extras, and allow any square to be
              skipped. For alternatives, see{" "}
              <Link href="/games-like-human-bingo">games like Human Bingo</Link>
              {" "}or classroom grids in the{" "}
              <Link href="/blog/human-bingo-for-students-printable">
                Human Bingo for students printable
              </Link>
              .
            </p>
          ) : game.title === "Alliterative Name Game" ? (
            <p>
              The Alliterative Name Game (also called the Adjective Name Game) is a fast way to learn names and warm up a group.
              Each person pairs their name with a positive adjective that starts with the same letter, and the group repeats the growing list.
              It works especially well at the start of workshops, work meetings, and first-day-of-class sessions because it is structured, low-pressure, and surprisingly memorable.
            </p>
          ) : game.title === "One Word Check-In" ? (
            <p>
              One Word Check-In is a 3–5 minute arrival ritual: each person shares one word for energy,
              focus, or need. It is for pulse-taking, not mingling. Keep a pass rule, prefer chat in
              large Zoom rooms, and do not diagnose anyone’s word. For a metaphor version see{" "}
              <Link href="/games/weather-check-in">Weather Check-In</Link>
              ; for meeting choosers see{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>.
            </p>
          ) : game.title === "Two Truths and a Lie" ? (
            <p>
              Two Truths and a Lie is a classic get-to-know-you icebreaker. Each person shares three statements about themselves (two true, one false),
              and everyone guesses the lie. It works well for teams, classrooms, and workshops because it is simple, fun, and naturally creates follow-up conversation.
            </p>
          ) : game.title === "Minefield" ? (
            <p>
              Minefield is a guided navigation exercise: a walker moves through soft obstacles using
              only a partner’s words, then the pair debriefs clarity and assumptions. Blindfolds are
              optional with easy opt-out. Use on training days—not tense meetings. See{" "}
              <Link href="/icebreaker-games-for-work">icebreaker games for work</Link>
              {" "}and{" "}
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>.
            </p>
          ) : game.title === "The Name Game" ? (
            <p>
              The Name Game helps a new group learn names with a short cue (role, hobby, or adjective).
              Chunk groups larger than about a dozen so nobody recites twenty names in a row. Allow
              neighbors to help on blanks. Compare{" "}
              <Link href="/games/motion-name-game">Motion Name-Game</Link> and more formats on{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>.
            </p>
          ) : game.slug === "chainlink" ? (
            <p>
              Chainlink is an introduction chain: each person names a shared trait with the previous speaker, then adds a new fact. The spoken link—not reciting the whole circle—is what keeps the pace workable for 8–40 people.
              Facilitation libraries such as{" "}
              <a
                href="https://www.sessionlab.com/library/icebreaker"
                rel="noopener noreferrer"
                target="_blank"
              >
                SessionLab&apos;s icebreaker collection
              </a>{" "}
              and primers like{" "}
              <a
                href="https://en.wikipedia.org/wiki/Icebreaker_(facilitation)"
                rel="noopener noreferrer"
                target="_blank"
              >
                Wikipedia&apos;s icebreaker (facilitation) overview
              </a>{" "}
              emphasize short, structured openers that build connection without long monologues.
              After the chain, follow with{" "}
              <Link href="/games/the-name-game">how to play the name game</Link>{" "}
              so faces stick to names, or browse more{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>.
            </p>
          ) : game.slug === "emoji-introduction" ? (
            <p>
              Emoji Introduction is a low-pressure opener where each person shares 2–3 emojis instead of a long verbal introduction.
              It works especially well for virtual meetings, online classrooms, and hybrid teams because people can answer in chat first, then explain only as much as they feel comfortable sharing.
            </p>
          ) : game.slug === "weather-check-in" ? (
            <p>
              Weather Check-In is a 3–8 minute sentiment check: each person describes how they feel as weather (sunny, foggy, stormy, partly cloudy).
              It gives facilitators a fast read of the room without forcing long personal stories—especially useful for remote and hybrid meetings before a full agenda.
              Guidance on remote connection from{" "}
              <a
                href="https://hbr.org/topic/subject/remote-work"
                rel="noopener noreferrer"
                target="_blank"
              >
                Harvard Business Review&apos;s Remote Work topic
              </a>{" "}
              and short openers in{" "}
              <a
                href="https://www.sessionlab.com/library/icebreaker"
                rel="noopener noreferrer"
                target="_blank"
              >
                SessionLab&apos;s icebreaker library
              </a>{" "}
              points the same way: keep warm-ups structured and time-boxed.
              For a single-word version, see{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link>
              ; for emoji mood shares, try{" "}
              <Link href="/games/emoji-check-in">Emoji Check-In</Link>.
            </p>
          ) : game.title === "Name That Movie Quote" ? (
            <p>
              Name That Movie Quote is a fast, low-prep icebreaker that turns shared pop culture into laughs. Players quote a line; the group guesses the film.
              It works for parties, youth groups, and team socials when you want energy without personal disclosure—and themed rounds keep mixed audiences included.
            </p>
          ) : game.title === "Emoji Check-In" ? (
            <p>
              Emoji Check-In is a 2–5 minute pulse: one emoji for energy or focus, collected in chat
              or reactions. Mirror themes—do not interrogate sad faces in public. For a word version
              see{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link>
              ; for more emoji formats see{" "}
              <Link href="/emoji-icebreaker-games">emoji icebreaker games</Link>.
            </p>
          ) : game.slug === "chat-waterfall" ? (
            <p>
              Chat Waterfall has everyone type silently, then send on a shared count so the chat
              floods together. The facilitator mirrors themes; unmutes stay optional. Ideal for Zoom
              and Teams when going around the room is too slow. See{" "}
              <Link href="/virtual-icebreaker-games">virtual ice breaker games</Link> and{" "}
              <Link href="/short-virtual-icebreakers">short virtual icebreakers</Link>.
            </p>
          ) : game.slug === "human-knot" ? (
            <p>
              Human Knot is a small-circle hand-hold untangle—only with clear consent, circles of
              6–10, and easy opt-outs (ribbons or coach roles). Many workplaces should pick a
              no-contact alternative from{" "}
              <Link href="/games-like-the-human-knot">games like the Human Knot</Link>
              {" "}or skip contact games entirely (
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>
              ).
            </p>
          ) : game.slug === "telephone-charades" ? (
            <p>
              Telephone Charades passes a silent gesture down a line until the phrase mutates—laughs
              without personal disclosure. Keep phrases clean and allow pass. Safer contact-wise than
              a knot; see{" "}
              <Link href="/funny-icebreaker-games-for-meetings">
                funny ice breaker games for meetings
              </Link>
              .
            </p>
          ) : game.slug === "virtual-background-story" ? (
            <p>
              Virtual Background Story uses a themed background (or blur) plus a 15-second why. Plain
              walls count. Reset backgrounds before slides. For tighter clocks use{" "}
              <Link href="/games/chat-waterfall">Chat Waterfall</Link>.
            </p>
          ) : game.slug === "skittles-sharing" ? (
            <p>
              Skittles Sharing maps candy colors to light prompts in small circles—or use allergy-safe
              tokens. Pass is allowed; no forced eating. Fits youth and church rooms with visitor-safe
              prompts—see{" "}
              <Link href="/icebreaker-games-for-youth-group">ice breaker games for youth group</Link>.
            </p>
          ) : game.slug === "guess-who-personal-trivia" ? (
            <p>
              Guess Who Personal Trivia screens anonymous safe facts, then the group guesses authors.
              Owners may refuse reveal. Prefer this over unscreened party games; compare{" "}
              <Link href="/games/two-truths-and-a-lie">Two Truths and a Lie</Link>.
            </p>
          ) : game.slug === "line-up" ? (
            <p>
              Line-Up sorts the group by a clean criterion (birthday month, commute) with optional
              silence. Offer seated continua. A lower-contact alternative to the Human Knot—see{" "}
              <Link href="/games-like-the-human-knot">games like the Human Knot</Link>.
            </p>
          ) : game.slug === "beach-ball-qa" ? (
            <p>
              Beach Ball Q&amp;A tosses a soft ball covered in light prompts; catch, answer briefly,
              toss on. Pass allowed. Zone large rooms. Good for teens and youth nights—see{" "}
              <Link href="/icebreaker-games-for-teens">ice breaker games for teens</Link>.
            </p>
          ) : game.slug === "scavenger-hunt" ? (
            <p>
              A short scavenger hunt uses a safe 8–12 item list, small teams, and a hard time stop.
              Prefer photo proof and seated roles. Keep it an icebreaker, not a half-day event—see{" "}
              <Link href="/icebreaker-games-for-youth-group">youth group icebreakers</Link>.
            </p>
          ) : game.slug === "skribbl-pictionary-online" ? (
            <p>
              Drawing-and-guessing warm-ups work on any shared whiteboard—Skribbl-style sites are
              optional third-party tools, not an Ice Breaker Games multiplayer product. Use private
              rooms and clean word lists. Details in{" "}
              <Link href="/virtual-icebreaker-games">virtual ice breaker games</Link>.
            </p>
          ) : game.slug === "take-a-picture-of-your-shoes" ? (
            <p>
              Take a Picture of Your Shoes is an optional camera gag: show shoes, a mug, or stay off
              camera. No brand shaming. For low-trust rooms prefer{" "}
              <Link href="/games/chat-waterfall">Chat Waterfall</Link>.
            </p>
          ) : game.slug === "train-wreck" ? (
            <p>
              Train Wreck calls light categories so matching people walk to new spots—walk-only by
              default. Avoid body or dating categories. Large-group energizer notes in{" "}
              <Link href="/blog/ice-breaker-games-for-adults-large-groups">
                icebreaker games for adults in large groups
              </Link>
              .
            </p>
          ) : game.title === "The Question Web" ? (
            <p>
              The Question Web builds a yarn (or whiteboard) web as people answer short prompts and
              pass the strand across the circle. Keep prompts work-safe and tosses soft. Better for
              workshops than standups—see{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>.
            </p>
          ) : game.title === "Count Up" ? (
            <p>
              Count Up is a deceptively simple teamwork game. The group tries to count upward together, but only one person can speak at a time. If two people speak
              at once, the group restarts. It quickly builds listening, patience, and shared coordination.
            </p>
          ) : game.title === "Dicebreakers" ? (
            <p>
              Dicebreakers is a quick conversation starter where a simple die roll selects a prompt. It keeps things structured while still feeling natural,
              making it a great option for meetings, workshops, and classrooms when you want everyone talking within minutes.
            </p>
          ) : game.slug === "topics-tables" ? (
            <p>
              Topics Tables seats people with prompt cards for short timed talks, then optional
              rotates or card swaps. Harvest one line per table. Built for banquet and workshop
              seating—see{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>
              {" "}or{" "}
              <Link href="/games/speed-networking">Speed Networking</Link> for 1:1 rounds.
            </p>
          ) : game.slug === "unique-and-shared" ? (
            <p>
              Unique and Shared pairs one shared trait with one unique trait in small groups—belonging
              plus individuality without bingo cards. Compare{" "}
              <Link href="/games/common-ground">Common Ground</Link>
              {" "}and{" "}
              <Link href="/games/10-things-in-common">10 Things in Common</Link>.
            </p>
          ) : game.title === "Common Ground" ? (
            <p>
              Common Ground is a timed search for shared interests that are not obvious—hobbies, food,
              tools, weekend habits. Pairs or trios list commons, optionally rotate once, then harvest
              one or two examples. Use category cards for shy or visitor-heavy rooms. Continue with{" "}
              <Link href="/icebreaker-games-for-small-groups">ice breaker games for small groups</Link>
              {" "}or storytelling options on{" "}
              <Link href="/games-like-two-truths-and-a-lie">games like Two Truths and a Lie</Link>.
            </p>
          ) : game.title === "The Check-In" ? (
            <p>
              The Check-In is a generic arrival ritual—one word, color, weather, or scale—kept inside
              a few minutes with a pass rule. For fixed scripts use{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link> or{" "}
              <Link href="/games/weather-check-in">Weather Check-In</Link>
              ; for meeting choosers see{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>.
            </p>
          ) : game.slug === "what-are-you-bringing-to-the-meeting" ? (
            <p>
              What Are You Bringing to the Meeting asks each person for one contribution or need in a
              single sentence, then the facilitator may reorder the agenda. Treat blockers as valuable
              brings. See{" "}
              <Link href="/icebreaker-games-for-work">icebreaker games for work</Link>.
            </p>
          ) : game.slug === "desert-island-scenario" ? (
            <p>
              Desert Island Scenario is a light hypothetical (three items or skills) shared in trios.
              Keep humor kind; optional bridge to real project resources. For non-fantasy storytelling
              try{" "}
              <Link href="/games-like-two-truths-and-a-lie">games like Two Truths and a Lie</Link>.
            </p>
          ) : game.slug === "speed-networking" ? (
            <p>
              Speed Networking runs short timed 1:1 rounds with a clear rotate signal—better structure
              than open mingling for many introverts. Plan floaters for odd numbers. See{" "}
              <Link href="/icebreaker-games-for-work">icebreaker games for work</Link>
              {" "}and{" "}
              <Link href="/games-like-human-bingo">games like Human Bingo</Link>.
            </p>
          ) : game.slug === "passions-tic-tac-toe" ? (
            <p>
              Passions Tic-Tac-Toe is a small 3×3 passion grid for quick mingling—Human Bingo’s faster
              cousin. Soft wins; inclusive squares. Curated on{" "}
              <Link href="/icebreaker-games-for-work">icebreaker games for work</Link>.
            </p>
          ) : game.slug === "picture-sharing" ? (
            <p>
              Picture Sharing is an optional themed photo or chat description—cameras off count as a
              full pass. Keep themes privacy-safe. For tighter clocks use{" "}
              <Link href="/games/chat-waterfall">Chat Waterfall</Link>
              {" "}or browse{" "}
              <Link href="/virtual-icebreaker-games">virtual ice breaker games</Link>.
            </p>
          ) : game.slug === "show-and-tell" ? (
            <p>
              Show and Tell uses one nearby object and a 20-second why—sample voices in large rooms.
              Avoid status flexing. Related:{" "}
              <Link href="/games/picture-sharing">Picture Sharing</Link>.
            </p>
          ) : game.slug === "crossword-names" ? (
            <p>
              Crossword Names builds a shared name grid that interlocks letters—ask for spellings and
              pronunciations. Split above ~12. See{" "}
              <Link href="/riddle-icebreakers-for-virtual-meetings">
                riddle icebreakers for virtual meetings
              </Link>
              {" "}and{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>.
            </p>
          ) : game.slug === "guess-that-team-member" ? (
            <p>
              Guess That Team Member uses facilitator-screened work-safe clues; owners may refuse
              reveal. Compare{" "}
              <Link href="/games/guess-who-personal-trivia">Guess Who Personal Trivia</Link>.
            </p>
          ) : game.slug === "mystery-envelope" ? (
            <p>
              Mystery Envelope opens clean random prompts—swap once, pass anytime, no humiliating
              dares. Digital decks work for remote. See{" "}
              <Link href="/riddle-icebreakers-for-virtual-meetings">
                riddle icebreakers for virtual meetings
              </Link>
              .
            </p>
          ) : game.slug === "invention-pitch" ? (
            <p>
              Invention Pitch has small teams invent a playful product in minutes and pitch in under
              a minute—soft snaps, no roast judging. Fits{" "}
              <Link href="/funny-icebreaker-games-for-meetings">
                funny ice breaker games for meetings
              </Link>
              .
            </p>
          ) : game.slug === "news-headline-warm-up" ? (
            <p>
              News Headline Warm-Up invents short fictional headlines about the day—never real
              tragedies or coworker roasts. Chat paste works well. See{" "}
              <Link href="/funny-icebreaker-games-for-meetings">
                funny ice breaker games for meetings
              </Link>
              .
            </p>
          ) : game.slug === "pterodactyl" ? (
            <p>
              Pterodactyl is a silly no-teeth word game—prefer the no-elimination version for work.
              Skip formal client calls. More laugh-forward openers on{" "}
              <Link href="/funny-icebreaker-games-for-meetings">
                funny ice breaker games for meetings
              </Link>
              .
            </p>
          ) : game.slug === "alliterative-name-game" ? (
            <p>
              Alliterative Name Game pairs each name with a same-letter adjective—pass or name-only
              for hard letters. Compare{" "}
              <Link href="/games/the-name-game">The Name Game</Link>
              {" "}and more formats on{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>.
            </p>
          ) : game.slug === "blind-name-tag" ? (
            <p>
              Blind Name Tag uses facilitator-screened stickies and yes/no guesses—swap once, pass
              anytime. Playful adults only; skip cold client rooms. See{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>.
            </p>
          ) : game.slug === "10-things-in-common" ? (
            <p>
              10 Things in Common is Human Bingo’s quieter cousin—pairs list shared interests beyond
              the obvious, then share one surprise. Related:{" "}
              <Link href="/games/common-ground">Common Ground</Link>
              {" "}and{" "}
              <Link href="/games-like-human-bingo">games like Human Bingo</Link>.
            </p>
          ) : game.slug === "one-word-at-a-time" ? (
            <p>
              One Word at a Time builds a silly shared sentence—one word each turn. Not the same as{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link>
              . Curated on{" "}
              <Link href="/best-icebreaker-games">best icebreaker games</Link>.
            </p>
          ) : game.slug === "category-mixer" ? (
            <p>
              Category Mixer clusters people by inclusive prompts for fast hellos—no bingo cards.
              Seated options matter. See{" "}
              <Link href="/games-like-human-bingo">games like Human Bingo</Link>.
            </p>
          ) : game.slug === "icebreaker-bingo" ? (
            <p>
              Icebreaker Bingo is Human Bingo with custom theme decks—soft line wins, pass anytime.
              Compare{" "}
              <Link href="/games/human-bingo">Human Bingo</Link>.
            </p>
          ) : game.slug === "reception-line" ? (
            <p>
              Reception Line uses two facing rows and timed hellos so wallflowers still meet people.
              Related:{" "}
              <Link href="/games/speed-networking">Speed Networking</Link>.
            </p>
          ) : game.slug === "sole-mate" ? (
            <p>
              Sole Mate matches on shoe style—or safer snack/commute prompts; shoes stay on. More
              mixers on{" "}
              <Link href="/games-like-human-bingo">games like Human Bingo</Link>.
            </p>
          ) : game.slug === "marshmallow-challenge" ? (
            <p>
              Marshmallow Challenge is a spaghetti-tower teamwork build with allergen-safe stand-ins
              and a process debrief—knot energy without hand-holding. See{" "}
              <Link href="/games-like-the-human-knot">games like the Human Knot</Link>.
            </p>
          ) : game.slug === "paper-bag-pickup" ? (
            <p>
              Paper Bag Pickup is short rule-based collecting with optional contact and a seated
              lane. Prefer{" "}
              <Link href="/games/line-up">Line-Up</Link>
              {" "}when racing is unsafe.
            </p>
          ) : game.slug === "story-swap" ? (
            <p>
              Story Swap is timed pair listening plus a one-line introduce—visitor-safe prompts for
              church small groups. Related:{" "}
              <Link href="/games/two-truths-and-a-dream">Two Truths and a Dream</Link>.
            </p>
          ) : game.slug === "two-truths-and-a-dream" ? (
            <p>
              Two Truths and a Dream skips the lie—two facts plus one hope. Compare classic{" "}
              <Link href="/games/two-truths-and-a-lie">Two Truths and a Lie</Link>
              {" "}and{" "}
              <Link href="/games-like-two-truths-and-a-lie">games like Two Truths</Link>.
            </p>
          ) : game.slug === "appreciation-circle" ? (
            <p>
              Appreciation Circle closes trusted small groups with optional spoken or sticky
              thanks—not a stranger opener. See{" "}
              <Link href="/icebreaker-games-for-small-groups">
                ice breaker games for small groups
              </Link>
              .
            </p>
          ) : game.slug === "year-of-the-coin" ? (
            <p>
              Year of the Coin draws a year for a light memory—pass and redraw for hard seasons.
              Church-friendly notes on{" "}
              <Link href="/icebreaker-games-for-church">icebreaker games for church</Link>.
            </p>
          ) : game.slug === "remote-change-3-things" ? (
            <p>
              Remote Change 3 Things is a camera-friendly observation warm-up—one volunteer changes
              three props, the room guesses in chat. Opt-in only. See{" "}
              <Link href="/virtual-icebreaker-games">virtual ice breaker games</Link>
              {" "}and{" "}
              <Link href="/games/chat-waterfall">Chat Waterfall</Link>.
            </p>
          ) : game.slug === "dicebreakers" ? (
            <p>
              Dicebreakers maps a die to six soft prompts—pass and one re-roll anytime. Prompt lottery,
              not Would You Rather. Fits{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>.
            </p>
          ) : game.slug === "count-up" ? (
            <p>
              Count Up is a listening drill: count together without overlapping voices, restart kindly,
              then debrief interruption norms. More teamwork options on{" "}
              <Link href="/icebreaker-games-for-work">icebreaker games for work</Link>.
            </p>
          ) : game.slug === "diversity-bingo" ? (
            <p>
              Diversity Bingo is a skills-and-habits mixer—not an identity audit. Screen every square,
              allow pass, and harvest what people can teach. Prefer{" "}
              <Link href="/games/human-bingo">Human Bingo</Link>
              {" "}if the word diversity will land as HR theater.
            </p>
          ) : game.slug === "wheel-of-fortune-introductions" ? (
            <p>
              Wheel of Fortune Introductions spins a light prompt for a 20-second intro. Pass or
              re-spin anytime. See{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>
              {" "}and{" "}
              <Link href="/games/dicebreakers">Dicebreakers</Link>.
            </p>
          ) : game.slug === "where-do-we-come-from-what-is-famous" ? (
            <p>
              People choose a place and one ordinary famous thing—never “where are you really from.”
              Pass or pick a park. Skip when origin talk is risky (
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>
              ).
            </p>
          ) : game.slug === "fantasy-vacation" ? (
            <p>
              Fantasy Vacation is a short invented trip with no wealth contest. Staycations count.
              Compare packing constraints on{" "}
              <Link href="/games/desert-island-scenario">Desert Island Scenario</Link>.
            </p>
          ) : game.slug === "speed-dating-icebreaker" ? (
            <p>
              Treat this as timed pair hellos—not dating. Same rotations as{" "}
              <Link href="/games/speed-networking">Speed Networking</Link>
              {" "}with professional prompts and a halfway bell.
            </p>
          ) : game.slug === "would-you-rather-training" ? (
            <p>
              Would You Rather Training uses work process pairs and bridges one prompt into the
              agenda. For party hypotheticals use{" "}
              <Link href="/games/would-you-rather">Would You Rather</Link>.
            </p>
          ) : game.slug === "guess-who" ? (
            <p>
              Guess Who is the simple classroom fact-bowl. For screened workplace facts and refuse
              reveal, use{" "}
              <Link href="/games/guess-who-personal-trivia">Guess Who Personal Trivia</Link>.
            </p>
          ) : game.slug === "telephone-charades-lines" ? (
            <p>
              Telephone Charades Lines runs two parallel gesture chains—soft race, no touching.
              Single chain:{" "}
              <Link href="/games/telephone-charades">Telephone Charades</Link>.
            </p>
          ) : game.slug === "near-and-far" ? (
            <p>
              Near and Far is a floor or chat spectrum—not a two-side poll. Seated pointing counts.
              Compare{" "}
              <Link href="/games/this-or-that-questions">This or That Questions</Link>.
            </p>
          ) : game.slug === "if-then" ? (
            <p>
              If-Then completes a safe stem in one sentence. Pass or write-only. For process tradeoffs
              use{" "}
              <Link href="/games/would-you-rather-training">Would You Rather Training</Link>.
            </p>
          ) : game.slug === "crazy-handshake" ? (
            <p>
              Crazy Handshake is optional contact—air high-five is the default. Skip forced touch.
              See{" "}
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>.
            </p>
          ) : game.slug === "helium-stick" ? (
            <p>
              Helium Stick is a fingertip teamwork lower-the-rod drill with a process debrief—knot
              energy without hand-holding. Related:{" "}
              <Link href="/games-like-the-human-knot">games like the Human Knot</Link>.
            </p>
          ) : game.slug === "apple-orange-and-banana" ? (
            <p>
              Apple Orange Banana is a short fruit-label attention reset. Hands-only at work. Youth
              options on{" "}
              <Link href="/icebreaker-games-for-youth-group">
                ice breaker games for youth group
              </Link>
              .
            </p>
          ) : game.slug === "bang" ? (
            <p>
              Bang is a tiny pointing spike—use the no-elimination, renamed version or skip. Safer
              energy:{" "}
              <Link href="/games/rock-paper-scissors-tournament">
                Rock Paper Scissors Tournament
              </Link>
              .
            </p>
          ) : game.slug === "5-4-3-2-1-grounding-technique" ? (
            <p>
              5-4-3-2-1 is an optional sensory reset, not a party game. Answers stay private. If the
              room needs support instead of an activity, read{" "}
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>.
            </p>
          ) : game.slug === "group-map" ? (
            <p>
              Group Map is silent optional pins—not an origin audit. Spoken hometown shares live on{" "}
              <Link href="/games/where-do-we-come-from-what-is-famous">
                Where Do We Come From
              </Link>
              .
            </p>
          ) : game.slug === "christmas-pick-a-side" ? (
            <p>
              Christmas Pick a Side is binary holiday preference polls—winter deck for mixed-faith
              rooms. For mingling clusters use{" "}
              <Link href="/games/christmas-connection">Christmas Connection</Link>.
            </p>
          ) : game.slug === "christmas-roll-poll" ? (
            <p>
              Christmas Roll Poll maps a die to seasonal prompts—pass or re-roll anytime. Non-seasonal
              cousin:{" "}
              <Link href="/games/dicebreakers">Dicebreakers</Link>.
            </p>
          ) : game.slug === "the-great-christmas-candy-pass" ? (
            <p>
              Candy Pass needs allergen labels and a non-food token lane—nobody must eat. Related:{" "}
              <Link href="/games/skittles-sharing">Skittles Sharing</Link>.
            </p>
          ) : game.slug === "guess-the-gift-by-sound" ? (
            <p>
              Guess the Gift by Sound shakes wrapped ordinary objects—soft guesses, few items.
              Compare{" "}
              <Link href="/games/ornament-guess">Ornament Guess</Link>.
            </p>
          ) : game.slug === "share-a-favorite-holiday-memory" ? (
            <p>
              Favorite Holiday Memory is optional and light-only—offer a this-year alternative and
              pass. Low-trust parties should prefer{" "}
              <Link href="/games/christmas-pick-a-side">Christmas Pick a Side</Link>.
            </p>
          ) : game.slug === "whats-on-your-phone-christmas-edition" ? (
            <p>
              Phone Christmas Edition is optional photo/song share—never force unlocks. Privacy-first
              cousin:{" "}
              <Link href="/games/picture-sharing">Picture Sharing</Link>.
            </p>
          ) : game.slug === "ornament-guess" ? (
            <p>
              Ornament Guess uses a short clue about an ornament or any meaningful object—winter
              objects welcome. Seated tips on{" "}
              <Link href="/blog/christmas-table-icebreaker-games">
                Christmas table icebreaker games
              </Link>
              .
            </p>
          ) : game.slug === "holiday-bingo" ? (
            <p>
              Holiday Bingo is Human Bingo with a winter deck—soft line wins, inclusive squares.
              See{" "}
              <Link href="/games/human-bingo">Human Bingo</Link>.
            </p>
          ) : game.slug === "holiday-fortunes" ? (
            <p>
              Holiday Fortunes draws screened wish slips—pass or redraw. Keep them secular and kind.
              Related:{" "}
              <Link href="/games/mystery-envelope">Mystery Envelope</Link>.
            </p>
          ) : game.slug === "two-truths-and-a-tinsel" ? (
            <p>
              Two Truths and a Tinsel is seasonal Two Truths—or two truths plus a hope. Classic rules:{" "}
              <Link href="/games/two-truths-and-a-lie">Two Truths and a Lie</Link>.
            </p>
          ) : game.slug === "message-under-a-plate" ? (
            <p>
              Message Under a Plate puts a light prompt at every seat—neighbor share or silent read.
              More seated ideas:{" "}
              <Link href="/blog/christmas-table-icebreaker-games">
                Christmas table icebreaker games
              </Link>
              .
            </p>
          ) : game.slug === "photo-booth-prompt-jar" ? (
            <p>
              Photo Booth Prompt Jar is drop-in and optional—consent before every post. No-camera prop
              lane welcome. See{" "}
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>.
            </p>
          ) : game.slug === "around-the-world-traditions" ? (
            <p>
              Around the World Traditions is consent-led optional sharing—never a culture quiz. Prefer{" "}
              <Link href="/games/christmas-connection">Christmas Connection</Link>
              {" "}when trust is thin.
            </p>
          ) : game.slug === "sing-off" ? (
            <p>
              Sing-Off allows titles and hums—no forced solos. Cooperative playlists beat elimination.
              Non-singing cousin:{" "}
              <Link href="/games/name-that-movie-quote">Name That Movie Quote</Link>.
            </p>
          ) : game.slug === "christmas-connection" ? (
            <p>
              Christmas Connection is a holiday preference mixer: people find others who share a taste (lights vs candles, movies vs music), form small clusters, then harvest a few themes.
              Use it at parties and year-end socials when you want movement without a tradition contest. For mixed-faith rooms, switch to winter prompts. See the step-by-step, pass rule, and our Preference Passport variant below.
              After dinner seating starts, continue with{" "}
              <Link href="/blog/christmas-table-icebreaker-games">Christmas table icebreaker games</Link>
              {" "}or scale the room with{" "}
              <Link href="/blog/ice-breaker-games-for-adults-large-groups">icebreaker games for large adult groups</Link>.
            </p>
          ) : game.slug === "motion-name-game" ? (
            <p>
              Motion Name-Game attaches a small, repeatable gesture to each name so faces stick. It is a name-learning energizer, not a talent show.
              Chunk groups larger than about 12 so nobody recites the whole room. Offer a seated gesture from the first sentence. Compare the verbal version in{" "}
              <Link href="/games/the-name-game">The Name Game</Link> and more formats on{" "}
              <Link href="/name-game-icebreakers">name game icebreakers</Link>. Classroom timing notes live on{" "}
              <Link href="/icebreaker-games-for-high-school-students">ice breaker games for high school students</Link>.
            </p>
          ) : game.slug === "team-superpower-collage" ? (
            <p>
              Team Superpower Collage is a short identity-building exercise for people who already share a project, class, or team.
              Groups add a few tiles that name an observable behavior plus a process “kryptonite,” then keep two tiles as a trial. Skip capes and skip this as a first-minute opener for strangers.
              Use it after a check-in from{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>
              {" "}or during a kickoff from{" "}
              <Link href="/icebreaker-games-for-work">icebreaker games for work</Link>.
            </p>
          ) : game.slug === "would-you-rather" ? (
            <p>
              Would You Rather is a preference poll with optional movement: people pick a side on
              either/or prompts. Keep a clean deck, allow pass, and stop after six to ten questions.
              Skip edgy party lists at work and school. For calmer binaries try{" "}
              <Link href="/games/this-or-that-questions">This or That Questions</Link>
              ; for laugh-forward meeting openers see{" "}
              <Link href="/funny-icebreaker-games-for-meetings">
                funny ice breaker games for meetings
              </Link>
              .
            </p>
          ) : game.slug === "this-or-that-questions" ? (
            <p>
              This or That Questions are short preference pairs (coffee or tea; docs or slides) answered
              with hands, sides, or chat. Use them when you need a two-minute pulse without stories.
              Pair with{" "}
              <Link href="/games/one-word-check-in">One Word Check-In</Link> for word-based arrivals, or
              browse{" "}
              <Link href="/short-virtual-icebreakers">short virtual icebreakers</Link> for chat-first
              options.
            </p>
          ) : game.slug === "six-word-memoirs" ? (
            <p>
              Six Word Memoirs asks people to write exactly six words on a prompt (today, this week,
              this team), then optionally share. The constraint creates brevity; it is better after
              names are known than as a stranger opener. Allow write-only participation. Warm up with{" "}
              <Link href="/games/common-ground">Common Ground</Link> or a meeting check-in from{" "}
              <Link href="/icebreaker-games-for-meetings">ice breaker games for meetings</Link>.
            </p>
          ) : game.slug === "rock-paper-scissors-tournament" ? (
            <p>
              Rock Paper Scissors Tournament is a large-group energizer: winners keep playing while
              losers join cheer squads. It needs floor space and a seated option. End at a champion or
              final four. Use for orientations and youth nights—not crisis meetings. Run-sheet ideas
              live in{" "}
              <Link href="/blog/ice-breaker-games-for-adults-large-groups">
                icebreaker games for adults in large groups
              </Link>
              .
            </p>
          ) : game.slug === "never-have-i-ever" ? (
            <p>
              Never Have I Ever only belongs here with a facilitator-owned, school- and work-safe
              prompt deck—no alcohol mechanics, no crowd-sourced gotchas. When the only prompts you
              have are party-game mean, skip it (
              <Link href="/when-to-skip-an-icebreaker">when to skip an icebreaker</Link>
              ) and run{" "}
              <Link href="/games/would-you-rather">Would You Rather</Link> or{" "}
              <Link href="/games/human-bingo">Human Bingo</Link> instead.
            </p>
          ) : (
            <p>
              {game.title} is a {game.difficulty ? `${game.difficulty.toLowerCase()} ` : ""}
              {game.category.toLowerCase()} activity for {game.players || "flexible groups"}.
              Plan about {game.duration || "a few minutes"}
              {game.materials ? ` and have ${game.materials.replace(/\n/g, ", ")} ready` : ""}.
              Run it as a time-boxed opener, keep a pass rule, and stop while energy is still high.
              Browse more formats in the{" "}
              <Link href="/games">games library</Link>
              {" "}or start from our{" "}
              <Link href="/how-we-choose-icebreakers">icebreaker selection checklist</Link>.
            </p>
          )}

          {game.title === "Alliterative Name Game" && (
            <div className={styles.tipBox}>
              <h4>Examples</h4>
              <ul>
                <li>Brave Ben</li>
                <li>Curious Carlos</li>
                <li>Helpful Hannah</li>
                <li>Joyful Jordan</li>
                <li>Witty Will</li>
              </ul>
            </div>
          )}

          {game.title === "One Word Check-In" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>One word for your energy today</li>
                <li>One word for your focus right now</li>
                <li>One word for what you need from this meeting</li>
                <li>One word for your mood</li>
                <li>One word for your bandwidth</li>
              </ul>
            </div>
          )}

          {game.slug === "weather-check-in" && (
            <div className={styles.tipBox}>
              <h4>Weather examples</h4>
              <ul>
                <li>Mostly sunny with a chance of email thunder</li>
                <li>Foggy but clearing after coffee</li>
                <li>Light drizzle—tired but okay</li>
                <li>Partly cloudy with bright spots</li>
                <li>Windy—lots of context-switching today</li>
              </ul>
            </div>
          )}

          {game.slug === "chainlink" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Require an explicit shared trait before the new fact</li>
                <li>Keep facts short and work-safe (hobbies, tools, places)</li>
                <li>Split above ~15 people into sub-circles of 8–12</li>
                <li>Debrief listening, not who remembered the most</li>
              </ul>
            </div>
          )}

          {game.slug === "emoji-introduction" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Ask for 2–3 emojis, not a long string</li>
                <li>Model a vivid, work-safe example first</li>
                <li>Prefer chat-first for hybrid and large rooms</li>
                <li>Allow a pass; celebrate curiosity over perfect guesses</li>
              </ul>
            </div>
          )}

          {game.title === "Two Truths and a Lie" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Keep statements safe for work and optional</li>
                <li>Limit questions to 1–2 per person to keep the pace</li>
                <li>Use breakout rooms for large groups</li>
                <li>Ask people to make the lie believable, not extreme</li>
              </ul>
            </div>
          )}

          {game.title === "Minefield" && (
            <div className={styles.tipBox}>
              <h4>Debrief questions</h4>
              <ul>
                <li>What instructions helped most?</li>
                <li>When did you feel the most trust?</li>
                <li>What assumptions showed up?</li>
                <li>How does this relate to communication at work?</li>
              </ul>
            </div>
          )}

          {game.title === "The Name Game" && (
            <div className={styles.tipBox}>
              <h4>Variations</h4>
              <ul>
                <li>Name + role (for work meetings)</li>
                <li>Name + a gesture (for better memory)</li>
                <li>Split into small circles for large groups</li>
                <li>Virtual: type your name in chat as a backup</li>
              </ul>
            </div>
          )}

          {game.title === "The Question Web" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>What is one small win this week?</li>
                <li>What is a hobby you enjoy?</li>
                <li>What is something you want to learn this year?</li>
                <li>What is a value you care about?</li>
              </ul>
            </div>
          )}

          {game.title === "Count Up" && (
            <div className={styles.tipBox}>
              <h4>Debrief questions</h4>
              <ul>
                <li>What helped us succeed?</li>
                <li>What caused resets?</li>
                <li>How did we adapt as a group?</li>
                <li>How does this relate to coordination at work?</li>
              </ul>
            </div>
          )}

          {game.title === "Dicebreakers" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>A small win this week</li>
                <li>A hobby you enjoy</li>
                <li>A favorite snack</li>
                <li>Something you are learning</li>
                <li>A place you want to visit</li>
                <li>One thing you are grateful for</li>
              </ul>
            </div>
          )}

          {game.slug === "topics-tables" && (
            <div className={styles.tipBox}>
              <h4>How to run it</h4>
              <ul>
                <li>Place 6–10 prompts at each table</li>
                <li>Set a 5–8 minute timer per round</li>
                <li>Rotate tables or swap prompt cards between rounds</li>
                <li>Close with a quick share-out of favorite answers</li>
              </ul>
            </div>
          )}

          {game.slug === "unique-and-shared" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Use safe categories (hobbies, food, routines, learning goals)</li>
                <li>Time-box the search to 2–4 minutes</li>
                <li>Encourage curiosity, not debate</li>
                <li>For large groups, rotate partners and keep share-outs short</li>
              </ul>
            </div>
          )}

          {game.title === "Common Ground" && (
            <div className={styles.tipBox}>
              <h4>Category ideas</h4>
              <ul>
                <li>Hobbies you enjoy</li>
                <li>Favorite foods or snacks</li>
                <li>Music or podcasts</li>
                <li>Morning routines</li>
                <li>Things you are learning</li>
                <li>Work preferences (focus time, communication style)</li>
              </ul>
            </div>
          )}

          {game.title === "The Check-In" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>One word for your energy</li>
                <li>A color for your mood</li>
                <li>Weather report (sunny, cloudy, stormy)</li>
                <li>A small win from this week</li>
                <li>One thing you need to be successful today</li>
              </ul>
            </div>
          )}

          {game.slug === "remote-change-3-things" && (
            <div className={styles.tipBox}>
              <h4>Good changes</h4>
              <ul>
                <li>Swap glasses, hat, or headphones</li>
                <li>Move a mug or notebook</li>
                <li>Add or remove a background item</li>
                <li>Change lighting or camera angle slightly</li>
              </ul>
            </div>
          )}

          {game.slug === "ornament-guess" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Frame it as “meaningful object guess” to keep it inclusive</li>
                <li>Keep clues short (one sentence) and time-box guesses</li>
                <li>Let people pass or share a neutral object if they prefer</li>
                <li>Use breakout rooms for large groups</li>
              </ul>
            </div>
          )}

          {game.slug === "christmas-connection" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas (holiday-optional)</h4>
              <ul>
                <li>Lights or candles</li>
                <li>Early gifts or morning-of</li>
                <li>Movies or music while cooking</li>
                <li>Soup or stew on a cold night</li>
                <li>Indoor New Year or outdoor walk</li>
              </ul>
            </div>
          )}

          {game.slug === "motion-name-game" && (
            <div className={styles.tipBox}>
              <h4>Motion ideas that stay small</h4>
              <ul>
                <li>Two-finger wave</li>
                <li>Mug-lift (virtual)</li>
                <li>Book-open mime (seated)</li>
                <li>Two snaps above the table</li>
                <li>A nod only—still counts</li>
              </ul>
            </div>
          )}

          {game.slug === "team-superpower-collage" && (
            <div className={styles.tipBox}>
              <h4>Tile examples</h4>
              <ul>
                <li>Power: we decide in the room. Kryptonite: decisions live only in chat.</li>
                <li>Power: we close loops in writing. Kryptonite: no owner on action items.</li>
                <li>Power: we ask the quiet person last. Kryptonite: the loudest voice goes first by habit.</li>
                <li>Power: we time-box openers. Kryptonite: icebreakers eat the agenda.</li>
              </ul>
            </div>
          )}

          {game.title === "Virtual Background Story" && (
            <div className="flex justify-center my-6">
              <div className="relative overflow-hidden rounded-lg max-w-md w-full">
                <img
                  src="/img/VirtualBackgroundStory_Setup.jpg"
                  alt="icebreakergames Virtual Background Story - Team Building Activity Setup"
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          )}

          {game.title === "Icebreaker Bingo" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Print more cards than you think you need — extra copies keep groups moving</li>
                <li>Announce the first bingo winner early to create energy, then let others finish the card</li>
                <li>Walk the room to help shy participants connect and keep the conversation going</li>
                <li>For mixed groups, use prompts that are broad enough for everyone to find matches</li>
              </ul>
            </div>
          )}

          {game.title === "Find Your Match" && (
            <div className={styles.tipBox}>
              <h4>How to prepare pairs</h4>
              <ul>
                <li>Prepare one card per person with a famous pair (peanut butter & jelly, Batman & Robin)</li>
                <li>Make sure there are enough pairs so everyone participates</li>
                <li>Consider themed pairs for conferences (product names, industry references)</li>
                <li>Have participants keep their card visible to make pairing faster</li>
              </ul>
            </div>
          )}

          {game.title === "Wheel of Fortune Introductions" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>Biggest pet peeve</li>
                <li>Strangest thing you have eaten</li>
                <li>Favorite comfort food</li>
                <li>Most spontaneous thing you have done</li>
                <li>Hidden talent</li>
                <li>Dream travel destination</li>
              </ul>
            </div>
          )}

          {game.title === "Six Word Memoirs" && (
            <div className={styles.tipBox}>
              <h4>Writing prompts</h4>
              <ul>
                <li>Six words about your day</li>
                <li>Six words about your team right now</li>
                <li>Six words about a goal you are working toward</li>
                <li>Six words about why you do what you do</li>
                <li>A humorous or surprising six-word life summary</li>
              </ul>
            </div>
          )}

          {game.title === "Where Do We Come From & What Is Famous?" && (
            <div className={styles.tipBox}>
              <h4>Tips for facilitators</h4>
              <ul>
                <li>Use a world map or slide to visualize locations — it adds energy and engagement</li>
                <li>Encourage people to share something quirky or personal, not just obvious facts</li>
                <li>For diverse groups, acknowledge how different backgrounds enrich the team</li>
                <li>Keep each share to 30–60 seconds to maintain pace</li>
              </ul>
            </div>
          )}

          {game.title === "Never Have I Ever" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>Never have I ever traveled solo</li>
                <li>Never have I ever cooked a meal for more than five people</li>
                <li>Never have I ever given a speech to 50+ people</li>
                <li>Never have I ever learned a new language</li>
                <li>Never have I ever worked remotely for more than a year</li>
              </ul>
            </div>
          )}

          {game.title === "This or That Questions" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>Coffee or tea?</li>
                <li>Morning person or night owl?</li>
                <li>Books or movies?</li>
                <li>Mountain or beach?</li>
                <li>Sweet or savory?</li>
                <li>Indoor or outdoor?</li>
              </ul>
            </div>
          )}

          {game.title === "Would You Rather" && (
            <div className={styles.tipBox}>
              <h4>Question ideas</h4>
              <ul>
                <li>Would you rather be able to fly or be invisible?</li>
                <li>Would you rather never use social media again or never watch TV again?</li>
                <li>Would you rather travel to the past or the future?</li>
                <li>Would you rather have unlimited money or unlimited time?</li>
                <li>Would you rather be famous or anonymous but respected?</li>
              </ul>
            </div>
          )}

          {game.title === "Rock Paper Scissors Tournament" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Use a visible bracket board — it builds excitement and keeps everyone informed</li>
                <li>Keep rounds fast (15–30 seconds) with a clear start signal</li>
                <li>Have losers form a cheering section for the next round — it keeps everyone engaged</li>
                <li>Use a drumroll or sound effect for dramatic moments</li>
              </ul>
            </div>
          )}

          {game.title === "Fantasy Vacation" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>Share your dream destination and one thing you would do there</li>
                <li>Describe the most unusual place you have ever wanted to visit</li>
                <li>What is your ideal vacation activity — adventure or relaxation?</li>
                <li>If money was no object, where would you go?</li>
              </ul>
            </div>
          )}

          {game.title === "Mystery Envelope" && (
            <div className={styles.tipBox}>
              <h4>Envelope prompt ideas</h4>
              <ul>
                <li>Tell the story of your first day at work</li>
                <li>Act out your morning routine without using your hands</li>
                <li>Share a quick win from this week</li>
                <li>Describe your ideal weekend in three words</li>
                <li>Show us a skill or trick you can do in 10 seconds</li>
              </ul>
            </div>
          )}

          {game.title === "Invention Pitch" && (
            <div className={styles.tipBox}>
              <h4>Pitch prompt ideas</h4>
              <ul>
                <li>Invent an app that nobody needs but everyone would love</li>
                <li>Design a gadget that solves a first-world problem</li>
                <li>Create a new holiday and its signature activity</li>
                <li>Invent a new flavor of ice cream and its catchy name</li>
              </ul>
            </div>
          )}

          {game.title === "Scavenger Hunt" && (
            <div className={styles.tipBox}>
              <h4>Challenge ideas</h4>
              <ul>
                <li>Find something red and something blue</li>
                <li>Take a team photo doing jumping jacks</li>
                <li>Record a 10-second team cheer</li>
                <li>Find a business card from someone outside your team</li>
                <li>Create a paper airplane from office supplies</li>
              </ul>
            </div>
          )}

          {game.title === "Show and Tell" && (
            <div className={styles.tipBox}>
              <h4>Object ideas</h4>
              <ul>
                <li>A gift from someone meaningful</li>
                <li>A souvenir from a meaningful trip</li>
                <li>A book that changed your perspective</li>
                <li>A hobby item you are proud of</li>
                <li>Something inherited from family</li>
              </ul>
            </div>
          )}

          {game.title === "Appreciation Circle" && (
            <div className={styles.tipBox}>
              <h4>Facilitator tips</h4>
              <ul>
                <li>Model specific appreciation first — it sets the tone</li>
                <li>Set the expectation that everyone participates</li>
                <li>Allow people to pass if they genuinely have nothing</li>
                <li>Close with a moment of reflection or gratitude</li>
              </ul>
            </div>
          )}

          {game.title === "Line-Up" && (
            <div className={styles.tipBox}>
              <h4>Criterion ideas</h4>
              <ul>
                <li>Birth month (January = one end)</li>
                <li>Alphabetical by first name</li>
                <li>Years working in the industry</li>
                <li>How you take your coffee</li>
                <li>How you spent last weekend (staycation = one end, adventure = other)</li>
              </ul>
            </div>
          )}

          {game.title === "Take a Picture of Your Shoes" && (
            <div className={styles.tipBox}>
              <h4>Story prompt ideas</h4>
              <ul>
                <li>Where have these shoes taken you?</li>
                <li>Why did you choose these shoes today?</li>
                <li>What is the most memorable place these shoes have been?</li>
                <li>Do these shoes say anything about your personality?</li>
              </ul>
            </div>
          )}

          {game.title === "Near and Far" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>How much do you enjoy public speaking?</li>
                <li>How connected do you feel to this team?</li>
                <li>How often do you work from home?</li>
                <li>How much do you enjoy planning vs. improvising?</li>
                <li>How optimistic are you about the future?</li>
              </ul>
            </div>
          )}

          {game.title === "Desert Island Scenario" && (
            <div className={styles.tipBox}>
              <h4>Item ideas</h4>
              <ul>
                <li>A guitar for entertainment</li>
                <li>A satellite phone for emergencies</li>
                <li>A good knife for survival and crafting</li>
                <li>A year's supply of coffee</li>
                <li>Photography equipment</li>
              </ul>
            </div>
          )}

          {game.title === "Guess Who (Personal Trivia)" && (
            <div className={styles.tipBox}>
              <h4>Fact ideas</h4>
              <ul>
                <li>Has traveled to 10+ countries</li>
                <li>Once met a celebrity</li>
                <li>Plays a musical instrument</li>
                <li>Volunteers on weekends</li>
                <li>Has a hidden talent</li>
              </ul>
            </div>
          )}

          {game.title === "Team Trivia" && (
            <div className={styles.tipBox}>
              <h4>Category ideas</h4>
              <ul>
                <li>General knowledge (history, science, geography)</li>
                <li>Pop culture (movies, music, TV shows)</li>
                <li>Company or industry trivia</li>
                <li>World facts and geography</li>
                <li>Fun and surprising facts</li>
              </ul>
            </div>
          )}

          {game.title === "Hot Takes" && (
            <div className={styles.tipBox}>
              <h4>Hot take ideas</h4>
              <ul>
                <li>Pineapple belongs on pizza</li>
                <li>The best season is autumn</li>
                <li>Mondays are actually great</li>
                <li>Email is better than Slack for complex decisions</li>
                <li>The best team lunch is pizza</li>
              </ul>
            </div>
          )}

          {game.title === "Online Charades" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>Making coffee in the morning</li>
                <li>Working from home</li>
                <li>A team meeting on Zoom</li>
                <li>Sending a tricky email</li>
                <li>Taking a coffee break</li>
              </ul>
            </div>
          )}

          {game.title === "Mingle Bingo" && (
            <div className={styles.tipBox}>
              <h4>Prompt ideas</h4>
              <ul>
                <li>Has traveled abroad</li>
                <li>Speaks two languages</li>
                <li>Enjoys cooking</li>
                <li>Has a pet</li>
                <li>Prefers morning coffee</li>
              </ul>
            </div>
          )}

          {game.title === "What's Missing" && (
            <div className={styles.tipBox}>
              <h4>Item ideas</h4>
              <ul>
                <li>A colorful pen</li>
                <li>A printed photo</li>
                <li>A coffee mug</li>
                <li>A sticky note with a word</li>
                <li>A small toy or figurine</li>
              </ul>
            </div>
          )}

          {game.title === "Storytelling Circle" && (
            <div className={styles.tipBox}>
              <h4>Opening line ideas</h4>
              <ul>
                <li>Once upon a time, in a very unusual office...</li>
                <li>A mysterious package arrived at the office that nobody expected...</li>
                <li>The team discovered a hidden room behind the printer...</li>
                <li>On the first day back in the office, something strange happened...</li>
              </ul>
            </div>
          )}

          {game.title === "Word Association" && (
            <div className={styles.tipBox}>
              <h4>Starting word ideas</h4>
              <ul>
                <li>Summer</li>
                <li>Coffee</li>
                <li>Monday</li>
                <li>Success</li>
                <li>Creativity</li>
              </ul>
            </div>
          )}

          {game.title === "Speed Networking" && (
            <div className="flex justify-center my-6">
              <div className="relative overflow-hidden rounded-lg max-w-md w-full">
                <img
                  src="/img/SpeedNetworking-Setup.jpg"
                  alt="Speed Networking | Ice Breaker Games - Setup"
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          )}

          {game.slug === "emoji-introduction" && (
            <div className="flex justify-center my-6">
              <div className="relative overflow-hidden rounded-lg max-w-2xl w-full">
                <img
                  src="/img/EmojiIntroduction-GameplayScene.png"
                  alt="emoji-introduction — participants sharing emoji self-intros in a virtual meeting"
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          )}
        </section>

        {materialsList.length > 0 && (
          <section className={styles.section}>
            <h2>Materials Needed</h2>
            <ul>
              {materialsList.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </section>
        )}

        {showBasicSteps && (
          <section className={styles.section}>
            <h2>How to Play</h2>
            <ol>
              {stepsList.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        <GameActions
          title={game.title}
          players={game.players ?? undefined}
          duration={game.duration ?? undefined}
          materials={game.materials ?? undefined}
          steps={game.steps ?? undefined}
          variant="body"
        />
      </div>

      <aside className={styles.storyBand} aria-label="In action">
        <div className={styles.storyMedia}>
          <Image
            src={sceneSrc}
            alt={`${game.title} — facilitators running the icebreaker`}
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.storyScrim} aria-hidden="true" />
        <div className={styles.storyInner}>
          <p className={styles.storyEyebrow}>In the room</p>
          <p className={styles.storyTitle}>How {game.title} feels live</p>
          <p className={styles.storyLead}>
            Use the snapshot above, then run the steps with a light touch—celebrate curiosity over
            perfect answers.
          </p>
        </div>
      </aside>

      <div className={styles.bodyAfterStory}>
        {/* No shared Tips for Success — identical copy across 100+ game URLs
            looked like template near-duplicates (indexing). Page-specific pitfalls
            live in GamePageExtras when present. */}

        {game.title === "Emoji Introduction" && (
          <div className={styles.section}>
            <h2>Emoji Introduction Examples</h2>
            <div className={styles.exampleGrid}>
              <div className={styles.exampleItem}>
                <p className={styles.exampleEmoji}>☕📚🚲</p>
                <p>Coffee, learning, and cycling are part of my week.</p>
              </div>
              <div className={styles.exampleItem}>
                <p className={styles.exampleEmoji}>🎧🌱💡</p>
                <p>I like music, gardening, and new ideas.</p>
              </div>
              <div className={styles.exampleItem}>
                <p className={styles.exampleEmoji}>🐶🍕✈️</p>
                <p>My dog, pizza, and travel tell you a lot about me.</p>
              </div>
            </div>
          </div>
        )}

        {game.title === "Emoji Check-In" && (
          <div className={styles.section}>
            <h2>Emoji Check-In Prompts</h2>
            <ul>
              <li>Choose one emoji for your energy right now.</li>
              <li>Choose one emoji for your focus today.</li>
              <li>Choose one emoji for what you need from this meeting.</li>
              <li>Choose one emoji for how your week is going.</li>
              <li>Choose one emoji for the kind of support that would help you participate.</li>
            </ul>
          </div>
        )}

        {/* Name Game variations live only in game-page-extras (avoid second Variations H2). */}

        {game.title === "Virtual Background Story" && (
          <div className="flex justify-center my-6">
            <div className="relative overflow-hidden rounded-lg max-w-md w-full">
              <img
                src="/img/VirtualBackgroundStory_Interaction.jpg"
                alt="icebreakergames Virtual Background Story - Engaging Group Interaction"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}

        {game.title === "Speed Networking" && (
          <div className="flex justify-center my-6">
            <div className="relative overflow-hidden rounded-lg max-w-md w-full">
              <img
                src="/img/SpeedNetworking-Interaction.jpg"
                alt="Speed Networking | Ice Breaker Games - Interaction"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Scene image for Human Bingo */}
        {game.title === "Human Bingo" && (
          <div className="flex justify-center my-4">
            <div className="relative overflow-hidden rounded-lg max-w-sm w-full shadow-sm">
              <img
                src="/img/Human-Bingo-Scene.png"
                alt="Human Bingo | Ice Breaker Games - Playing Scene"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Second scene image for Two Truths and a Lie */}
        {game.title === "Two Truths and a Lie" && (
          <div className="flex justify-center my-6">
            <div className="relative overflow-hidden rounded-lg max-w-md w-full">
              <img
                src="/img/Two-Truths-and-a-Lie2.png"
                alt="Two Truths and a Lie | Ice Breaker Games - Example Statements"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Content image for Find Your Match */}
        {game.title === "Find Your Match" && (
          <div className="flex justify-center my-6">
            <div className="relative overflow-hidden rounded-lg max-w-md w-full">
              <img
                src="/img/find-your-match-pairs.png"
                alt="Find Your Match | Ice Breaker Games - Participants showing matching cards and laughing together during ice breaker activity"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}

        {game.title === "Human Bingo" && (
          <div className={styles.section}>
            <h3>Facilitation notes for Human Bingo</h3>
            <ul>
              <li>Print more cards than people so mingling never stalls</li>
              <li>Rewrite invasive squares before the event</li>
              <li>Call a soft mid-point so late finishers are not shamed</li>
              <li>Celebrate multiple lines—not a single winner stampede</li>
              <li>Seed agenda pairs from card initials when you want a working follow-on</li>
            </ul>
          </div>
        )}

        {game.title === "Find Your Match" && (
          <div className={styles.section}>
            <h3>Benefits of Find Your Match as an Ice Breaker Game</h3>
            <ul>
              <li>Find Your Match encourages natural conversation and movement among participants</li>
              <li>This ice breaker game is perfect for groups of 10-50 people, ideal for networking events</li>
              <li>Find Your Match helps participants learn names quickly through active interaction</li>
              <li>As an ice breaker game, Find Your Match creates a fun, memorable experience for first meetings</li>
              <li>Find Your Match works well with diverse groups, making it easy for everyone to participate equally</li>
              <li>The famous pairs theme adds a playful element that reduces social anxiety and awkwardness</li>
            </ul>
          </div>
        )}

        
{game.tags.length > 0 && (
          <section className={styles.section}>
            <h2>Tags</h2>
            <div className={styles.tags}>
              {game.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        <GamePageExtras slug={game.slug} />

        <RelatedGames
          items={relatedGames}
          intro={`Looking for more ${game.category.toLowerCase()} activities? Try another game, then keep browsing the full library.`}
          browseHref={
            game.title === "Human Knot"
              ? "/games-like-the-human-knot"
              : game.title === "Human Bingo"
                ? "/games-like-human-bingo"
                : game.title === "Chat Waterfall"
                  ? "/virtual-icebreaker-games"
                  : game.title === "The Name Game"
                    ? "/name-game-icebreakers"
                    : "/games"
          }
          browseLabel={
            game.title === "Human Knot"
              ? "Browse all games like the Human Knot"
              : game.title === "Human Bingo"
                ? "Browse all games like Human Bingo"
                : game.title === "Chat Waterfall"
                  ? "Browse virtual ice breaker games"
                  : game.title === "The Name Game"
                    ? "Browse name game icebreakers"
                    : "Browse all ice breaker games"
          }
        />

        {game.title === "Human Knot" ||
        game.title === "Human Bingo" ||
        game.title === "Chat Waterfall" ||
        game.title === "The Name Game" ? (
          <div className={styles.related}>
            <h3>
              {game.title === "The Name Game"
                ? "Related teen & student guides"
                : game.title === "Human Knot"
                  ? "More guides like the Human Knot"
                  : game.title === "Human Bingo"
                    ? "More guides like Human Bingo"
                    : "Virtual icebreaker guides"}
            </h3>
            <div className={styles.relatedGrid}>
              {game.title === "Human Knot" ? (
                <>
                  <a href="/games-like-the-human-knot" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Games like the Human Knot</div>
                    <div className={styles.relatedLinkDesc}>12 team-building alternatives with rules</div>
                  </a>
                  <a href="/icebreaker-games-for-teens" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Ice breaker games for teens</div>
                    <div className={styles.relatedLinkDesc}>Classroom and club openers with safety notes</div>
                  </a>
                  <a href="/icebreaker-games-for-youth-group" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Youth group icebreakers</div>
                    <div className={styles.relatedLinkDesc}>Age-appropriate physical and social games</div>
                  </a>
                </>
              ) : null}
              {game.title === "Human Bingo" ? (
                <>
                  <a href="/games-like-human-bingo" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Games like Human Bingo</div>
                    <div className={styles.relatedLinkDesc}>12 networking alternatives with rules and comparisons</div>
                  </a>
                  <a href="/icebreaker-games-for-teens" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Ice breaker games for teens</div>
                    <div className={styles.relatedLinkDesc}>Classroom and club mixers with safety notes</div>
                  </a>
                  <a href="/icebreaker-games-for-youth-group" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Youth group icebreakers</div>
                    <div className={styles.relatedLinkDesc}>Age-appropriate games for youth nights</div>
                  </a>
                </>
              ) : null}
              {game.title === "Chat Waterfall" ? (
                <>
                  <a href="/virtual-icebreaker-games" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Virtual ice breaker games</div>
                    <div className={styles.relatedLinkDesc}>Online hub with Zoom/Teams warm-ups</div>
                  </a>
                  <a href="/short-virtual-icebreakers" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Short virtual icebreakers</div>
                    <div className={styles.relatedLinkDesc}>5-minute warm-ups that respect the clock</div>
                  </a>
                </>
              ) : null}
              {game.title === "The Name Game" ? (
                <>
                  <a href="/icebreaker-games-for-teens" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Ice breaker games for teens</div>
                    <div className={styles.relatedLinkDesc}>14 classroom and club openers with safety notes</div>
                  </a>
                  <a href="/blog/icebreaker-games-for-students" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Icebreaker games for students</div>
                    <div className={styles.relatedLinkDesc}>Teacher-focused picks by scenario</div>
                  </a>
                  <a href="/icebreaker-games-for-youth-group" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Youth group icebreakers</div>
                    <div className={styles.relatedLinkDesc}>Retreat and youth-night openers</div>
                  </a>
                  <a href="/icebreaker-games-for-small-groups" className={styles.relatedLink}>
                    <div className={styles.relatedLinkTitle}>Small group icebreakers</div>
                    <div className={styles.relatedLinkDesc}>Best formats for circles of 4–12</div>
                  </a>
                </>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

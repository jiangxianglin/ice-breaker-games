import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "How We Choose Icebreaker Games";
const description =
  "Editorial checklist we use to publish icebreakers: pass rules, honest timing, scene fit, and when a game is not ready for the library.";
const canonical = "https://www.icebreakergames.site/how-we-choose-icebreakers";
const ogImage = "https://www.icebreakergames.site/img/Hero.png";
const datePublished = "2026-09-16";
const dateModified = "2026-09-16";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title,
    description,
    siteName: "Ice Breaker Games",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "how-we-choose-icebreakers editorial desk" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished,
  dateModified,
  author: { "@type": "Organization", name: "Ice Breaker Games Editorial Team" },
  publisher: { "@type": "Organization", name: "Ice Breaker Games" },
  mainEntityOfPage: canonical,
};

export default function HowWeChooseIcebreakersPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="underline underline-offset-2">
          Home
        </Link>
        <span> / </span>
        <span>How we choose icebreakers</span>
      </nav>

      <h1 className="mb-4 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mb-2 text-sm text-muted-foreground">
        By the Ice Breaker Games editorial team · Updated {dateModified}
      </p>
      <p className="mb-8 text-lg text-muted-foreground">
        This page is our public selection method. We use it when we write a game guide, reject a
        prompt list, or decide a page is too thin to keep. It is not a personality quiz and it is
        not a claim about traffic or “proven ROI.”
      </p>

      <figure className="mb-10">
        <Image
          src="/img/Hero.png"
          alt="how-we-choose-icebreakers — facilitators comparing activity cards on a table"
          width={1200}
          height={630}
          className="h-auto w-full rounded-xl"
        />
        <figcaption className="mt-2 text-sm text-muted-foreground">
          We score a game the way a facilitator would: can a stranger run it from the page?
        </figcaption>
      </figure>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">The five-minute run test</h2>
        <p>
          A page is ready when a new facilitator can start the activity in about five minutes of
          reading. That means players, duration, materials, steps, a pass rule, and at least one
          variation for a constrained room (virtual, seated, or large). If those pieces are missing,
          we treat the URL as unfinished—even if the title is catchy.
        </p>
        <p>
          Ice Breaker Games is a free guide library, not a live multiplayer product and not a paid
          workspace. The test is about runnable instructions, not about software features we do not
          ship. Browse the{" "}
          <Link href="/games" className="font-medium text-foreground underline underline-offset-2">
            games library
          </Link>{" "}
          to see the format we aim for on every slug.
        </p>
      </section>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">PASS: our safety filter</h2>
        <p>
          PASS is the acronym we use in editorial review. If a game fails one letter, we rewrite it
          or we do not publish the risky version as the default.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong className="text-foreground">P — Pass is allowed.</strong> People can skip a
            prompt, sit out a round, or use a smaller motion. We write that in the brief, not as a
            whispered aside.
          </li>
          <li>
            <strong className="text-foreground">A — Age and setting fit.</strong> School, church,
            and work each have different “do not ask” lists. A party prompt is not a standup prompt.
          </li>
          <li>
            <strong className="text-foreground">S — Status is not scored.</strong> We avoid games
            whose fun depends on mocking a body, accent, faith, income, or family situation.
          </li>
          <li>
            <strong className="text-foreground">S — Short disclosure.</strong> Openers should not
            demand trauma, dating history, or salary stories. If a game needs a deep share, we label
            it as a later-session activity, not a first-minute icebreaker.
          </li>
        </ul>
        <p>
          For rooms that still feel brittle, start with a check-in from{" "}
          <Link
            href="/icebreaker-games-for-meetings"
            className="font-medium text-foreground underline underline-offset-2"
          >
            ice breaker games for meetings
          </Link>{" "}
          rather than a high-disclosure mixer.
        </p>
      </section>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Honest clocks</h2>
        <p>
          We write durations as wall-clock time, including the brief. A “5-minute icebreaker” that
          needs a 4-minute explanation is an 9-minute icebreaker. Large groups get extra time for
          acoustics and for repeating instructions once.
        </p>
        <p>
          If a format only works when you split the room, the page must say so. Reciting 25 names in
          a growing list is a common failure mode; see{" "}
          <Link
            href="/games/motion-name-game"
            className="font-medium text-foreground underline underline-offset-2"
          >
            Motion Name-Game
          </Link>{" "}
          for how we chunk that problem instead of pretending the classic circle scales.
        </p>
        <p>
          Virtual meetings get a second clock: mute/unmute tax. Chat-first variants exist because
          gallery-view monologues eat the agenda. Short options live on{" "}
          <Link
            href="/short-virtual-icebreakers"
            className="font-medium text-foreground underline underline-offset-2"
          >
            short virtual icebreakers
          </Link>
          .
        </p>
      </section>

      <figure className="mb-10">
        <Image
          src="/img/icebreaker-games-for-meetings-hero.jpg"
          alt="how-we-choose-icebreakers meeting circle with a visible timer"
          width={1200}
          height={800}
          className="h-auto w-full rounded-xl"
        />
        <figcaption className="mt-2 text-sm text-muted-foreground">
          Time-box the opener in the room, not only on the page.
        </figcaption>
      </figure>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Scene fit beats novelty</h2>
        <p>
          We would rather publish a familiar check-in with a precise script than a novel game that
          only works if everyone already trusts each other. Scene pages exist so the same mechanic
          can be constrained: work, Zoom, teens, church small groups.
        </p>
        <p>
          Example: a holiday mixer can be a tradition contest or a preference map. We publish{" "}
          <Link
            href="/games/christmas-connection"
            className="font-medium text-foreground underline underline-offset-2"
          >
            Christmas Connection
          </Link>{" "}
          as the latter, with an inclusive prompt deck, because the former fails mixed-faith offices.
        </p>
        <p>
          Example: a collage can be a costume party or a working agreement.{" "}
          <Link
            href="/games/team-superpower-collage"
            className="font-medium text-foreground underline underline-offset-2"
          >
            Team Superpower Collage
          </Link>{" "}
          is written as identity-plus-kryptonite, and we tell facilitators not to use it as a
          first-minute opener for strangers.
        </p>
      </section>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Team stage is a heuristic, not a score</h2>
        <p>
          Facilitators often borrow Tuckman&apos;s forming / storming / norming / performing labels
          as a shorthand for “how much history this group already has.” We treat that as a planning
          heuristic, not as a measured diagnosis of your team. The original summary is on{" "}
          <a
            href="https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development"
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium text-foreground underline underline-offset-2"
          >
            Wikipedia&apos;s page on Tuckman&apos;s stages of group development
          </a>
          . We do not claim that an icebreaker moves a group from one stage to another.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong className="text-foreground">Little shared history (forming-ish):</strong> names,
            preferences, and check-ins. Avoid identity collages and deep values work.
          </li>
          <li>
            <strong className="text-foreground">Friction is high (storming-ish):</strong> skip
            competitive tournaments and sarcasm games. Use optional check-ins or skip the opener
            entirely if the meeting is a conflict conversation.
          </li>
          <li>
            <strong className="text-foreground">Stable working group:</strong> you can use a
            behavior collage or a process debrief. You still time-box it.
          </li>
        </ul>
        <p>
          General facilitation background on why structured openers exist is summarized in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Icebreaker_(facilitation)"
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium text-foreground underline underline-offset-2"
          >
            Wikipedia, “Icebreaker (facilitation)”
          </a>
          . Our contribution is the PASS filter and the five-minute run test above—not a new
          psychology theory.
        </p>
      </section>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">What we will not invent</h2>
        <p>
          We do not invent user interviews, win rates, or “Harvard says your team will be 25%
          better.” When we cite facilitation practice, we link a source on the page. Homepage
          testimonials on this site are display copy, not verified case studies—do not treat them as
          evidence in this method.
        </p>
        <p>
          We also do not invent games that are not in the library. If a comparison page says “try
          X,” X has a real <code className="text-foreground">/games/[slug]</code>.
        </p>
      </section>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Editorial backlog (how thin pages get retired)</h2>
        <p>
          A game URL that is only a title, a category chip, and a five-line step list is a stub. Our
          fix is not to spawn a second URL with the same intent. The fix is to add unique run
          support: a script, mistakes we have seen in similar formats, and one variant marked as
          site-original so the page is not a synonym of every other how-to.
        </p>
        <p>
          If two slugs teach the same mechanic with no information gain, we keep the stronger URL
          and turn the weaker one into a redirect or a short pointer. That is how we avoid doorway
          pages while still covering long-tail searches.
        </p>
        <p>
          When an opener should not run at all, use{" "}
          <Link
            href="/when-to-skip-an-icebreaker"
            className="font-medium text-foreground underline underline-offset-2"
          >
            when to skip an icebreaker
          </Link>
          . Choosing nothing is a valid facilitation move.
        </p>
      </section>

      <section className="mb-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Quick chooser we actually use</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr className="border-b text-left text-foreground">
                <th className="py-2 pr-3">Constraint</th>
                <th className="py-2 pr-3">Default move</th>
                <th className="py-2">Skip</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-3">3–6 minutes, recurring meeting</td>
                <td className="py-2 pr-3">One-word or weather check-in</td>
                <td className="py-2">Growing name lists</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-3">New group, names unknown</td>
                <td className="py-2 pr-3">Chunked name game or Chainlink</td>
                <td className="py-2">Identity collages</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-3">30+ adults, poor acoustics</td>
                <td className="py-2 pr-3">Zones, tournaments, or seated polls</td>
                <td className="py-2">One circle, one ball of yarn</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-3">Zoom, cameras optional</td>
                <td className="py-2 pr-3">Chat-first emoji or riddle</td>
                <td className="py-2">Forced unmutes</td>
              </tr>
              <tr>
                <td className="py-2 pr-3">Visitors / mixed faith</td>
                <td className="py-2 pr-3">Preference prompts, pass rule</td>
                <td className="py-2">Insider tradition quizzes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Related guides</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link href="/icebreaker-games-for-work" className="text-foreground underline underline-offset-2">
              Icebreaker games for work
            </Link>
          </li>
          <li>
            <Link href="/virtual-icebreaker-games" className="text-foreground underline underline-offset-2">
              Virtual ice breaker games
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-foreground underline underline-offset-2">
              About Ice Breaker Games
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

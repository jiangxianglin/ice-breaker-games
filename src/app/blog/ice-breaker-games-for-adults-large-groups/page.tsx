import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Metadata } from "next";

const SLUG = "ice-breaker-games-for-adults-large-groups";

const HIGH_ENERGY_GAMES = [
  {
    title: "Rock Paper Scissors Tournament",
    slug: "rock-paper-scissors-tournament",
    bestFor: "High-energy openers that wake up a big crowd",
    groupSize: "20–200+ adults",
    why: "Easy to explain, scales to very large rooms, and creates a shared, memorable moment in minutes.",
  },
  {
    title: "Train Wreck",
    slug: "train-wreck",
    bestFor: "Large groups who need to move, laugh, and mix",
    groupSize: "20–60 adults",
    why: "Simple rules, lots of laughter, and ideal for mixing people who do not know each other well.",
  },
  {
    title: "Human Knot",
    slug: "human-knot",
    bestFor: "Retreats and team-building days with physical space",
    groupSize: "16–50 adults (circles of 8–12)",
    why: "A powerful metaphor for collaboration and problem solving that people remember.",
  },
];

const NETWORKING_GAMES = [
  {
    title: "Human Bingo",
    slug: "human-bingo",
    bestFor: "Large networking events and welcome sessions",
    groupSize: "30–150 adults",
    why: "Gives structure to mingling and helps people discover fun facts about each other quickly.",
  },
  {
    title: "Icebreaker Bingo",
    slug: "icebreaker-bingo",
    bestFor: "Orientations and cross-team mixers",
    groupSize: "30–150 adults",
    why: "Highly customizable prompts make it easy to match your event theme or culture.",
  },
  {
    title: "Speed Networking",
    slug: "speed-networking",
    bestFor: "Professional networking where you want many 1:1 conversations",
    groupSize: "30–100 adults",
    why: "Efficient format that is introvert-friendly and works well at conferences or internal events.",
  },
  {
    title: "Line-Up",
    slug: "line-up",
    bestFor: "Big rooms where you want movement without complex rules",
    groupSize: "30–100 adults",
    why: "Zero materials and simple silent-sort prompts make it a flexible choice for many audiences.",
  },
];

const SEATED_GAMES = [
  {
    title: "Beach Ball Q&A",
    slug: "beach-ball-qa",
    bestFor: "Large seated audiences and all-hands meetings",
    groupSize: "30–150 adults",
    why: "Adds just enough movement and unpredictability while keeping people in their seats.",
  },
  {
    title: "This or That Questions",
    slug: "this-or-that-questions",
    bestFor: "Quick warm-ups in auditoriums or training rooms",
    groupSize: "30–200 adults",
    why: "Very simple to facilitate and great for getting a quick read on the room’s preferences.",
  },
  {
    title: "Line-Up",
    slug: "line-up",
    bestFor: "Groups that can spare a bit of space at the front or in aisles",
    groupSize: "20–60 adults",
    why: "Creates a visual snapshot of the group’s experience or background and sparks conversation.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === SLUG);

  if (!post) {
    return {
      title: "Large-Group Icebreakers for Adults | 30–100+",
      description: "Icebreaker games for adults in groups of 30–100+: high-energy, networking, and seated options with facilitation tips.",
    };
  }

  const url = `https://www.icebreakergames.site/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url,
      siteName: "Ice Breaker Games",
      images: [
        {
          url: post.image || "/img/Hero.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/img/Hero.png"],
    },
  };
}

export default function AdultsLargeGroupsPage() {
  const post = blogPosts.find((p) => p.slug === SLUG);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      <article className="container mx-auto px-4 py-12 max-w-5xl">
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 font-medium mb-8 group transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg border border-emerald-100 dark:border-emerald-900/40"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-10">
            <div className="flex flex-wrap gap-3 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 text-xs font-semibold rounded-full border border-emerald-100 dark:border-emerald-800/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Running icebreaker games for adults in large groups is challenging. Noise levels rise quickly, shy participants
            disappear into the crowd, and simple instructions suddenly feel complicated when you have 50 people staring at you.
            This guide gives you practical options that really work with crowds of 30–100+ adults.
          </p>
        </header>

        <section className="mb-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Quick selector for large adult groups
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">
            Use this quick guide to choose a starting point for your event. Each option links to games with full, detailed
            instructions.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                High-energy opener needed
              </h3>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-3">
                You want to wake everyone up and get the room buzzing in under 10 minutes.
              </p>
              <ul className="text-xs md:text-sm text-emerald-800 dark:text-emerald-200 space-y-1">
                <li>
                  <Link href="/games/rock-paper-scissors-tournament" className="underline font-medium">
                    Rock Paper Scissors Tournament
                  </Link>
                </li>
                <li>
                  <Link href="/games/train-wreck" className="underline font-medium">
                    Train Wreck
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                Networking and mingling
              </h3>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-3">
                You want adults to meet many new people and have structured conversations.
              </p>
              <ul className="text-xs md:text-sm text-emerald-800 dark:text-emerald-200 space-y-1">
                <li>
                  <Link href="/games/human-bingo" className="underline font-medium">
                    Human Bingo
                  </Link>
                </li>
                <li>
                  <Link href="/games/icebreaker-bingo" className="underline font-medium">
                    Icebreaker Bingo
                  </Link>
                </li>
                <li>
                  <Link href="/games/speed-networking" className="underline font-medium">
                    Speed Networking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/60 dark:bg-emerald-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                Mostly seated audience
              </h3>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-3">
                You are in a lecture hall or ballroom where people cannot move much.
              </p>
              <ul className="text-xs md:text-sm text-emerald-800 dark:text-emerald-200 space-y-1">
                <li>
                  <Link href="/games/beach-ball-qa" className="underline font-medium">
                    Beach Ball Q&amp;A
                  </Link>
                </li>
                <li>
                  <Link href="/games/this-or-that-questions" className="underline font-medium">
                    This or That Questions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            High-energy movement games for large groups
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
            These games are ideal when you have enough space for people to move safely and want to quickly raise the energy
            in the room.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {HIGH_ENERGY_GAMES.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Networking and mingling games
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
            Use these activities when your priority is to help adults meet each other, build connections, and have meaningful
            conversations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {NETWORKING_GAMES.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Seated or low-movement games for large rooms
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
            When your audience is mostly seated in a lecture hall or ballroom, these options add interaction without requiring
            people to stand up for long.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {SEATED_GAMES.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <section className="mb-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            A 50-person run sheet you can copy
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
            This is an editorial template, not a claim about a specific client event. Use it when
            you have about 50 adults, a microphone, and 12 minutes before a keynote or a working
            session.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>
              <strong>0:00–1:00 — Brief.</strong> State the pass rule and the physical constraint
              (“stay in your third of the room”). Repeat once.
            </li>
            <li>
              <strong>1:00–8:00 — One mechanic only.</strong> Tournament, bingo mingle, or seated
              this-or-that. Do not stack two games.
            </li>
            <li>
              <strong>8:00–10:00 — Harvest.</strong> Two volunteer sentences or a show of hands. No
              full-room share-out.
            </li>
            <li>
              <strong>10:00–12:00 — Bridge.</strong> One sentence that ties the opener to the agenda
              (“you already practiced pairing—use that for the table discussion”).
            </li>
          </ol>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-4">
            If acoustics are poor, skip mingling and run seated polls. Preference mixers like{" "}
            <Link href="/games/christmas-connection" className="text-emerald-700 dark:text-emerald-300 underline font-medium">
              Christmas Connection
            </Link>{" "}
            need zones above ~30 people or they become a shout.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Failure modes we write against
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>
              <strong>One circle for 80 people.</strong> Yarn webs and growing name lists collapse.
              Split, zone, or switch to a stage-led poll.
            </li>
            <li>
              <strong>Instructions without a demo.</strong> Adults will wait. Model the move once
              with a volunteer before you say “go.”
            </li>
            <li>
              <strong>Prize culture.</strong> Cheap prizes turn mixers into a rush for the front.
              Use optional recognition or skip prizes.
            </li>
            <li>
              <strong>Forced disclosure.</strong> Large rooms amplify embarrassment. Keep prompts at
              preference level. If the topic is heavy,{" "}
              <Link href="/when-to-skip-an-icebreaker" className="text-emerald-700 dark:text-emerald-300 underline font-medium">
                skip the icebreaker
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            How this page relates to the rest of the site
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
            Use this guide when headcount is the constraint. Use{" "}
            <Link href="/icebreaker-games-for-work" className="text-emerald-700 dark:text-emerald-300 underline font-medium">
              icebreaker games for work
            </Link>{" "}
            when the constraint is professional tone, and{" "}
            <Link href="/how-we-choose-icebreakers" className="text-emerald-700 dark:text-emerald-300 underline font-medium">
              how we choose icebreaker games
            </Link>{" "}
            when you are deciding whether a format belongs on the agenda at all.
          </p>
        </section>

        <section className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Final thoughts
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
            Icebreaker games for adults in large groups do not have to be chaotic or childish. With the right activities and
            clear facilitation, you can turn a room of dozens or hundreds of people into an energized, connected crowd.
          </p>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
            Choose one or two of the games above that match your space, time, and event goals. For smaller teams, remote
            settings, or mixed-age groups, explore our main guide to{" "}
            <Link href="/blog/ice-breaker-games-for-adults" className="text-emerald-700 dark:text-emerald-300 underline font-medium">
              icebreaker games for adults
            </Link>{" "}
            and our full collection of{" "}
            <Link href="/games" className="text-emerald-700 dark:text-emerald-300 underline font-medium">
              ice breaker games
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}

interface CardGame {
  title: string;
  slug: string;
  bestFor: string;
  groupSize: string;
  why: string;
}

function GameCard({ game }: { game: CardGame }) {
  return (
    <div className="group rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/95 dark:bg-gray-900/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5 flex flex-col">
      <div className="flex-1 space-y-2">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
          <Link
            href={`/games/${game.slug}`}
            className="inline-flex items-center gap-1 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            {game.title}
            <svg className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </h3>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Best for • {game.bestFor}
        </p>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-700 dark:text-gray-300">
          👥 Group size: {game.groupSize}
        </span>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-2">{game.why}</p>
      </div>
      <div className="mt-4">
        <Link
          href={`/games/${game.slug}`}
          className="inline-flex items-center text-sm font-medium text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-100 transition-colors"
        >
          View full game details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

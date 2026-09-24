import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ice Breaker Games | Publisher & Standards",
  description:
    "Who publishes Ice Breaker Games, how guides are written and reviewed, and how to contact the site with corrections.",
  alternates: {
    canonical: "https://www.icebreakergames.site/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.icebreakergames.site/#organization",
      name: "Ice Breaker Games",
      url: "https://www.icebreakergames.site",
      email: "support@icebreakergames.site",
      publisher: { "@id": "https://www.icebreakergames.site/about#elena-hart" },
    },
    {
      "@type": "Person",
      "@id": "https://www.icebreakergames.site/about#elena-hart",
      name: "Elena Hart",
      url: "https://www.icebreakergames.site/about",
      jobTitle: "Publisher and editor",
      worksFor: { "@id": "https://www.icebreakergames.site/#organization" },
      email: "support@icebreakergames.site",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.icebreakergames.site/about",
      url: "https://www.icebreakergames.site/about",
      name: "About Ice Breaker Games",
      isPartOf: { "@id": "https://www.icebreakergames.site/#organization" },
      about: { "@id": "https://www.icebreakergames.site/about#elena-hart" },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <h1 className="mb-4 text-4xl font-bold tracking-tight">About Ice Breaker Games</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Ice Breaker Games is an independently published library of facilitator-ready icebreaker
        activities for meetings, virtual teams, classrooms, and youth groups.
      </p>

      <section className="mb-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Who publishes this site</h2>
        <p>
          <strong className="text-foreground">Elena Hart</strong> publishes and maintains Ice
          Breaker Games. Elena Hart is the publishing name used on this site’s bylines and
          editorial notes—not a celebrity profile or a third-party interview subject. There is no
          separate social “author brand” page; accountability stays on this About page and the public
          standards linked below.
        </p>
        <p>
          The library exists for a practical reason: too many icebreaker lists online are titles
          without players, timing, materials, or a clear “how to open the room”—so a manager or
          teacher cannot actually run them in the next five minutes.
        </p>
        <p>
          Each guide is written to be executable: group size, duration, steps, variations,
          facilitator scripts, and notes on when to skip. The editorial bar is psychological safety
          and honest timing—not novelty for its own sake.
        </p>
        <p>
          Corrections, sourcing questions, and partnership ideas go to{" "}
          <a
            href="mailto:support@icebreakergames.site"
            className="font-medium text-foreground underline underline-offset-2"
          >
            support@icebreakergames.site
          </a>
          .
        </p>
      </section>

      <section className="mb-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">What we publish</h2>
        <p>
          We publish free activity guides and scenario pages (meetings, remote teams, youth groups,
          and “games like…” comparisons). Each guide aims to be practical enough to run immediately:
          players, time, materials, steps, variations, and facilitator scripts.
        </p>
        <p>
          Browse the{" "}
          <Link href="/games" className="font-medium text-foreground underline underline-offset-2">
            games library
          </Link>
          , start with{" "}
          <Link
            href="/virtual-icebreaker-games"
            className="font-medium text-foreground underline underline-offset-2"
          >
            virtual icebreaker games
          </Link>
          , or read the{" "}
          <Link href="/blog" className="font-medium text-foreground underline underline-offset-2">
            blog
          </Link>
          .
        </p>
      </section>

      <section className="mb-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">How content is chosen and reviewed</h2>
        <p>
          Before a guide goes live, it is checked against a public editorial checklist: pass rules,
          honest timing, scene fit, inclusion, and psychological safety. We also document when an
          activity should be skipped. When a page leans on an outside facilitation library or
          reference, we link it. Many game pages instead list related guides from this library under
          a Related guides section—those are internal notes, not third-party citations.
        </p>
        <p>
          The checklist is{" "}
          <Link
            href="/how-we-choose-icebreakers"
            className="font-medium text-foreground underline underline-offset-2"
          >
            how we choose icebreaker games
          </Link>
          , including{" "}
          <Link
            href="/when-to-skip-an-icebreaker"
            className="font-medium text-foreground underline underline-offset-2"
          >
            when to skip an icebreaker
          </Link>
          . Bylines on guides and blog posts that say Elena Hart refer to the same publisher named
          above—not a multi-person newsroom inventing credentials.
        </p>
      </section>

      <section className="space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p>
          Questions, corrections, or partnership ideas? Visit our{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline underline-offset-2"
          >
            contact page
          </Link>{" "}
          or email{" "}
          <a
            href="mailto:support@icebreakergames.site"
            className="font-medium text-foreground underline underline-offset-2"
          >
            support@icebreakergames.site
          </a>
          .
        </p>
      </section>
    </div>
  );
}

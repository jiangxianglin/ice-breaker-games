import Link from "next/link";
import type { GamePageExtrasContent } from "@/data/game-page-extras";
import { getGamePageExtras } from "@/data/game-page-extras";
import styles from "./game-detail.module.css";

type GamePageExtrasProps = {
  slug: string;
  /** When true, skip FAQ block (e.g. emoji already has FAQ in GameDetail) */
  skipFaq?: boolean;
};

function QuoteBlock({
  quote,
}: {
  quote: NonNullable<GamePageExtrasContent["quote"]>;
}) {
  const links = quote.citeLinks;
  return (
    <blockquote className={styles.quote}>
      <p>{quote.text}</p>
      <cite className={styles.cite}>
        — {quote.citeLead ?? "Elena Hart"}{" "}
        {links.map((link, index) => {
          let sep = "";
          if (index > 0) {
            if (links.length === 2) sep = " and ";
            else if (index === links.length - 1) sep = ", and ";
            else sep = ", ";
          }
          return (
            <span key={link.href}>
              {sep}
              <a href={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            </span>
          );
        })}
        .
      </cite>
    </blockquote>
  );
}

function ExtrasBody({
  extras,
  skipFaq,
}: {
  extras: GamePageExtrasContent;
  skipFaq?: boolean;
}) {
  return (
    <>
      {extras.howToSteps && extras.howToSteps.length > 0 ? (
        <section className={styles.section}>
          <h2>How to facilitate (step-by-step)</h2>
          <ol>
            {extras.howToSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}.</strong> {step.body}
              </li>
            ))}
          </ol>
          {extras.quote ? <QuoteBlock quote={extras.quote} /> : null}
          {extras.quote && extras.sources?.some((s) => s.external) ? (
            <p className={styles.citeInline}>
              Compare related short openers in{" "}
              <a
                href="https://www.sessionlab.com/library/icebreaker"
                rel="noopener noreferrer"
                target="_blank"
              >
                SessionLab&apos;s icebreaker library
              </a>
              .
            </p>
          ) : null}
        </section>
      ) : extras.quote ? (
        <section className={styles.section}>
          <QuoteBlock quote={extras.quote} />
        </section>
      ) : null}

      {extras.variations && extras.variations.length > 0 ? (
        <section className={styles.section}>
          <h2>Variations</h2>
          <div className={styles.variationGrid}>
            {extras.variations.map((item) => (
              <div key={item.title} className={styles.variationItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {extras.rulesTiming && extras.rulesTiming.length > 0 ? (
        <section className={styles.section}>
          <h2>Rules &amp; timing</h2>
          <ul>
            {extras.rulesTiming.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {extras.whyItWorks ? (
        <section className={styles.section}>
          <h2>Why this game works (and when it does not)</h2>
          <p>{extras.whyItWorks}</p>
        </section>
      ) : null}

      {extras.facilitatorScript && extras.facilitatorScript.length > 0 ? (
        <section className={styles.section}>
          <h2>Facilitator script</h2>
          <ol>
            {extras.facilitatorScript.map((item) => (
              <li key={item.speaker}>
                <strong>{item.speaker}.</strong> {item.line}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {extras.pitfalls && extras.pitfalls.length > 0 ? (
        <section className={styles.section}>
          <h2>Common mistakes</h2>
          <ul>
            {extras.pitfalls.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.body}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {extras.originalVariant ? (
        <section className={styles.section}>
          <h2>{extras.originalVariant.title}</h2>
          <p>{extras.originalVariant.body}</p>
        </section>
      ) : null}

      {extras.adultsWork ? (
        <section className={styles.section}>
          <h2>For adults, work &amp; meetings</h2>
          <p>{extras.adultsWork}</p>
        </section>
      ) : null}

      {!skipFaq && extras.faqs.length > 0 ? (
        <section className={styles.section} aria-labelledby="game-extras-faq">
          <h2 id="game-extras-faq">Frequently asked questions</h2>
          <div className={styles.faqList}>
            {extras.faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {extras.sources && extras.sources.length > 0 ? (
        <section className={styles.sources} aria-labelledby="game-sources-heading">
          <h2 id="game-sources-heading">
            {extras.sources.some((s) => s.external)
              ? "Sources & further reading"
              : "Related guides"}
          </h2>
          {extras.sourcesIntro ? (
            <p>{extras.sourcesIntro}</p>
          ) : extras.sources.every((s) => !s.external) ? (
            <p>
              More facilitation notes from this library—not external citations.
            </p>
          ) : null}
          <ol>
            {extras.sources.map((source) => (
              <li key={source.href}>
                {source.external ? (
                  <a
                    href={source.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.label}
                  </a>
                ) : (
                  <Link href={source.href}>{source.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </>
  );
}

export function GamePageExtras({ slug, skipFaq }: GamePageExtrasProps) {
  const extras = getGamePageExtras(slug);
  if (!extras) return null;

  const hasBody =
    (extras.howToSteps && extras.howToSteps.length > 0) ||
    (extras.variations && extras.variations.length > 0) ||
    (extras.rulesTiming && extras.rulesTiming.length > 0) ||
    Boolean(extras.adultsWork) ||
    Boolean(extras.whyItWorks) ||
    Boolean(extras.originalVariant) ||
    (extras.facilitatorScript && extras.facilitatorScript.length > 0) ||
    (extras.pitfalls && extras.pitfalls.length > 0) ||
    Boolean(extras.quote) ||
    (extras.sources && extras.sources.length > 0) ||
    (!skipFaq && extras.faqs.length > 0);

  if (!hasBody) return null;

  return <ExtrasBody extras={extras} skipFaq={skipFaq} />;
}

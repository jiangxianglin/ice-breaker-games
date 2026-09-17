import Link from "next/link";
import styles from "./testimonials.module.css";

/**
 * Real editorial trust signals only — never invent named quotes or employer
 * affiliations. Fake Microsoft/Google/etc. testimonials were removed for AdSense policy.
 */
const trustSignals = [
  {
    title: "How we choose games",
    body: "Every published guide is checked for pass rules, honest timing, scene fit, and psychological safety—not just novelty.",
    href: "/how-we-choose-icebreakers",
    label: "Read the checklist",
  },
  {
    title: "When we skip an icebreaker",
    body: "Some activities fail the bar: invasive prompts, humiliation risk, or timing that cannot work in a real meeting. We document those skips.",
    href: "/when-to-skip-an-icebreaker",
    label: "See skip criteria",
  },
  {
    title: "Sources on the page",
    body: "Where we lean on established facilitation practice or reference material, we cite it—SessionLab libraries, Wikipedia topic pages, and our own game guides.",
    href: "/games",
    label: "Browse the library",
  },
];

export function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>Editorial standards</p>
          <h2 id="trust-heading">How we pick what to publish</h2>
          <p>
            No celebrity endorsements—just a public checklist, skip rules, and
            cited sources so facilitators can judge the work for themselves.
          </p>
        </div>

        <div className={styles.list}>
          {trustSignals.map((item) => (
            <article key={item.href} className={styles.item}>
              <h3 className={styles.name}>{item.title}</h3>
              <p className={styles.quote}>{item.body}</p>
              <p className={styles.role}>
                <Link href={item.href} className={styles.trustLink}>
                  {item.label}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

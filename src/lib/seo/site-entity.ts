/**
 * Canonical site entity for GEO / JSON-LD.
 * Full Organization (with sameAs) is emitted once in the root layout.
 * Page-level Article/WebPage schemas should only reference it by @id.
 */

export const SITE_ORIGIN = "https://www.icebreakergames.site";
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

/**
 * External identity / topic anchors (HTTPS only).
 * Add verified LinkedIn / GitHub / Wikidata org pages here when they exist—
 * do not invent profiles.
 */
export const ORGANIZATION_SAME_AS: string[] = [
  "https://en.wikipedia.org/wiki/Icebreaker_(facilitation)",
];

export function getOrganizationNode() {
  return {
    "@type": "Organization" as const,
    "@id": ORGANIZATION_ID,
    name: "Ice Breaker Games",
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject" as const,
      url: `${SITE_ORIGIN}/img/home-hero.jpg`,
    },
    email: "support@icebreakergames.site",
    description:
      "Facilitator-ready icebreaker games and guides for meetings, virtual teams, classrooms, and youth groups.",
    sameAs: ORGANIZATION_SAME_AS,
    contactPoint: {
      "@type": "ContactPoint" as const,
      email: "support@icebreakergames.site",
      contactType: "customer support",
      url: `${SITE_ORIGIN}/contact`,
    },
  };
}

export function getWebsiteNode() {
  return {
    "@type": "WebSite" as const,
    "@id": WEBSITE_ID,
    name: "Ice Breaker Games",
    url: SITE_ORIGIN,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

/** Use inside Article / FAQ / ItemList — do not re-declare Organization fields. */
export function organizationRef() {
  return { "@id": ORGANIZATION_ID };
}

export function websiteRef() {
  return { "@id": WEBSITE_ID };
}

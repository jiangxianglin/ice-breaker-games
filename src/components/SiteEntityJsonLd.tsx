import {
  getOrganizationNode,
  getWebsiteNode,
} from "@/lib/seo/site-entity";

/** Site-wide Organization + WebSite JSON-LD for GEO / knowledge-graph anchoring. */
export function SiteEntityJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    ...getOrganizationNode(),
  };

  const website = {
    "@context": "https://schema.org",
    ...getWebsiteNode(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

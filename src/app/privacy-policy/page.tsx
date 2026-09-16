import type { Metadata } from "next";

const title = "Privacy Policy | Ice Breaker Games";
const description =
  "How Ice Breaker Games collects data, uses cookies, and discloses Google Analytics and advertising (including interest-based ads).";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.icebreakergames.site/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://www.icebreakergames.site/privacy-policy",
    title,
    description,
    siteName: "Ice Breaker Games",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: September 16, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Ice Breaker Games (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates
            https://www.icebreakergames.site. This Privacy Policy explains how we collect, use, and
            share information when you visit the site. Browsing the game library does not require an
            account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
            <li>
              <strong>Information you send us:</strong> If you email{" "}
              <a href="mailto:support@icebreakergames.site" className="underline underline-offset-2">
                support@icebreakergames.site
              </a>{" "}
              or use the contact page, we receive the address and message you provide. We do not
              operate a public user registration system.
            </li>
            <li>
              <strong>Technical data:</strong> Our hosting provider may log IP address, browser
              type, operating system, timestamps, and referring URLs as part of serving pages
              securely.
            </li>
            <li>
              <strong>Analytics:</strong> We use Google Analytics to understand which pages are
              used. Analytics may set cookies or similar identifiers.
            </li>
            <li>
              <strong>We do not request precise geolocation</strong> (GPS or similar device
              location APIs) in our site code.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use of Your Information</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
            <li>Operate, secure, and improve the website</li>
            <li>Answer support mail</li>
            <li>Understand aggregate usage (which guides are opened)</li>
            <li>Serve and measure advertising if Google AdSense or similar ads are enabled</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies, Analytics, and Advertising</h2>
          <p className="text-muted-foreground mb-4">
            Cookies are small files stored on your device. You can block cookies in your browser;
            some features (including analytics and ads) may not work as intended.
          </p>
          <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
          <p className="text-muted-foreground mb-4">
            Google Analytics collects usage data on our behalf. Google&apos;s processing is described
            in Google&apos;s own privacy documentation. We configure page views in our site code; we
            do not intentionally send email addresses or phone numbers to Analytics as user IDs.
          </p>
          <h3 className="text-xl font-semibold mb-3">Google AdSense and interest-based ads (IBA)</h3>
          <p className="text-muted-foreground mb-4">
            We may use Google AdSense to display ads. Third parties, including Google, may use
            cookies, web beacons, or similar technologies to collect information about your visits
            to this and other sites in order to show ads, including interest-based advertising.
            Google&apos;s use of advertising cookies is described in Google&apos;s Advertising Privacy
            documentation. You can opt out of personalized Google ads through Google&apos;s Ads
            Settings.
          </p>
          <p className="text-muted-foreground mb-4">
            We do not merge advertising identifiers with the contents of support emails, and we do
            not intend to pass personally identifiable information (such as name, email, or phone
            number) in ad request URLs or as custom targeting parameters.
          </p>
          <p className="text-muted-foreground mb-4">
            If we enable personalized ads for visitors in the European Economic Area or the United
            Kingdom, we will deploy a consent mechanism that meets Google&apos;s EU user consent
            policy (a certified consent management platform where required). Until that is in
            place, ads—if shown—should not rely on unauthorized personalization for those regions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Your Information</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
            <li>
              <strong>Service providers:</strong> Hosting, analytics, and advertising partners
              process data to provide those services.
            </li>
            <li>
              <strong>Legal:</strong> We may disclose information if required by law or to protect
              the site, our users, or others.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Children</h2>
          <p className="text-muted-foreground mb-4">
            This site is written for facilitators, managers, teachers, and youth leaders. We do not
            knowingly collect personal information from children under 13. We do not design the
            site as directed to children under 13. If you believe a child sent us personal
            information, email support and we will delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="text-muted-foreground mb-4">
            Guides may link to other websites. Their privacy practices are their own.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Security and Retention</h2>
          <p className="text-muted-foreground mb-4">
            We use standard hosting and transport security (HTTPS). No method of transmission is
            perfectly secure. Support emails are retained as needed to answer you and then as
            required for legitimate business or legal reasons.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes</h2>
          <p className="text-muted-foreground mb-4">
            We will post updates on this page and change the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
          <p className="text-muted-foreground mb-4">
            Privacy questions:{" "}
            <a href="mailto:support@icebreakergames.site" className="underline underline-offset-2">
              support@icebreakergames.site
            </a>{" "}
            or the{" "}
            <a href="/contact" className="underline underline-offset-2">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

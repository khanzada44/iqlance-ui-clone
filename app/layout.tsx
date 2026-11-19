import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ZendeskWidget from "../app/components/ZendeskWidget/ZendeskWidget";

const SITE_URL = "https://devappgrid.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DevApp Grid | Mobile App & Software Development Company",
  description:
    "DevApp Grid builds mobile apps, web platforms and custom software for businesses across the USA. Get a free consultation and project estimate.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "DevApp Grid",
    locale: "en_US",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "DevApp Grid" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Sirf woh profiles rakhein jo asal mein maujood hain (har link browser mein khol kar check karein)
const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/devapp-grid",
  "https://www.facebook.com/devappgrid",
  "https://www.instagram.com/devappgrids",
  "https://themanifest.com/company/devapp-grid",
  // "https://clutch.co/profile/devapp-grid",       // profile ho to # hata dein
  // "https://www.goodfirms.co/company/devapp-grid", // profile ho to # hata dein
].filter(Boolean);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "DevApp Grid",
  alternateName: "DevAppGrid",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Dev-App-04.png`,
  slogan: "Apps Built to Grow Your Business",
  description:
    "DevApp Grid is a mobile app and software development company in Los Angeles building iOS, Android, web and AI products for US businesses.",
  email: "info@devappgrid.com",
  telephone: "+1-866-978-8570",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6565 Sunset Blvd Ste 190",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90028",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-866-978-8570",
    contactType: "sales",
    areaServed: "US",
    availableLanguage: ["English"],
  },
  ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS } : {}),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "DevApp Grid",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        {/* Organization + WebSite schema (Google ke liye, visitor ko nazar nahi aata) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, "\\u003c"),
          }}
        />

        {/* Google Ads tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18460576382"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18460576382');
          `}
        </Script>

        {children}
        <ZendeskWidget />
      </body>
    </html>
  );
}
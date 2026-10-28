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


const SOCIAL_LINKS = [
  "", // https://www.linkedin.com/company/...
  "", // https://clutch.co/profile/...
  "", // https://www.goodfirms.co/company/...
  "", // https://www.facebook.com/...
  "", // https://www.instagram.com/...
].filter(Boolean);


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevApp Grid",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Dev-App-04.png`,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18460576382"
        />

        <Script id="google-ads-tag">
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
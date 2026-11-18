
import Manepage from "@/app/components/pages/home/page";

const SITE_URL = "https://devappgrid.com";

const TITLE =
  "DevApp Grid | Mobile App Development Company in Los Angeles";

const DESCRIPTION =
  "DevApp Grid is a mobile app development company in Los Angeles building iOS, Android and cross-platform apps. 1,500+ projects. Book a free consultation.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: "DevApp Grid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "DevApp Grid",
  alternateName: "DevAppGrid",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Manepage />
    </>
  );
}

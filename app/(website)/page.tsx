import Manepage from "@/app/components/pages/home/page";

const SITE_URL = "https://devappgrid.com";
const TITLE = "Mobile App Development Company That Builds Apps for Growth";
const DESCRIPTION =
  "Got an app idea but no clear path forward? DevApp Grid has delivered 1500+ apps for US businesses. Get a free consultation with an NDA.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
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

export default function Home() {
  return <Manepage />;
}
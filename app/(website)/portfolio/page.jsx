import Portfolio from "../../components/pages/portfolio/page";
import { categoriesWithPortfolio } from "../../../services/all-sub-categories";

const SITE_URL = "https://devappgrid.com";

export const metadata = {
  title: { absolute: "Our Work | 1500+ Apps Built | DevApp Grid" },
  description:
    "Explore real apps built by DevApp Grid for US businesses. Evaluate how our development teams solved complex challenges across multiple industries.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: "Our Work | 1500+ Apps Built | DevApp Grid",
    description:
      "Explore real apps built by DevApp Grid for US businesses across multiple industries.",
    url: `${SITE_URL}/portfolio`,
    type: "website",
    siteName: "DevApp Grid",
  },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// API response se list nikalna (component jaisa hi)
const getList = (res) => res?.response?.data || res?.data || [];

async function getCategories() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const list = getList(await categoriesWithPortfolio());
      if (Array.isArray(list) && list.length > 0) return list;
      console.warn(`[portfolio] koshish ${attempt}/3: backend ne 0 categories di`);
    } catch (error) {
      console.warn(`[portfolio] koshish ${attempt}/3 fail:`, error?.response?.status || "", error?.message || error);
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  console.error("[portfolio]  build mein projects NAHI mile — page browser mein load karega (Google ko khaali milega)");
  return [];
}

export default async function PortfolioPage() {
  const categories = await getCategories();
  return <Portfolio initialCategories={categories} />;
}
import { cache } from "react";
import { notFound } from "next/navigation";
import ServicesCategory from "../../../components/pages/services-category/page";
import { getServicesData } from "@/lib/navigation-data";
// Wahi API jo component browser mein chala raha tha — ab build ke waqt server par chalegi
import { serviceCategorieSlug } from "@/services/all-sub-categories";

const SITE_URL = "https://devappgrid.com";
const ROUTE_BASE = "/services-category";

export const dynamicParams = false;


const MAX_PARALLEL = 3;
let active = 0;
const waiting = [];
async function limited(fn) {
  if (active >= MAX_PARALLEL) await new Promise((resolve) => waiting.push(resolve));
  active++;
  try {
    return await fn();
  } finally {
    active--;
    const next = waiting.shift();
    if (next) next();
  }
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function withRetry(label, fn, isOk) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const value = await limited(fn);
      if (isOk(value)) return value;
      console.warn(`[services-category] ${label} — koshish ${attempt}/3: khaali jawab`);
    } catch (error) {
      console.warn(
        `[services-category] ${label} — koshish ${attempt}/3 fail:`,
        error?.response?.status || "",
        error?.message || error
      );
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  return null;
}

// Menu wali list (slug + href ke liye) — ye na mile to koi page nahi banta
const getCategories = cache(async () => {
  const data = await withRetry(
    "menu categories",
    () => getServicesData(),
    (d) => Array.isArray(d?.categories) && d.categories.length > 0
  );
  if (!data) {
    console.error("[services-category] ❌ menu ki categories nahi mili — services-category ka koi page nahi banega");
    return [];
  }
  return data.categories;
});

const slugFromHref = (href) => (href ? href.split("/").filter(Boolean).pop() : null);

// Canonical hamesha poora URL (https://devappgrid.com/...), bina www
function cleanPath(href, slug) {
  try {
    const p = new URL(href, SITE_URL).pathname.replace(/\/+$/, "");
    return p || `${ROUTE_BASE}/${slug}`;
  } catch {
    return `${ROUTE_BASE}/${slug}`;
  }
}

function decode(str = "") {
  return String(str)
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

// HTML hata kar saaf text; `max` ho to poore lafz par kaato
function plain(html = "", max = 0) {
  const text = decode(String(html).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
  if (!max || text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

const getCategory = cache(async (slug) => {
  const categories = await getCategories();
  return categories.find((item) => slugFromHref(item?.href) === slug) || null;
});

// ASAL content (description, content) — component jaisa hi: pehla item
const getService = cache(async (slug) => {
  const res = await withRetry(
    `"${slug}"`,
    () => serviceCategorieSlug(slug),
    (r) => {
      const d = r?.data ?? r;
      return Array.isArray(d) ? d.length > 0 : !!d;
    }
  );
  if (!res) {
    console.error(`[services-category] ❌ "${slug}" ka content build mein NAHI mila — ye page Google ko khaali milega`);
    if (process.env.STRICT_SERVICE_BUILD === "1") {
      throw new Error(`services-category: "${slug}" ka content nahi mila`);
    }
    return null; // null hua to component browser mein khud fetch karega (backup)
  }
  const d = res?.data ?? res;
  return Array.isArray(d) ? d[0] : d;
});

export async function generateStaticParams() {
  const categories = await getCategories();
  const slugs = [...new Set(categories.map((c) => slugFromHref(c?.href)).filter(Boolean))];
  console.log(`[services-category] ${slugs.length} category pages ban rahe hain`);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [category, service] = await Promise.all([getCategory(slug), getService(slug)]);

  const name = decode(service?.name || service?.title || category?.name || category?.title || "Services");
  const title = decode(service?.meta_title || category?.meta_title || `${name} | DevApp Grid`);
  const description = decode(
    service?.meta_description ||
      category?.meta_description ||
      plain(service?.description, 155) ||
      `Explore DevApp Grid's ${name} services and solutions for businesses across the USA.`
  );
  const url = `${SITE_URL}${cleanPath(category?.href, slug)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [category, service] = await Promise.all([getCategory(slug), getService(slug)]);
  if (!category) notFound(); // sirf tab jab slug menu mein hi na ho

  const name = decode(service?.name || service?.title || category?.name || category?.title || "Services");
  const path = cleanPath(category?.href, slug);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }}
      />
      <ServicesCategory slug={slug} initialService={service} />
    </>
  );
}
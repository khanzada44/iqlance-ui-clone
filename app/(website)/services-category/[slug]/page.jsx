import { cache } from "react";
import { notFound } from "next/navigation";
import ServicesCategory from "../../../components/pages/services-category/page";
import { getServicesData } from "@/lib/navigation-data";
// Wahi API jo component browser mein chala raha tha — ab build ke waqt server par chalegi
import { serviceCategorieSlug } from "@/services/all-sub-categories";

const SITE_URL = "https://devappgrid.com";
const ROUTE_BASE = "/services-category";

export const dynamicParams = false;

// Menu wali list (slug + href ke liye)
const getCategories = cache(async () => {
  const data = await getServicesData();
  return data?.categories || [];
});

const slugFromHref = (href) => (href ? href.split("/").filter(Boolean).pop() : null);


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

const plain = (html = "") =>
  decode(String(html).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const getCategory = cache(async (slug) => {
  const categories = await getCategories();
  return categories.find((item) => slugFromHref(item?.href) === slug) || null;
});

// ASAL content (description, content) — component jaisa hi: data[0]
const getService = cache(async (slug) => {
  try {
    const data = await serviceCategorieSlug(slug);
    return data?.[0] || null;
  } catch (error) {
    console.error(`[services-category] "${slug}" ka content nahi mila:`, error?.message || error);
    return null; // null hua to component browser mein khud fetch karega
  }
});

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories
    .map((category) => slugFromHref(category?.href))
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [category, service] = await Promise.all([getCategory(slug), getService(slug)]);

  const name = decode(service?.name || service?.title || category?.name || category?.title || "Services");
  const title = decode(service?.meta_title || category?.meta_title || `${name} | DevApp Grid`);
  const description = decode(
    service?.meta_description ||
      category?.meta_description ||
      plain(service?.description).slice(0, 160) ||
      `Explore DevApp Grid's ${name} services and solutions for businesses across the USA.`
  );
  const path = cleanPath(category?.href, slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [category, service] = await Promise.all([getCategory(slug), getService(slug)]);
  if (!category) notFound();

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
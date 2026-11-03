import { cache } from "react";
import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";

const SITE_URL = "https://devappgrid.com";

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

const hasContent = (s) =>
  !!s && typeof s === "object" && !!(s.description || s.content || s.content_1 || s.name || s.title);

const getService = cache(async (slug) => {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await limited(() => serviceCategorieBySlug(slug));
      const data = res?.data ?? res ?? null;
      // Kuch endpoints array dete hain, kuch object
      const service = Array.isArray(data) ? data[0] : data;
      if (hasContent(service)) return service;
      console.warn(`[services-details] "${slug}" — koshish ${attempt}/3: backend ne khaali jawab diya`);
    } catch (error) {
      console.warn(
        `[services-details] "${slug}" — koshish ${attempt}/3 fail:`,
        error?.response?.status || "",
        error?.message || error
      );
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  console.error(`[services-details] "${slug}" ka data build mein NAHI mila — ye page Google ko khaali milega`);
  if (process.env.STRICT_SERVICE_BUILD === "1") {
    // Build rok do, taa ke khaali page live na jaye
    throw new Error(`services-details: "${slug}" ka data nahi mila`);
  }
  return null;
});

function decode(str = "") {
  return String(str)
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function plain(html = "", max = 0) {
  const text = decode(String(html).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
  if (!max || text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

const nameFromSlug = (slug = "") =>
  slug.split("-").filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

export async function generateStaticParams() {
  const servicesData = await getServicesData();
  const slugs = [];
  servicesData?.categories?.forEach((category) => {
    category.items?.forEach((item) => {
      if (item.href) {
        const slug = item.href.split("/").filter(Boolean).pop();
        if (slug) slugs.push(slug);
      }
    });
  });
  const unique = [...new Set(slugs)];
  console.log(`[services-details] ${unique.length} service pages ban rahe hain`);
  return unique.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  const path = `/services-details/${slug}`;
  const name = decode(service?.h1 || service?.title || service?.name || nameFromSlug(slug));
  const title = decode(service?.meta_title || `${name} | DevApp Grid`);
  const description =
    decode(service?.meta_description || plain(service?.description || service?.content, 155)) ||
    `Hire DevApp Grid for ${name} services. Custom, secure, and scalable solutions for businesses across the USA.`;
  const image = service?.image || service?.banner_image || undefined;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  const path = `/services-details/${slug}`;
  const name = decode(service?.h1 || service?.title || service?.name || nameFromSlug(slug));
  const description = decode(
    service?.meta_description || plain(service?.description || service?.content, 155)
  );

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      ...(description ? { description } : {}),
      url: `${SITE_URL}${path}`,
      provider: { "@type": "Organization", name: "DevApp Grid", url: SITE_URL },
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }}
        />
      ))}
      {/* Data mila → content seedha HTML mein (Google parh sakta hai).
          Na mila → page khaali nahi rehta: browser mein khud load hota hai (backup). */}
      <ServicesDetails slug={slug} initialService={service} />
    </>
  );
}
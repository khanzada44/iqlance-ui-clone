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

/* Sitemap wale saare service slugs — menu API fail ho jaye ya koi service menu mein na ho,
   tab bhi ye pages zaroor banenge (dynamicParams=false ki wajah se warna 404 hote). */
const KNOWN_SLUGS = [
  "ios-app-development",
  "android-app-development",
  "swift-app-development",
  "kotlin-app-development",
  "ipad-app-development",
  "pwa-development",
  "react-native-development",
  "flutter-app-development",
  "cross-platform-app-development",
  "mvp-app-development",
  "smart-watch-app-development",
  "hybrid-app-development",
  "web-design",
  "uiux-development",
  "php-development",
  "joomla-development",
  "wordpress-development",
  "magento-development",
  "drupal-development",
  "aspnet-development",
  "angular-js-development",
  "mvp-software-development",
  "node-js-development",
  "python-development-company",
  "crm-software-development",
  "ruby-on-rails-development",
  "erp-software-development",
  "devops-development",
  "chat-bot",
  "iot",
  "laravel-development",
  "hire-android-app-developers",
  "hire-dot-net-developers",
  "hire-flutter-app-developers",
  "hire-iphone-app-developers",
  "hire-laravel-developers",
  "hire-software-developers",
  "hire-react-js-developer",
  "hire-react-native-developers",
  "hire-full-stack-developers",
  "hire-ai-developers",
  "it-staff-augmentation",
  "it-staffing-agency",
  "applications-promotions",
  "search-engine-optimization",
  "social-media",
  "pay-per-click",
  "product-market-search",
  "aiml-development",
  "generative-ai-development",
  "ai-chatbot-development",
  "llm-integration",
  "computer-vision-development",
  "microsoft-power-bi-consultancy-company",
  "microsoft-dynamics-365-development",
  "hire-mobile-app-developers",
];

export async function generateStaticParams() {
  let servicesData = null;
  // Pehle: menu API ek dafa fail → 0 pages. Ab 3 koshishein.
  for (let attempt = 1; attempt <= 3 && !servicesData?.categories?.length; attempt++) {
    try {
      servicesData = await getServicesData();
    } catch (error) {
      console.warn(`[services-details] menu API koshish ${attempt}/3 fail:`, error?.message || error);
    }
    if (!servicesData?.categories?.length && attempt < 3) await sleep(1000 * attempt);
  }
  if (!servicesData?.categories?.length) {
    console.error("[services-details] ❌ menu API se list nahi mili — sirf KNOWN_SLUGS se pages banenge");
  }

  const slugs = [...KNOWN_SLUGS];
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
import { cache } from "react";
import { notFound } from "next/navigation";
import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";
const SITE_URL = "https://devappgrid.com";

export const dynamicParams = false;

const getService = cache(async (slug) => {
  try {
    const res = await serviceCategorieBySlug(slug);
    const data = res?.data ?? res ?? null;
    // Khali array / khali object ko bhi "nahi mila" samjho
    if (!data || (Array.isArray(data) && data.length === 0)) return null;
    return data;
  } catch (error) {
    // Error chupana nahi — build log mein nazar aaye ke kaun sa page khali gaya
    console.error(`[services-details] "${slug}" ka data nahi mila:`, error?.message || error);
    return null;
  }
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

  return [...new Set(slugs)].map((slug) => ({ slug }));
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
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
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
  if (!service) notFound();

  const path = `/services-details/${slug}`;
  const name = decode(service?.h1 || service?.title || service?.name || nameFromSlug(slug));
  const description = decode(
    service?.meta_description || plain(service?.description || service?.content, 155)
  );

  const faqs = (Array.isArray(service?.faqs) ? service.faqs : []).filter(
    (f) => f?.question && f?.answer
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
  if (faqs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: plain(f.question),
        acceptedAnswer: { "@type": "Answer", text: plain(f.answer) },
      })),
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }}
        />
      ))}

      {/* Data server se jata hai — HTML mein content hoga, Google parh sakega */}
      <ServicesDetails slug={slug} initialService={service} />
    </>
  );
}
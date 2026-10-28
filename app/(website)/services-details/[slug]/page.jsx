import { cache } from "react";
import { notFound } from "next/navigation";
import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";

const SITE_URL = "https://devappgrid.com";

// Sirf build mein bane pages chalenge (static export ke liye)
export const dynamicParams = false;

// Ek hi service ko metadata aur page dono ke liye do baar API se na mangwaye
const getService = cache(async (slug) => {
  try {
    const res = await serviceCategorieBySlug(slug);
    return res?.data ?? res ?? null;
  } catch {
    return null;
  }
});

// "&amp;" -> "&"  (Flutter title wala bug)
function decode(str = "") {
  return String(str)
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

// HTML se saaf text (description / schema ke liye)
function plain(html = "", max = 0) {
  const text = decode(String(html).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
  if (!max || text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export async function generateStaticParams() {
  const servicesData = await getServicesData();

  const slugs = [];

  servicesData.categories?.forEach((category) => {
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
  const title = decode(service?.meta_title || service?.title || "Services");
  const description = decode(
    service?.meta_description || plain(service?.description || service?.content, 155)
  );
  const image = service?.image || service?.banner_image || undefined;

  return {
    title,
    description,
    alternates: { canonical: path }, // -> https://devappgrid.com/services-details/<slug>
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
  const name = decode(service?.h1 || service?.title || "");
  const description = decode(
    service?.meta_description || plain(service?.description || service?.content, 155)
  );

  // FAQ field ka naam apne API ke hisab se check karein (faqs / faq)
  const faqs = Array.isArray(service?.faqs) ? service.faqs : [];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
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

      {/* Data ab server se jata hai — HTML mein content hoga, Google parh sakega */}
      <ServicesDetails slug={slug} initialService={service} />
    </>
  );
}
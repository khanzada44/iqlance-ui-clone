import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";

export async function generateStaticParams() {
  const servicesData = await getServicesData();

  const slugs = [];

  servicesData.categories?.forEach((category) => {
    category.items?.forEach((item) => {
      if (item.href) {
        const slug = item.href.split("/").filter(Boolean).pop();

        if (slug) {
          slugs.push(slug);
        }
      }
    });
  });

  return [...new Set(slugs)].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = await serviceCategorieBySlug(slug);

  console.log("DETAIL SERVICE:", service);

  return {
    title: service?.meta_title || service?.title || "Services",
    description: service?.meta_description || "",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesDetails slug={slug} />;
}
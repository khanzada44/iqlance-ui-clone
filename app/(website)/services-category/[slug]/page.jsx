import ServicesCategory from "../../../components/pages/services-category/page";
import { getServicesData } from "@/lib/navigation-data";

export async function generateStaticParams() {
  const servicesData = await getServicesData();

  const categories = servicesData?.categories || [];

  return categories
    .map((category) => {
      const href = category?.href;

      if (!href) return null;

      const slug = href.split("/").filter(Boolean).pop();
      if (!slug) return null;

      return { slug };
    })
    .filter(Boolean);
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesCategory slug={slug} />;
}
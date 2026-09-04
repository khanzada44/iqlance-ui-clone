import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";

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

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesDetails slug={slug} />;
}
import ServicesCategory from "../../../components/pages/services-category/page";
import { serviceCategorieSlug } from "../../../../services/all-sub-categories";

export function generateStaticParams() {
  return Object.keys(serviceCategorieSlug).map((slug) => ({
    slug,
  }));
}


export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesCategory slug={slug} />;
}
import ServicesCategory from "../../../components/pages/services-category/page";

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesCategory slug={slug} />;
}
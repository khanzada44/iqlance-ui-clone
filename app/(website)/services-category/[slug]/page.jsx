// import ServicesCategory from "../../../components/pages/services-category/page";
// import { getServicesData } from "@/lib/navigation-data";

// export async function generateStaticParams() {
//   const servicesData = await getServicesData();

//   const categories = servicesData?.categories || [];

//   return categories
//     .map((category) => {
//       const href = category?.href;

//       if (!href) return null;

//       const slug = href.split("/").filter(Boolean).pop();
//       if (!slug) return null;

//       return { slug };
//     })
//     .filter(Boolean);
// }

// export default async function Page({ params }) {
//   const { slug } = await params;

//   return <ServicesCategory slug={slug} />;
// }
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

// Dynamic Meta Tags
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const servicesData = await getServicesData();
  const categories = servicesData?.categories || [];

  const category = categories.find((item) => {
    const href = item?.href;
    if (!href) return false;

    const categorySlug = href.split("/").filter(Boolean).pop();

    return categorySlug === slug;
  });

  const title = category?.name || category?.title || "Services";
  const description =
    category?.description ||
    `Explore our ${title} services and solutions.`;
  console.log('description', description);

  return {
    title: `${title} | DEVAPP`,
    description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <ServicesCategory slug={slug} />;
}
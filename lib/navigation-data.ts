import { NavLink, ServicesData } from "@/types/navigation";
import { allSubCategories , portfolioSubCategories ,serviceCategories} from "../services/all-sub-categories";



export const navLinks: NavLink[] = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about", icon: "/icons/about.svg" },
      { label: "Engagement Model", href: "/engagement-model", icon: "/icons/engagement.svg" },
      { label: "FAQ", href: "/faqs", icon: "/icons/faq.svg" },
      { label: "Why Devapp", href: "/why-devapp", icon: "/icons/officeBuilding.svg" },
      { label: "Testimonials", href: "/testimonials", icon: "/icons/testimonials.svg" },
      { label: "Contact", href: "/contact-us", icon: "/icons/contact.svg" },
      { label: "Our Process", href: "/our-process", icon: "/icons/ourProcess.svg" },
      { label: "Careers", href: "/careers", icon: "/icons/careers.svg" },
    ],
  },
    {
    label: "Services",
    href: "/services",
    dropdown: [],
  },
  {
    label: "Industry",
    href: "/industry/healthcare",
    dropdown: [
      // { label: "Healthcare", href: "/industry/healthcare", icon: "/icons/healthcare.svg" },
      // { label: "Logistics", href: "/industry/logistics", icon: "/icons/logistics.svg" },
      // { label: "Wellness & Fitness", href: "/industry/wellness-and-fitness", icon: "/icons/wellness-iq.png.webp" },
      // { label: "Real estate", href: "/industry/real-estate", icon: "/icons/realestate.svg" },
      // { label: "Food & Restaurant", href: "/industry/food-ordering", icon: "/icons/foodRestaurant.svg" },
      // { label: "E-commerce", href: "/industry/ecommerce", icon: "/icons/e-commerce.svg" },
      // { label: "Education", href: "/industry/elearning-app", icon: "/icons/education.svg" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/on-demand",
    dropdown: [
      // { label: "On Demand", href: "/solutions/on-demand", icon: "/icons/ondemand.svg" },
      // { label: "Taxi Booking", href: "/solutions/taxi", icon: "/icons/taxiBooking.svg" },
      // { label: "Restaurant", href: "/solutions/restaurant", icon: "/icons/restaurant.svg" },
      // { label: "Fitness", href: "/solutions/fitness", icon: "/icons/fitness.svg" },
      // { label: "Social Networking", href: "/solutions/social-media", icon: "/icons/socialNetworking.svg" },
      // { label: "Dating App", href: "/solutions/dating", icon: "/icons/datingapp.svg" },
      // { label: "Food Delivery App", href: "/solutions/food-delivery-app", icon: "/icons/fooddeliveryapp.svg" },
    ],
  },
  { label: "Our Work", href: "/portfolio" },
  { label: "Blog", href: "/blog" },

];

// export const fetchDynamicNavLinks = async (): Promise<NavLink[]> => {
//   try {
//     const res = await allSubCategories();

//     const itemsArray = res?.response?.data || res?.data || (Array.isArray(res) ? res : []);
//     const solutionSlugs = [
//       "on-demand",
//       "taxi-booking",
//       "restaurant",
//       "fitness",
//       "social-networking",
//       "dating-app",
//       "online-food-ordering",
//     ];

//     return navLinks.map((link) => {
//       if (link.label === "Solutions") {
//         const solutionsData = itemsArray.filter((item: any) =>
//           solutionSlugs.includes(item.slug)
//         );

//         return {
//           ...link,
//           dropdown: solutionsData.map((item: any) => ({
//             label: item.name || item.title || item.label,
//             href: `/solutions/${item.slug || ""}`,
//             icon: item.icon_url || item.icon || "/icons/default.svg",
//           })),
//         };
//       }

//       if (link.label === "Industry") {
//         const industryData = itemsArray.filter(
//           (item: any) => !solutionSlugs.includes(item.slug)
//         );

//         return {
//           ...link,
//           dropdown: industryData.map((item: any) => ({
//             label: item.name || item.title || item.label,
//             href: `/industry/${item.slug || ""}`,
//             icon: item.icon_url || item.icon || "/icons/default.svg",
//           })),
//         };
//       }

//       return link;
//     });
//   } catch (error) {
//     console.error("Failed to load nav links from API:", error);
//     return navLinks;
//   }
// };


export const fetchDynamicNavLinks = async (): Promise<NavLink[]> => {
  try {
    const res = await allSubCategories();
    console.log(res,'res');
    
    const itemsArray = res?.response?.data || res?.data || (Array.isArray(res) ? res : []);

    const solutionSlugs = [
      "on-demand",
      "taxi-booking",
      "restaurant",
      "fitness",
      "social-networking",
      "dating-app",
      "online-food-ordering",
    ];

    return navLinks.map((link) => {
      // Label comparison ko safe aur lowercase handle karein
      const currentLabel = link.label?.trim().toLowerCase();

      if (currentLabel === "solutions") {
        const solutionsData = itemsArray.filter((item: any) =>
          solutionSlugs.includes(item.slug?.toLowerCase())
        );

        return {
          ...link,
          dropdown: solutionsData.map((item: any) => ({
            id: item.id, // FIX: 'category_id' ki jagah 'id' rakhein taake DesktopDropdown ko item.id mile
            label: item.name || item.title || item.label,
            href: `/solutions/${item.slug || ""}`,
            icon: item.icon_url || item.icon || "/icons/default.svg",
          })),
        };
      }

      if (currentLabel === "industry") {
        const industryData = itemsArray.filter(
          (item: any) => !solutionSlugs.includes(item.slug?.toLowerCase())
        );

        return {
          ...link,
          dropdown: industryData.map((item: any) => ({
            id: item.id, // Direct 'id' match
            label: item.name || item.title || item.label,
            href: `/industry/${item.slug || ""}`,
            icon: item.icon_url || item.icon || "/icons/default.svg",
          })),
        };
      }

      return link;
    });
  } catch (error) {
    console.error("Failed to load nav links from API:", error);
    return navLinks;
  }
};
export const getServicesData = async (): Promise<ServicesData> => {
  const categories = await serviceCategories();

  return {
    title: "What we can do for you",

    categories: categories.map((category: any) => ({
      id: String(category.id),
      name: category.name,
      href: `/services-category/${category.slug}`,

      // Category icon
      icon: category.icon,
      icon_url: category.icon_url,

      // Services
      items: (category.services || []).map((service: any) => ({
        name: service.title,
        href: `/services-details/${service.slug}`,

        // Service icon
        icon: service.icon,
        icon_url: service.icon_url,
      })),
    })),
  };
};
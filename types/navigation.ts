export interface DropdownItem {
  id?:any;
  label: string;
  href: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface ServiceItem {
  name: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  href: string;
  items: ServiceItem[];
}

export interface ServicesData {
  title: string;
  categories: ServiceCategory[];
}

// export const NAVIGATION = {
//   DROPDOWN_DELAY: 150,
//   MOBILE_BREAKPOINT: "xl" as const,
//   LOGO_WIDTH: 215,
//   LOGO_HEIGHT: 62,
// } as const;

// export const COLORS = {
//   PRIMARY: "#1f4b83",
//   PRIMARY_HOVER: "#173d6c",
// } as const;

// export const ROUTES = {
//   HOME: "/",
//   CONTACT: "/contact",
//   SERVICES: "/services",
//   ABOUT: "/about",
//   WORK: "/work",
//   BLOG: "/blog",
//   INDUSTRY: "/industry",
//   SOLUTIONS: "/solutions",
// } as const;
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

export interface ServiceItem {
  name: string;
  href: string;
  icon?: string;
  icon_url?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  href: string;
  icon?: string;
  icon_url?: string;
  items: ServiceItem[];
}

export interface ServicesData {
  title: string;
  categories: ServiceCategory[];
}
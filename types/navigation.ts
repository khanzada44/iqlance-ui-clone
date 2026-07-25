export interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  items: string[];
}

export interface ServicesData {
  title: string;
  categories: ServiceCategory[];
}
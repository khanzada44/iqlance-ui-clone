import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ServicesData, ServiceCategory } from "@/types/navigation";

interface ServicesMegaDropdownProps {
  servicesData: ServicesData;
  selectedCategory: ServiceCategory;
  onCategoryHover: (category: ServiceCategory) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ServicesMegaDropdown = ({
  servicesData,
  selectedCategory,
  onCategoryHover,
  onMouseEnter,
  onMouseLeave,
}: ServicesMegaDropdownProps) => {
  return (
    <div
      className="absolute left-0 right-0 top-full bg-white shadow-xl xl:block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="mb-6 text-xl font-semibold text-gray-500">
          {servicesData.title}
        </h2>

        <div className="flex gap-12">
          {/* Categories */}
          <div className="w-64 shrink-0">
            <div className="space-y-1">
              {servicesData.categories.map((category) => (
                <div
                  key={category.id}
                  onMouseEnter={() => onCategoryHover(category)}
                  className={`group flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                    selectedCategory.id === category.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Link
                    href={category.href}
                    className="flex-1 text-sm font-bold"
                  >
                    {category.name}
                  </Link>

                  {selectedCategory.id === category.id && (
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {selectedCategory.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
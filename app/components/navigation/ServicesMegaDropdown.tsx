import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ServicesData, ServiceCategory } from "@/types/navigation";
import {
  navLinks as initialNavLinks,
  fetchDynamicNavLinks,
} from "@/lib/navigation-data";
interface ServicesMegaDropdownProps {
  servicesData: ServicesData;
  selectedCategory: ServiceCategory | null;
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
        {/* Title */}
        <h2 className="mb-6 text-xl font-semibold text-gray-500">
          {servicesData.title}
        </h2>

        <div className="flex gap-12">
          {/* ================================
              CATEGORIES
          ================================= */}
          <div className="w-64 shrink-0">
            <div className="space-y-1">
              {servicesData.categories.map((category) => {
                const isActive = selectedCategory?.id === category.id;

                return (
                  <div
                    key={category.id}
                    onMouseEnter={() => onCategoryHover(category)}
                    className={`group flex cursor-pointer items-center justify-between px-4 py-3 transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {/* Category Link */}
                    <Link
                      href={category.href}
                      className="flex-1 text-sm font-bold"
                    >
                      {category.name}
                    </Link>

                    {/* Arrow */}
                    {isActive && <ChevronDown className="h-4 w-4 -rotate-90" />}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1">
            {selectedCategory ? (
              selectedCategory.items?.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {selectedCategory.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-3 border-b border-gray-100 px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                      {/* Service Icon */}
                      {item.icon_url && (
                        <img
                          src={item.icon_url} 
                          alt={item.name}
                          className="h-8 w-8 shrink-0 object-contain"
                        />
                      )}

                      {/* Service Name */}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex h-full min-h-25 items-center justify-center">
                  <p className="text-sm text-gray-400">
                    No services available.
                  </p>
                </div>
              )
            ) : (
              <div className="flex h-full min-h-25 items-center justify-center">
                <p className="text-sm text-gray-400">Select a category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

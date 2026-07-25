import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ServicesData, ServiceCategory } from '@/types/navigation';

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
      className="absolute left-0 right-0 top-full block bg-white shadow-xl xl:block"
      onMouseEnter={() => {
        console.log('Mega dropdown - Enter');
        onMouseEnter();
      }}
      onMouseLeave={() => {
        console.log('Mega dropdown - Leave');
        onMouseLeave();
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="mb-6 text-1xl font-semibold text-gray-500">
          {servicesData.title}
        </h2>

        <div className="flex gap-12">
          {/* Categories */}
          <div className="w-64 shrink-0">
            <div className="space-y-1">
              {servicesData.categories.map((category) => (
                <div
                  key={category.id}
                  className={`group flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                    selectedCategory.id === category.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => {
                    console.log('Category hover:', category.name);
                    onCategoryHover(category);
                  }}
                >
                  <span className="font-bold">{category.name}</span>
                  {selectedCategory.id === category.id && (
                    <ChevronDown className="ml-auto h-4 w-4 -rotate-90" />
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
                  key={item}
                  href="#"
                  className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
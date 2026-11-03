import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ServicesData, ServiceCategory } from "@/types/navigation";

interface ServicesMegaDropdownProps {
  servicesData: ServicesData;
  selectedCategory: ServiceCategory | null;
  onCategoryHover: (category: ServiceCategory) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
  /** Parent is ko hamesha render kare aur sirf `open` badle — taa ke saare links HTML mein rahein (Google ke liye) */
  open?: boolean;
}

export const ServicesMegaDropdown = ({
  servicesData,
  selectedCategory,
  onCategoryHover,
  onMouseEnter,
  onMouseLeave,
  onLinkClick,
  open = true,
}: ServicesMegaDropdownProps) => {
  const categories = servicesData?.categories ?? [];
  // Koi category hover na hui ho to pehli category dikhao ("Select a category" ki jagah)
  const activeId = selectedCategory?.id ?? categories[0]?.id ?? null;

  return (
    <div
      className={`absolute left-0 right-0 top-[calc(100%-10px)] bg-white shadow-xl ${open ? "xl:block" : "hidden"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-hidden={!open}
    >
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Menu ke andar heading tag nahi — page ki headings (H1/H2) kharab hoti hain */}
        <p className="mb-6 text-xl font-semibold text-gray-500">{servicesData?.title || "Our Services"}</p>

        {categories.length === 0 ? (
          // Data na ho to error text nahi — seedha Services page ka link
          <Link
            href="/services"
            onClick={onLinkClick}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:underline"
          >
            View all services →
          </Link>
        ) : (
          <div className="flex gap-12">
            <div className="w-64 shrink-0">
              <div className="space-y-1">
                {categories.map((category) => {
                  const isActive = activeId === category.id;
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
                      <Link href={category.href} onClick={onLinkClick} className="flex-1 text-sm font-bold">
                        {category.name}
                      </Link>
                      {isActive && <ChevronDown className="h-4 w-4 -rotate-90" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* HAR category ki list HTML mein hai; sirf active wali dikhti hai.
                Is se Google ko saare service links milte hain, hover ke baghair bhi. */}
            <div className="flex-1">
              {categories.map((category) => {
                const isActive = activeId === category.id;
                const items = category.items ?? [];
                return (
                  <div key={category.id} className={isActive ? "block" : "hidden"}>
                    {items.length > 0 ? (
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onLinkClick}
                            className="group flex items-center gap-3 border-b border-gray-100 px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600"
                          >
                            {item.icon_url && (
                              // Naam saath likha hai, is liye icon ka alt khaali (do baar na parha jaye)
                              <img src={item.icon_url} alt="" className="h-8 w-8 shrink-0 object-contain" loading="lazy" />
                            )}
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-full min-h-25 items-center justify-center">
                        <Link
                          href={category.href}
                          onClick={onLinkClick}
                          className="text-sm font-bold text-red-600 hover:underline"
                        >
                          Explore {category.name} →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

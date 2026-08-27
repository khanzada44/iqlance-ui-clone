"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { NavLink, ServicesData, ServiceCategory } from "@/types/navigation";
import { getServicesData } from "@/lib/navigation-data";
import { ROUTES } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export const MobileNav = ({
  isOpen,
  onClose,
  navLinks,
}: MobileNavProps) => {
  const [activeSubMenu, setActiveSubMenu] =
    useState<string | null>(null);

  const [activeCategory, setActiveCategory] =
    useState<string | null>(null);

  // Dynamic services data
  const [servicesData, setServicesData] =
    useState<ServicesData>({
      title: "What we can do for you",
      categories: [],
    });

  // Selected category
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory | null>(null);

  // ==========================================
  // Fetch Dynamic Services
  // ==========================================

  useEffect(() => {
    let isMounted = true;

    const loadServicesData = async () => {
      try {
        const data = await getServicesData();

        if (!isMounted) return;

        setServicesData(data);

        // Select first category
        if (data.categories.length > 0) {
          setSelectedCategory(data.categories[0]);
        }
      } catch (error) {
        console.error(
          "Failed to load mobile services:",
          error
        );
      }
    };

    loadServicesData();

    return () => {
      isMounted = false;
    };
  }, []);

  // ==========================================
  // Reset Menus
  // ==========================================

  useEffect(() => {
    if (!isOpen) {
      setActiveSubMenu(null);
      setActiveCategory(null);
    }
  }, [isOpen]);

  // ==========================================
  // Back Button
  // ==========================================

  const handleBack = () => {
    if (activeCategory) {
      setActiveCategory(null);
    } else {
      setActiveSubMenu(null);
    }
  };

  // ==========================================
  // Open Sub Menu
  // ==========================================

  const handleSubMenuOpen = (label: string) => {
    if (label === "Services") {
      setActiveSubMenu("Services");
      setActiveCategory(null);

      // Select first category
      if (servicesData.categories.length > 0) {
        setSelectedCategory(servicesData.categories[0]);
      }
    } else {
      setActiveSubMenu(label);
      setActiveCategory(null);
    }
  };

  // ==========================================
  // Open Category
  // ==========================================

  const handleCategoryClick = (category: ServiceCategory) => {
    setActiveCategory(category.id);
    setSelectedCategory(category);
  };

  // ==========================================
  // Escape Key
  // ==========================================

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !isOpen) return;

      if (activeCategory) {
        setActiveCategory(null);
      } else if (activeSubMenu) {
        setActiveSubMenu(null);
      } else {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [
    isOpen,
    activeSubMenu,
    activeCategory,
    onClose,
  ]);

  // ==========================================
  // Active Normal Dropdown
  // ==========================================

  const activeSubMenuData = navLinks.find(
    (link) =>
      link.label === activeSubMenu &&
      link.dropdown
  );

  const isServicesSubMenu =
    activeSubMenu === "Services";

  // ==========================================
  // Render
  // ==========================================

  return (
    <>
      {/* ==========================================
          Overlay
      ========================================== */}

      <div
        className={`fixed inset-0 top-16 z-40 bg-black/50 transition-opacity duration-300 xl:hidden ${
          isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          if (activeCategory) {
            setActiveCategory(null);
          } else if (activeSubMenu) {
            setActiveSubMenu(null);
          } else {
            onClose();
          }
        }}
        aria-hidden="true"
      />

      {/* ==========================================
          Main Mobile Menu
      ========================================== */}

      <div
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
            <span className="text-lg font-semibold text-gray-800">
              Menu
            </span>

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 divide-y divide-gray-100">
            {navLinks.map((link, linkIndex) => (
              <div
                key={link.label}
                className="px-4"
              >
                {link.dropdown ? (
                  <button
                    onClick={() =>
                      handleSubMenuOpen(link.label)
                    }
                    className={`flex w-full items-center justify-between py-3 text-left text-base font-medium text-gray-700 transition-all duration-300 hover:text-red-600 ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isOpen
                        ? `${linkIndex * 60}ms`
                        : "0ms",
                    }}
                  >
                    <span>{link.label}</span>

                    <ChevronRight
                      size={20}
                      className="text-gray-400"
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:text-red-600 ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isOpen
                        ? `${linkIndex * 60}ms`
                        : "0ms",
                    }}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`border-t border-gray-100 p-4 transition-all duration-300 ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${navLinks.length * 60}ms`
                : "0ms",
            }}
          >
            <Link
              href="/request-a-quote"
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-red-700 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600"
            >
              Enquire Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ==========================================
          Sub Menu
      ========================================== */}

      <div
        className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          activeSubMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`${activeSubMenu} menu`}
      >
        <div className="flex h-full flex-col overflow-y-auto">

          {/* Header */}
          <div className="flex items-center border-b border-gray-100 px-4 py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
              aria-label="Go back"
            >
              <ChevronLeft size={20} />

              <span className="text-sm font-medium text-gray-600">
                {activeSubMenu}
              </span>
            </button>
          </div>

          {/* Services */}
          {isServicesSubMenu ? (
            <div className="flex-1 overflow-y-auto py-2">

              <div className="px-4 pb-2">
                <h3 className="text-sm font-semibold text-gray-500">
                  {servicesData.title}
                </h3>
              </div>

              {servicesData.categories.length > 0 ? (
                servicesData.categories.map(
                  (category, catIndex) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        handleCategoryClick(category)
                      }
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-base text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-red-600 ${
                        activeSubMenu
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay: activeSubMenu
                          ? `${(catIndex + 1) * 60}ms`
                          : "0ms",
                      }}
                    >
                      <span>{category.name}</span>

                      <ChevronRight
                        size={20}
                        className="text-gray-400"
                      />
                    </button>
                  )
                )
              ) : (
                <div className="px-4 py-6 text-sm text-gray-400">
                  No service categories available.
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-2">
              {activeSubMenuData?.dropdown?.map(
                (item, itemIndex) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 text-base text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-red-600 ${
                      activeSubMenu
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: activeSubMenu
                        ? `${(itemIndex + 1) * 60}ms`
                        : "0ms",
                    }}
                    onClick={() => {
                      onClose();
                      setActiveSubMenu(null);
                    }}
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={24}
                        height={24}
                        className="h-6 w-6 shrink-0"
                      />
                    )}

                    <span className="flex-1">
                      {item.label}
                    </span>
                  </Link>
                )
              )}
            </div>
          )}

          {/* Bottom CTA */}
          <div
            className={`border-t border-gray-100 p-4 transition-all duration-300 ${
              activeSubMenu
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: activeSubMenu
                ? "300ms"
                : "0ms",
            }}
          >
            <Link
              href="/request-a-quote"
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-red-700 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600"
            >
              Enquire Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>


      <div
        className={`fixed left-0 top-16 z-60 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          activeCategory
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`${selectedCategory?.name ?? "Service"} items`}
      >
        <div className="flex h-full flex-col overflow-y-auto">

          {/* Header */}
          <div className="flex items-center border-b border-gray-100 px-4 py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
              aria-label="Go back"
            >
              <ChevronLeft size={20} />

              <span className="text-sm font-medium text-gray-600">
                Back
              </span>
            </button>

            <span className="ml-2 text-sm font-semibold text-gray-500">
              {selectedCategory?.name}
            </span>
          </div>

          {/* Services */}
          <div className="flex-1 overflow-y-auto py-2">
            {selectedCategory?.items?.length ? (
              selectedCategory.items.map(
                (item, itemIndex) => (
                  <Link
                    key={`${selectedCategory.id}-${item.href}`}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 text-base text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-red-600 ${
                      activeCategory
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: activeCategory
                        ? `${(itemIndex + 1) * 60}ms`
                        : "0ms",
                    }}
                    onClick={() => {
                      onClose();
                      setActiveCategory(null);
                      setActiveSubMenu(null);
                    }}
                  >
                    <span className="flex-1">
                      {item.name}
                    </span>
                  </Link>
                )
              )
            ) : (
              <div className="px-4 py-6 text-sm text-gray-400">
                No services available.
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div
            className={`border-t border-gray-100 p-4 transition-all duration-300 ${
              activeCategory
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: activeCategory
                ? "300ms"
                : "0ms",
            }}
          >
            <Link
              href="/request-a-quote"
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-red-700 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600"
            >
              Enquire Now
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

import {
  navLinks as initialNavLinks,
  fetchDynamicNavLinks,
  getServicesData,
} from "@/lib/navigation-data";

import { useDropdown } from "@/hooks/useDropdown";
import { useLockedBody } from "@/hooks/useLockedBody";
import { ROUTES } from "@/lib/constants";

import { DesktopNav } from "../navigation/DesktopNav";
import { MobileNav } from "../navigation/MobileNav";
import { ServicesMegaDropdown } from "../navigation/ServicesMegaDropdown";

import {
  NavLink,
  ServicesData,
  ServiceCategory,
} from "@/types/navigation";

export default function Navbar() {
  const [currentNavLinks, setCurrentNavLinks] =
    useState<NavLink[]>(initialNavLinks);

  // Dynamic services data
  const [servicesData, setServicesData] = useState<ServicesData>({
    title: "What we can do for you",
    categories: [],
  });

  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    activeDropdown,
    setActiveDropdown,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropdown();

  useLockedBody(mobileMenuOpen);

  // =========================================================
  // Dynamic Navigation Links
  // =========================================================

  useEffect(() => {
    let isMounted = true;

    const loadDynamicData = async () => {
      try {
        const updatedLinks = await fetchDynamicNavLinks();

        if (isMounted) {
          setCurrentNavLinks(updatedLinks);
        }
      } catch (error) {
        console.error("Failed to fetch navigation links:", error);
      }
    };

    loadDynamicData();

    return () => {
      isMounted = false;
    };
  }, []);

  // =========================================================
  // Dynamic Services Categories
  // =========================================================

  useEffect(() => {
    let isMounted = true;

    const loadServicesData = async () => {
      try {
        const data = await getServicesData();

        if (!isMounted) return;

        setServicesData(data);

        // Select first category automatically
        if (data.categories.length > 0) {
          setSelectedCategory(data.categories[0]);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    loadServicesData();

    return () => {
      isMounted = false;
    };
  }, []);

  // =========================================================
  // Category Hover
  // =========================================================

  const handleCategoryHover = useCallback(
    (category: ServiceCategory) => {
      setSelectedCategory(category);
    },
    [],
  );

  // =========================================================
  // Mobile Menu
  // =========================================================

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // =========================================================
  // Services Mouse Enter
  // =========================================================

  const handleServicesMouseEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }

    setActiveDropdown("Services");
    setIsServicesHovered(true);

    // Select first category when opening dropdown
    if (servicesData.categories.length > 0) {
      setSelectedCategory(servicesData.categories[0]);
    }
  }, [
    setActiveDropdown,
    servicesData.categories,
  ]);

  // =========================================================
  // Services Mouse Leave
  // =========================================================

  const handleServicesMouseLeave = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }

    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
      setActiveDropdown(null);
      servicesTimeoutRef.current = null;
    }, 200);
  }, [setActiveDropdown]);

  // =========================================================
  // Mega Menu Mouse Enter
  // =========================================================

  const handleMegaMenuEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }

    setIsServicesHovered(true);
  }, []);

  // =========================================================
  // Mega Menu Mouse Leave
  // =========================================================

  const handleMegaMenuLeave = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }

    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
      setActiveDropdown(null);
      servicesTimeoutRef.current = null;
    }, 200);
  }, [setActiveDropdown]);

  // =========================================================
  // Cleanup Timeout
  // =========================================================

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
        servicesTimeoutRef.current = null;
      }
    };
  }, []);

  // =========================================================
  // Render
  // =========================================================

  return (
    <header className="sticky top-0 z-50 w-full lg:max-w-[80%] mx-auto bg-white">
      {/* Navigation Container */}
      <div className="mx-auto flex h-17 w-full items-center justify-between px-4">

        {/* Mobile Toggle & Logo */}
        <div className="flex items-center gap-2">

          <button
            onClick={toggleMobileMenu}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-100 xl:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

          <Link
            href={ROUTES?.HOME || "/"}
            className="flex items-center shrink-0"
          >
            <Image
              src="/images/Dev-App-04.png"
              alt="iQlance Logo"
              width={315}
              height={72}
              className="h-20 w-auto sm:h-9 md:h-20"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <DesktopNav
          navLinks={currentNavLinks}
          activeDropdown={activeDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onServicesEnter={handleServicesMouseEnter}
          onServicesLeave={handleServicesMouseLeave}
        />

        {/* CTA Button */}
        <Link
          href="/request-a-quote"
          className="flex items-center gap-1.5 bg-red-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-600 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm lg:flex lg:px-5 lg:py-2.5"
        >
          Enquire Now

          <ArrowRight
            size={16}
            className="hidden sm:block"
          />
        </Link>
      </div>

      {/* Services Mega Dropdown */}
      {isServicesHovered &&
        servicesData.categories.length > 0 &&
        selectedCategory && (
          <div className="absolute left-0 top-full z-50 w-full pt-1">
            <ServicesMegaDropdown
              servicesData={servicesData}
              selectedCategory={selectedCategory}
              onCategoryHover={handleCategoryHover}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            />
          </div>
        )}

      {/* Mobile Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={currentNavLinks}
      />
    </header>
  );
}
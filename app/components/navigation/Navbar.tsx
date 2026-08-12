"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks as initialNavLinks, fetchDynamicNavLinks, servicesData } from '@/lib/navigation-data';
import { useDropdown } from '@/hooks/useDropdown';
import { useLockedBody } from '@/hooks/useLockedBody';
import { ROUTES } from '@/lib/constants';
import { DesktopNav } from '../navigation/DesktopNav';
import { MobileNav } from '../navigation/MobileNav';
import { ServicesMegaDropdown } from '../navigation/ServicesMegaDropdown';
import { NavLink } from '@/types/navigation';

export default function Navbar() {
  const [currentNavLinks, setCurrentNavLinks] = useState<NavLink[]>(initialNavLinks);

  const {
    activeDropdown,
    setActiveDropdown,
    handleMouseEnter,
    handleMouseLeave,
    clearDropdownTimeout,
  } = useDropdown();

  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    servicesData.categories[0]
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLockedBody(mobileMenuOpen);

  // Dynamic NavLinks fetcher Effect
  useEffect(() => {
    let isMounted = true;
    const loadDynamicData = async () => {
      const updatedLinks = await fetchDynamicNavLinks();
      if (isMounted) {
        setCurrentNavLinks(updatedLinks);
      }
    };

    loadDynamicData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCategoryHover = useCallback(
    (category: typeof servicesData.categories[0]) => {
      setSelectedCategory(category);
    },
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleServicesMouseEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setActiveDropdown('Services');
    setIsServicesHovered(true);
    setSelectedCategory(servicesData.categories[0]);
  }, [setActiveDropdown]);

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

  const handleMegaMenuEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setIsServicesHovered(true);
  }, []);

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

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
        servicesTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMobileMenu}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-100 xl:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link href={ROUTES.HOME} className="flex items-center shrink-0">
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
        <DesktopNav
          navLinks={currentNavLinks}
          activeDropdown={activeDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onServicesEnter={handleServicesMouseEnter}
          onServicesLeave={handleServicesMouseLeave}
        />
        <Link
          href="/request-a-quote"
          className="flex items-center gap-1.5 bg-red-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-600 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm lg:flex lg:px-5 lg:py-2.5"
        >
          Enquire Now
          <ArrowRight size={16} className="hidden sm:block" />
        </Link>
      </div>

      {isServicesHovered && (
        <ServicesMegaDropdown
          servicesData={servicesData}
          selectedCategory={selectedCategory}
          onCategoryHover={handleCategoryHover}
          onMouseEnter={handleMegaMenuEnter}    
          onMouseLeave={handleMegaMenuLeave}    
        />
      )}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={currentNavLinks}
      />
    </header>
  );
}
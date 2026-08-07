"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from '@/types/navigation';
import { servicesData } from '@/lib/navigation-data';
import { ROUTES } from '@/lib/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export const MobileNav = ({ isOpen, onClose, navLinks }: MobileNavProps) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveSubMenu(null);
      setActiveCategory(null);
    }
  }, [isOpen]);

  const handleBack = () => {
    if (activeCategory) {
      setActiveCategory(null);
    } else {
      setActiveSubMenu(null);
    }
  };

  const handleSubMenuOpen = (label: string) => {
    if (label === 'Services') {
      setActiveSubMenu('Services');
      setActiveCategory(null);
    } else {
      setActiveSubMenu(label);
      setActiveCategory(null);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (activeCategory) {
          setActiveCategory(null);
        } else if (activeSubMenu) {
          setActiveSubMenu(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, activeSubMenu, activeCategory, onClose]);

  const activeSubMenuData = navLinks.find(
    (link) => link.label === activeSubMenu && link.dropdown
  );

  const isServicesSubMenu = activeSubMenu === 'Services';
  const selectedCategory = servicesData.categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/50 transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
      <div
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          </div>
          <div className="flex-1 divide-y divide-gray-100">
            {navLinks.map((link, linkIndex) => (
              <div key={link.label} className="px-4">
                {link.dropdown ? (
                  <button
                    onClick={() => handleSubMenuOpen(link.label)}
                    className={`flex w-full items-center justify-between py-3 text-left text-base font-medium text-gray-700 transition-all duration-300 hover:text-blue-600 ${
                      isOpen
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${linkIndex * 60}ms` : '0ms'
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:text-blue-600 ${
                      isOpen
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${linkIndex * 60}ms` : '0ms'
                    }}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div
            className={`border-t border-gray-100 p-4 transition-all duration-300 ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 60}ms` : '0ms'
            }}
          >
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          activeSubMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`${activeSubMenu} menu`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center border-b border-gray-100 px-4 py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
              aria-label="Go back"
            >
              <ChevronLeft size={20} />
              <span className="text-sm font-medium text-gray-600">{activeSubMenu}</span>
            </button>
          </div>
          {isServicesSubMenu ? (
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 pb-2">
                <h3 className="text-sm font-semibold text-gray-500">
                  {servicesData.title}
                </h3>
              </div>
              {servicesData.categories.map((category, catIndex) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left text-base text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                    activeSubMenu
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: activeSubMenu ? `${(catIndex + 1) * 60}ms` : '0ms'
                  }}
                >
                  <span>{category.name}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-2">
              {activeSubMenuData?.dropdown?.map((item, itemIndex) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-base text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                    activeSubMenu
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: activeSubMenu ? `${(itemIndex + 1) * 60}ms` : '0ms'
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
                  <span className="flex-1">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
          <div
            className={`border-t border-gray-100 p-4 transition-all duration-300 ${
              activeSubMenu
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0'
            }`}
            style={{
              transitionDelay: activeSubMenu ? `300ms` : '0ms'
            }}
          >
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-16 z-60 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          activeCategory ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`${selectedCategory?.name} items`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header with Back Button */}
          <div className="flex items-center border-b border-gray-100 px-4 py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
              aria-label="Go back"
            >
              <ChevronLeft size={20} />
              <span className="text-sm font-medium text-gray-600">Back</span>
            </button>
            <span className="ml-2 text-sm font-semibold text-gray-500">
              {selectedCategory?.name}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {selectedCategory?.items.map((item, itemIndex) => (
              <Link
                key={`${selectedCategory?.id ?? 'category'}-${itemIndex}`}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 text-base text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                  activeCategory
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: activeCategory ? `${(itemIndex + 1) * 60}ms` : '0ms'
                }}
                onClick={() => {
                  onClose();
                  setActiveCategory(null);
                  setActiveSubMenu(null);
                }}
              >
                <span className="flex-1">{item}</span>
              </Link>
            ))}
          </div>
          <div
            className={`border-t border-gray-100 p-4 transition-all duration-300 ${
              activeCategory
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0'
            }`}
            style={{
              transitionDelay: activeCategory ? `300ms` : '0ms'
            }}
          >
          </div>
        </div>
      </div>
    </>
  );
};
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NavLink } from '@/types/navigation';
import { DesktopDropdown } from './DesktopDropdown';

interface DesktopNavProps {
  navLinks: NavLink[];
  activeDropdown: string | null;
  onMouseEnter: (label: string) => void;
  onMouseLeave: () => void;
  onServicesEnter: () => void;
  onServicesLeave: () => void;
}

export const DesktopNav = ({
  navLinks,
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
  onServicesEnter,
  onServicesLeave,
}: DesktopNavProps) => {
  return (
    <nav className="hidden items-center gap-4 lg:gap-8 xl:flex">
      {navLinks.map((link) => {
        const isActive = activeDropdown === link.label;
        const isServices = link.label === 'Services';

        return (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => {
              if (isServices) {
                onServicesEnter();
              } else {
                onMouseEnter(link.label);
              }
            }}
            onMouseLeave={() => {
              console.log('Leave from:', link.label); 
              if (isServices) {
                onServicesLeave();
              } else {
                onMouseLeave();
              }
            }}
          >
            <Link
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors lg:text-base ${
                isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-100 ${
                    isActive ? 'rotate-180' : ''
                  }`}
                />
              )}
            </Link>
            {link.dropdown && isActive && !isServices && (
              <DesktopDropdown items={link.dropdown} />
            )}
          </div>
        );
      })}
    </nav>
  );
};
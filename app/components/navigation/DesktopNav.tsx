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
    <nav className="hidden items-center gap-4 lg:gap-8 xl:flex" aria-label="Main">
      {navLinks.map((link) => {
        const isActive = activeDropdown === link.label;
        const isServices = link.label === 'Services';
        const hasDropdown = !!link.dropdown?.length;

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
              if (isServices) {
                onServicesLeave();
              } else {
                onMouseLeave();
              }
            }}
          >
            <Link
              href={link.href}
              aria-haspopup={hasDropdown || isServices ? 'true' : undefined}
              aria-expanded={hasDropdown || isServices ? isActive : undefined}
              className={`flex items-center gap-1 text-sm font-medium transition-colors lg:text-base ${
                isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-100 ${isActive ? 'rotate-180' : ''}`}
                />
              )}
            </Link>

            {/* Dropdown HAMESHA HTML mein (Industry, Solutions ke links Google ko milte hain);
                hover na ho to sirf chhupa rehta hai. Services ka mega menu Navbar alag dikhata hai. */}
            {hasDropdown && !isServices && (
              <div className={isActive ? 'block' : 'hidden'} aria-hidden={!isActive}>
                <DesktopDropdown items={link.dropdown!} />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

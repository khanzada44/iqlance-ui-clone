import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { NavLink } from '@/types/navigation';
import { cn } from '@/utils/helpers';

interface NavMobileItemProps {
  link: NavLink;
  isOpen: boolean;
  onToggle: (label: string) => void;
  onClose: () => void;
}

export const NavMobileItem = ({
  link,
  isOpen,
  onToggle,
  onClose,
}: NavMobileItemProps) => {
  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        // hover:text-red-50 (taqreeban safed) ki wajah se hover par text gayab ho jata tha
        className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600"
        onClick={onClose}
      >
        {link.label}
      </Link>
    );
  }

  const panelId = `mnav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="px-4 py-2">
      <button
        type="button"
        onClick={() => onToggle(link.label)}
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-gray-700"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{link.label}</span>
        <ChevronDown
          size={20}
          className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      {/* Hamesha HTML mein (Google ko links milte hain); band ho to sirf chhupa */}
      <div
        id={panelId}
        className={cn('ml-4 space-y-1 border-l-2 border-red-200 pl-4', !isOpen && 'hidden')}
      >
        {link.dropdown.map((item) => (
          <Link
            key={item.href || item.label}
            href={item.href}
            className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-red-500"
            onClick={onClose}
            tabIndex={isOpen ? undefined : -1}
          >
            {item.icon && (
              // Naam saath likha hai, is liye icon ka alt khaali
              <Image src={item.icon} alt="" width={24} height={24} />
            )}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

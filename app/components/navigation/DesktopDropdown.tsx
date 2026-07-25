import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { DropdownItem } from '@/types/navigation';

interface DesktopDropdownProps {
  items: DropdownItem[];
}

export const DesktopDropdown = ({ items }: DesktopDropdownProps) => {
  return (
    <div className="absolute left-0 top-full mt-5 min-w-55 rounded-lg bg-white py-2 shadow-xl font-bold">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group flex items-center justify-between px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-200 hover:text-blue-600"
        >
          <div className="flex items-center gap-3">
            {item.icon && (
              <Image src={item.icon} alt={item.label} width={28} height={28} />
            )}
            <span>{item.label}</span>
          </div>
          <ArrowRight
            size={15}
            className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-blue-600"
          />
        </Link>
      ))}
    </div>
  );
};
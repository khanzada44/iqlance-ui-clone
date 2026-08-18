// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import { DropdownItem } from '@/types/navigation';
// import { portfolioSubCategories } from '../../../services/all-sub-categories';

// interface DesktopDropdownProps {
//   items: DropdownItem[];
// }
// export const DesktopDropdown = ({ items }: DesktopDropdownProps) => {
//   const handleItemClick = (id?: number | string) => {
//     if (!id) return;
//     // Set selected category ID so target page picks up the user's choice
//     localStorage.setItem('selectedCategoryId', String(id));
//   };

//   return (
//     <div className="absolute left-0 top-full mt-5 min-w-55 rounded-lg bg-white py-2 shadow-xl font-bold">
//       {items.map((item) => (
//         <Link
//           key={item.label}
//           href={item.href}
//           prefetch={false} // Disable background pre-fetching overhead
//           onClick={() => handleItemClick(item.id)}
//           className="group flex items-center justify-between px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-200 hover:text-red-600"
//         >
//           <div className="flex items-center gap-3">
//             {item.icon && (
//               <Image src={item.icon} alt={item.label} width={28} height={28} />
//             )}
//             <span>{item.label}</span>
//           </div>
//           <ArrowRight
//             size={15}
//             className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-red-600"
//           />
//         </Link>
//       ))}
//     </div>
//   );
// };
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DropdownItem } from "@/types/navigation";

interface DesktopDropdownProps {
  items: DropdownItem[];
}

export const DesktopDropdown = ({ items }: DesktopDropdownProps) => {
  const router = useRouter();

  const [isClosing, setIsClosing] = useState(false);

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id?: number | string,
    href?: string,
  ) => {
    if (!id || !href) return;

    // Prevent immediate navigation
    e.preventDefault();

    // Save selected category
    localStorage.setItem("selectedCategoryId", String(id));

    // Start closing animation
    setIsClosing(true);

    // Navigate after animation completes
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return (
    <div
      className={`
  absolute left-0 top-full mt-5 min-w-55
  rounded-lg bg-white py-2 font-bold shadow-xl
  origin-top
  transition-all duration-500 ease-in-out
  ${
    isClosing
      ? "pointer-events-none -translate-y-8 opacity-0"
      : "translate-y-0 opacity-100"
  }
`}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          prefetch={false}
          onClick={(e) => handleItemClick(e, item.id, item.href)}
          className="
            group
            flex
            items-center
            justify-between
            px-4
            py-2.5
            text-sm
            font-bold
            text-gray-700
            transition-all
            duration-200
            hover:text-red-600
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex items-center gap-3">
            {item.icon && (
              <Image src={item.icon} alt={item.label} width={28} height={28} />
            )}

            <span>{item.label}</span>
          </div>

          {/* ARROW */}
          <ArrowRight
            size={15}
            className="
              -translate-x-2
              text-red-600
              opacity-0
              transition-all
              duration-200
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          />
        </Link>
      ))}
    </div>
  );
};

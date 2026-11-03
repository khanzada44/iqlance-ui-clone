"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DropdownItem } from "@/types/navigation";

interface DesktopDropdownProps {
  items: DropdownItem[];
}

export const DesktopDropdown = ({ items }: DesktopDropdownProps) => {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id?: number | string,
    href?: string,
  ) => {
    if (!href) return;

    // Ctrl/Cmd/Shift-click ya middle-click = nayi tab — browser ko apna kaam karne do
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    if (id != null) {
      try {
        localStorage.setItem("selectedCategoryId", String(id));
      } catch {}
    }

    e.preventDefault();
    setIsClosing(true);

    timers.current.push(
      setTimeout(() => router.push(href), 300),
      // Dropdown ab hamesha page mein rehta hai (Google ke liye) — is liye
      // animation ke baad wapas normal karo, warna agli dafa khulega hi nahi
      setTimeout(() => setIsClosing(false), 700),
    );
  };

  return (
    <div
      className={`absolute left-0 top-full mt-5 min-w-65 origin-top bg-white py-2 font-bold shadow-xl transition-all duration-500 ease-in-out ${
        isClosing ? "pointer-events-none -translate-y-8 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href || item.label}
          href={item.href}
          prefetch={false}
          onClick={(e) => handleItemClick(e, item.id, item.href)}
          className="group flex items-center justify-between px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-200 hover:text-red-600"
        >
          {/* <a> ke andar <div> ghalat HTML hai — <span> */}
          <span className="flex items-center gap-3">
            {item.icon && (
              // Naam saath likha hai, is liye icon ka alt khaali
              <Image src={item.icon} alt="" width={28} height={28} />
            )}
            <span>{item.label}</span>
          </span>

          <ArrowRight
            size={15}
            aria-hidden="true"
            className="-translate-x-2 text-red-600 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </Link>
      ))}
    </div>
  );
};
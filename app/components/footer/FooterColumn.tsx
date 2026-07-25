"use client";

import Link from 'next/link';

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-gray-900 transition hover:translate-x-1 inline-block"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
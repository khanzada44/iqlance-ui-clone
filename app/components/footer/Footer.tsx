"use client";

import { FooterColumn } from "./FooterColumn";
import { FooterSocial } from "./FooterSocial";
import { FooterBottom } from "./FooterBottom";
import { footerColumns, footerDescription } from "./footer-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="border-t border-gray-200" />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.id}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        <div className="my-8 border-t border-gray-200" />
        <p className="text-center text-sm not-italic text-black leading-relaxed">
          {footerDescription}
        </p>
        <div className="my-6 border-t border-gray-200" />
        <FooterBottom year={currentYear} />
        <div className="mt-6 flex justify-center">
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}

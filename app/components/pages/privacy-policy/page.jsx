"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import QuoteModal from "../QuoteModal/QuoteModal";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Lock,
  EyeOff,
  Cookie,
  UserCheck,
  Smartphone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 w-full  border-gray-800 bg-white">
        <div className="mx-auto flex h-18 w-[94%] items-center justify-between sm:w-[92%] lg:w-[90%] xl:w-[88%]">
          <div className="flex items-center">
            <Image
              src="/images/Dev-App-04.png"
              alt="Dev App Grid"
              width={500}
              height={500}
              className="h-10.5 w-auto object-contain sm:h-11.5 lg:h-25"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-red-100">
                <Phone size={15} className="text-red-500" />
              </div>

              <div className="hidden leading-tight sm:block">
                <span className="text-[12px] font-semibold text-gray-800 lg:text-[13px]">
                  +1 (866) 978-8570
                </span>

                <p className="text-[9px] font-medium text-red-500 lg:text-[10px]">
                  Call Us Today!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group flex h-9 items-center gap-2 rounded-sm bg-red-600 px-4 text-[10px] font-semibold text-white transition hover:bg-red-700 sm:px-5 sm:text-[11px] lg:h-9.5 lg:px-6 lg:text-[12px]"
            >
              <span className="hidden sm:inline">Get A Free Quote</span>
              <span className="sm:hidden">Quote</span>

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <QuoteModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </header>
      <section className="bg-linear-to-r from-red-700 via-red-600 to-red-900 py-16 text-white sm:py-20">
        <div className="mx-auto w-[92%] max-w-5xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <ShieldCheck size={16} className="text-red-200" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-red-100 sm:text-base">
            At Dev App Grid, we are committed to safeguarding your personal data
            and ensuring strict confidentiality across all services.
          </p>
        </div>
      </section>
      <section>
        <div className="px-5 mt-10 mb-10">
          <div className="space-y-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 sm:p-10 lg:p-12">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600"></span>
                Overview
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                At Dev App Grid, we are committed to safeguarding the
                confidentiality of your information. Our privacy policy outlines
                the procedures we employ to protect your privacy throughout and
                after our software development collaboration.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* USER INFORMATION */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600"></span>
                User Information
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                For the purpose of identification and seamless project
                execution, we collect information to better understand your
                project requirements and provide you with superior service,
                specifically for:
              </p>
              <ol className="grid gap-3 sm:grid-cols-3 pt-2">
                <li className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-sm font-medium text-gray-700">
                  <span className="mb-2 block font-bold text-red-600">01.</span>
                  Enhancing our software products and services.
                </li>
                <li className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-sm font-medium text-gray-700">
                  <span className="mb-2 block font-bold text-red-600">02.</span>
                  Contacting you for feedback on project milestones.
                </li>
                <li className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-sm font-medium text-gray-700">
                  <span className="mb-2 block font-bold text-red-600">03.</span>
                  Tailoring our solutions to align with your business goals.
                </li>
              </ol>
            </section>

            <hr className="border-gray-100" />

            {/* SECURITY */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <Lock className="text-red-600" size={20} />
                Security Standards
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                We take your information&apos;s security seriously. We have
                implemented robust physical, electronic, and managerial
                protocols to prevent unauthorized access or disclosure of the
                data we collect online.
              </p>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                At Dev App Grid, we use Secure Sockets Layer (SSL) Software to
                encrypt client information during transmission, ensuring
                high-level data security.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* 3RD PARTY SHARING */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <EyeOff className="text-red-600" size={20} />
                3rd Party Sharing
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                We never disclose personal information to third parties. Dev App
                Grid utilizes secure payment processing services solely for
                billing purposes, ensuring that your financial data remains
                strictly confidential.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* COOKIES */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <Cookie className="text-red-600" size={20} />
                Cookies And Tracking
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Cookies help our systems recognize your browser session and
                improve website navigation. We use IP addresses to diagnose
                server issues and analyze aggregated analytics, which is not
                linked to Personally Identifiable Information (PII).
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* CONSUMER DATA */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <UserCheck className="text-red-600" size={20} />
                Consumer Data Safety & NDAs
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                We adhere to strict PCI and consumer data protection standards.
                Your intellectual property and code repository may be accessed
                by authorized development centers under binding non-disclosure
                agreements (NDAs) to guarantee full confidentiality.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* MOBILE INFORMATION */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl flex items-center gap-2">
                <Smartphone className="text-red-600" size={20} />
                Mobile Information Policy
              </h2>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                No mobile information will be shared with third
                parties/affiliates for marketing or promotional purposes. Text
                messaging originator opt-in data and consent will strictly
                remain confidential.
              </p>
            </section>

            {/* FINAL CTA CARD */}
          </div>
        </div>
        <div className="relative z-10  bg-black text-center">
          {/* LOGO */}
          <div className="flex items-center justify-center gap-1">
            <img
              src="/images/Dev-App-04.png"
              alt="Dev App Grid"
              className="w-44 sm:w-48"
            />
          </div>

          <div className="my-6 flex flex-col items-center justify-around gap-4 py-6 sm:flex-row">
            {/* SOCIAL */}
            <div className="text-left">
              <span className="text-[14px] font-medium text-gray-300">
                Always Connect With Us!
              </span>

              <div className="flex items-center gap-3 text-gray-400 mt-3">
                <a
                  href="https://www.facebook.com/devappgrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="https://www.instagram.com/devappgrids?stkn=MjRweWwyMGk2ODNw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/company/devapp-grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-red-500 sm:h-11 sm:w-11">
                <Phone size={17} />
              </div>

              <div className="text-left">
                <p className="text-[15px] font-bold leading-tight text-white sm:text-[16px]">
                  +1 (866) 978-8570
                </p>

                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-500">
                  Call Us Today!
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="py-8">
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Let&apos;s work together!
            </h2>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium text-[15px] px-10 py-4 rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Get A Free Quote
            </button>
            <QuoteModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            <div className="flex items-center gap-4 text-sm justify-center mt-11 policys-button">
              <Link
                href="/terms-and-conditions"
                className="text-white hover:text-red-600 transition-colors "
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy-policy"
                className="text-white hover:text-red-600 transition-colors "
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

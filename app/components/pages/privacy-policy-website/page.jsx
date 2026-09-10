import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Lock, EyeOff, Cookie, UserCheck, Smartphone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

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
            At Dev App Grid, we are committed to safeguarding your personal data and ensuring strict confidentiality across all services.
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
                At Dev App Grid, we are committed to safeguarding the confidentiality of your information. Our privacy policy outlines the procedures we employ to protect your privacy throughout and after our software development collaboration.
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
                For the purpose of identification and seamless project execution, we collect information to better understand your project requirements and provide you with superior service, specifically for:
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
                We take your information&apos;s security seriously. We have implemented robust physical, electronic, and managerial protocols to prevent unauthorized access or disclosure of the data we collect online.
              </p>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                At Dev App Grid, we use Secure Sockets Layer (SSL) Software to encrypt client information during transmission, ensuring high-level data security.
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
                We never disclose personal information to third parties. Dev App Grid utilizes secure payment processing services solely for billing purposes, ensuring that your financial data remains strictly confidential.
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
                Cookies help our systems recognize your browser session and improve website navigation. We use IP addresses to diagnose server issues and analyze aggregated analytics, which is not linked to Personally Identifiable Information (PII).
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
                We adhere to strict PCI and consumer data protection standards. Your intellectual property and code repository may be accessed by authorized development centers under binding non-disclosure agreements (NDAs) to guarantee full confidentiality.
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
                No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will strictly remain confidential.
              </p>
            </section>

            {/* FINAL CTA CARD */}


          </div>
        </div>

      </section>
    </main>
  );
}
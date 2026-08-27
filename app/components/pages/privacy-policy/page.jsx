import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Lock, EyeOff, Cookie, UserCheck, Smartphone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-[94%] items-center justify-between sm:w-[92%] lg:w-[90%] xl:w-[88%]">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/Dev-App-04.png"
                alt="Dev App Grid"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>
          </div>

          {/* RIGHT HEADER */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {/* PHONE */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100/80 text-red-600">
                <Phone size={16} />
              </div>

              <div className="hidden leading-tight sm:block">
                <p className="text-[13px] font-bold text-gray-900">
                  +1 (844) 673 6849
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-red-600">
                  Call Us Today!
                </p>
              </div>
            </div>

            <Link
              href="/request-a-quote"
              className="group flex h-10 items-center gap-2 rounded-full bg-red-600 px-5 text-xs font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-lg sm:px-6"
            >
              <span className="hidden sm:inline">Get A Free Quote</span>
              <span className="sm:hidden">Quote</span>

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
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
                            <div className="mx-auto max-w-7xl px-4 text-center relative z-10 pt-24 pb-12 bg-black">
                      {/* Logo Section */}
                      <div className="flex justify-center items-center gap-1">
                        <img
                          src="/images/Dev-App-04.png"
                          alt="Dev App Grid"
                          className="w-44 sm:w-48"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-around py-6 my-6 gap-4">
                        <div className="text-left sm:text-left">
                          <span className="text-[14px] text-gray-300 font-medium">
                            Always Connect With Us!
                          </span>
                          <div className="flex items-center gap-3 text-gray-400 mt-3">
                            <a
                              href="#"
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                            >
                              <FaFacebookF size={14} />
                            </a>
                            <a
                              href="#"
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                            >
                              <FaInstagram size={14} />
                            </a>
                            <a
                              href="#"
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors"
                            >
                              <FaLinkedinIn size={14} />
                            </a>
                          </div>
                        </div>
        
                        {/* Direct Phone */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                            <Phone size={17} />
                          </div>
                          <div className="text-left">
                            <p className="text-[15px] sm:text-[16px] font-bold text-white leading-tight">
                              +1 (844) 673 6849
                            </p>
                            <p className="text-[11px] text-red-500 font-semibold tracking-wide uppercase mt-0.5">
                              Call Us Today!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="py-8">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                          Let's work together!
                        </h2>
                        <div>
                          <Link
                            href="/request-a-quote"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium text-[15px] px-10 py-4 rounded-full shadow-lg transition-colors"
                          >
                            Get A Free Quote
                          </Link>
                        </div>
                        <div className="flex items-center gap-6 text-sm justify-end">
                          <Link
                            href="/terms-and-conditions"
                            className="text-gray-600 hover:text-red-600 transition-colors underline underline-offset-4"
                          >
                            Terms & Conditions
                          </Link>
        
                          <Link
                            href="/privacy-policy"
                            className="text-gray-600 hover:text-red-600 transition-colors underline underline-offset-4"
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
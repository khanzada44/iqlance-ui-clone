import Link from "next/link";
import {
  Phone,
  ArrowRight,
  FileText,
  UserCheck,
  Briefcase,
  CreditCard,
  Copyright,
  ShieldCheck,
  AlertCircle,
  Scale,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HEADER */}
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
                  +1 (866) 978-8570
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-red-600">
                  Call Us Today!
                </p>
              </div>
            </div>

            {/* QUOTE BUTTON */}
            <Link
              href="/request-a-quote"
              className="group flex h-10 items-center gap-2 rounded-full bg-red-600 px-5 text-xs font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-lg sm:px-6"
            >
              <span className="hidden sm:inline">
                Get A Free Quote
              </span>

              <span className="sm:hidden">
                Quote
              </span>

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-linear-to-r from-red-700 via-red-600 to-red-900 py-16 text-white sm:py-20">
        <div className="mx-auto w-[92%] max-w-5xl text-center">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <FileText size={16} className="text-red-200" />
            <span>Terms of Service</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-red-100 sm:text-base">
            Please review the terms and conditions that govern the use of
            Dev App Grid services and your relationship with our company.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="mx-auto mt-10 mb-10 w-[92%] max-w-6xl">
          <div className="space-y-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:p-12">

            {/* INTRODUCTION */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <span className="h-2 w-2 rounded-full bg-red-600"></span>
                Introduction
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Welcome to Dev App Grid. These Terms & Conditions govern
                your use of our website, software development services,
                applications, and other services provided by Dev App Grid.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                By accessing our website or engaging our services, you
                acknowledge that you have read, understood, and agreed to
                these Terms & Conditions. If you do not agree with any part
                of these terms, you should not use our services.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* SERVICES */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <Briefcase className="text-red-600" size={20} />
                Our Services
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Dev App Grid provides software development and technology
                services that may include website development, web
                applications, mobile applications, UI/UX design, custom
                software development, maintenance, consultation, and other
                technology-related services.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                The exact scope, features, deliverables, timeline, and
                technical requirements of a project will be determined and
                agreed upon between Dev App Grid and the client before
                development begins.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* CLIENT RESPONSIBILITIES */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <UserCheck className="text-red-600" size={20} />
                Client Responsibilities
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Clients are responsible for providing accurate information,
                content, materials, credentials, feedback, and other
                resources required for the successful completion of a
                project.
              </p>

              <ul className="ml-5 list-disc space-y-3 text-[15px] leading-7 text-gray-600 sm:text-base">
                <li>
                  Providing accurate project requirements and information.
                </li>
                <li>
                  Providing required content, images, branding assets, and
                  other materials in a timely manner.
                </li>
                <li>
                  Reviewing project milestones and providing reasonable
                  feedback.
                </li>
                <li>
                  Ensuring that provided content and materials do not violate
                  applicable laws or third-party rights.
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* PROJECT TIMELINE */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <AlertCircle className="text-red-600" size={20} />
                Project Timeline
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Project timelines are estimated based on the agreed scope
                and requirements. Delays caused by changes in requirements,
                delayed client feedback, unavailable resources, third-party
                services, or circumstances outside our reasonable control
                may affect the estimated delivery date.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* PAYMENTS */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <CreditCard className="text-red-600" size={20} />
                Payments & Fees
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Project fees, payment schedules, milestones, and other
                applicable charges will be communicated and agreed upon
                before or during project engagement.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Work may be paused or delayed if agreed payments are not
                received according to the applicable payment schedule.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Any additional features, revisions, integrations, or
                requirements outside the original project scope may result
                in additional charges.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* CHANGES & REVISIONS */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <FileText className="text-red-600" size={20} />
                Changes & Revisions
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Changes requested after approval of a design, feature,
                milestone, or project scope may require additional time or
                cost depending on the complexity of the requested changes.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Major changes to an approved project scope may be treated as
                a separate development requirement.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* INTELLECTUAL PROPERTY */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <Copyright className="text-red-600" size={20} />
                Intellectual Property
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Unless otherwise agreed in writing, ownership and usage
                rights relating to project deliverables will be transferred
                or granted to the client according to the terms of the
                applicable project agreement and payment completion.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Third-party libraries, frameworks, plugins, fonts, stock
                assets, APIs, and other third-party materials remain subject
                to their respective licenses and terms.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Dev App Grid retains ownership of its pre-existing tools,
                reusable components, frameworks, development processes,
                know-how, and internal technologies unless otherwise agreed
                in writing.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* CONFIDENTIALITY */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <ShieldCheck className="text-red-600" size={20} />
                Confidentiality
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Dev App Grid respects the confidentiality of client
                information, business information, project requirements,
                credentials, source code, and other confidential materials
                shared during a project.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Confidential information will not knowingly be disclosed to
                unauthorized parties except where disclosure is required by
                law, necessary to provide agreed services, or authorized by
                the client.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* THIRD PARTY SERVICES */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <AlertCircle className="text-red-600" size={20} />
                Third-Party Services
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Projects may depend on third-party services such as hosting
                providers, payment processors, domain registrars, cloud
                platforms, APIs, plugins, analytics services, or other
                external technologies.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Dev App Grid is not responsible for interruptions, policy
                changes, pricing changes, outages, security incidents, or
                other issues caused directly by third-party service
                providers.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* ACCEPTABLE USE */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <UserCheck className="text-red-600" size={20} />
                Acceptable Use
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                You agree not to use our website or services for unlawful,
                fraudulent, abusive, malicious, or unauthorized activities.
              </p>

              <ul className="ml-5 list-disc space-y-3 text-[15px] leading-7 text-gray-600 sm:text-base">
                <li>
                  Attempting to gain unauthorized access to systems or data.
                </li>
                <li>
                  Using our services for illegal activities.
                </li>
                <li>
                  Distributing malicious software or harmful code.
                </li>
                <li>
                  Violating the intellectual property or privacy rights of
                  others.
                </li>
                <li>
                  Interfering with the operation or security of our website
                  or services.
                </li>
              </ul>
            </section>

            <hr className="border-gray-100" />

            {/* WARRANTIES */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <ShieldCheck className="text-red-600" size={20} />
                Service Warranty & Disclaimer
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                We make reasonable efforts to deliver services according to
                the agreed requirements and professional standards.
                However, software and technology services may depend on
                third-party systems, infrastructure, operating systems,
                browsers, APIs, and other factors outside our direct control.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Except where expressly stated in a written agreement, our
                services are provided without guarantees regarding
                uninterrupted availability, compatibility with every
                third-party system, or specific business results.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* LIMITATION OF LIABILITY */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <Scale className="text-red-600" size={20} />
                Limitation of Liability
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                To the extent permitted by applicable law, Dev App Grid
                shall not be liable for indirect, incidental, consequential,
                special, or unforeseeable losses arising from the use of our
                website, services, software, or third-party services.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Nothing in these Terms & Conditions is intended to exclude
                liability that cannot legally be excluded under applicable
                law.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* TERMINATION */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <AlertCircle className="text-red-600" size={20} />
                Termination
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Either party may request termination of a project subject to
                the applicable project agreement and any outstanding
                obligations.
              </p>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Any completed work, approved milestones, third-party
                expenses, or other outstanding amounts may remain payable
                following termination.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* PRIVACY */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <ShieldCheck className="text-red-600" size={20} />
                Privacy
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Your use of our services is also subject to our Privacy
                Policy, which explains how we collect, use, and protect
                personal information.
              </p>

              <Link
                href="/privacy-policy"
                className="inline-flex font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                View Privacy Policy
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </section>

            <hr className="border-gray-100" />

            {/* CHANGES */}
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <FileText className="text-red-600" size={20} />
                Changes to These Terms
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                Dev App Grid reserves the right to update or modify these
                Terms & Conditions when necessary. Updated terms will be
                published on this page, and continued use of our services
                after changes are published may constitute acceptance of the
                updated terms.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* CONTACT */}
            <section className="rounded-2xl bg-slate-50 p-6 sm:p-8">
              <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Contact Us
              </h2>

              <p className="text-[15px] leading-7 text-gray-600 sm:text-base">
                If you have any questions about these Terms & Conditions or
                our services, please contact Dev App Grid for further
                information.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    +1 (866) 978-8570
                  </p>

                  <p className="text-xs text-red-600">
                    Call Us Today!
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* FOOTER / CTA */}
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

              <div className="mt-3 flex items-center gap-3 text-gray-400">

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 transition-colors hover:border-red-500 hover:text-red-500 sm:h-10 sm:w-10"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 transition-colors hover:border-red-500 hover:text-red-500 sm:h-10 sm:w-10"
                >
                  <FaInstagram size={14} />
                </a>

                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 transition-colors hover:border-red-500 hover:text-red-500 sm:h-10 sm:w-10"
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

            <Link
              href="/request-a-quote"
              className="inline-block rounded-full bg-red-600 px-10 py-4 text-[15px] font-medium text-white shadow-lg transition-colors hover:bg-red-700"
            >
              Get A Free Quote
            </Link>

            {/* LEGAL LINKS */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">

              <Link
                href="/terms-and-conditions"
                className="text-gray-400 underline underline-offset-4 transition-colors hover:text-red-500"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy-policy"
                className="text-gray-400 underline underline-offset-4 transition-colors hover:text-red-500"
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
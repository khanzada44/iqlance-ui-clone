"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../contactForm/ContactForm";
import { features } from "./data";
import { stats, partners, faqsData } from "../../../../utils/data";
export default function whyIqlance() {
  const [open, setOpen] = useState(-1);
  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <div className="mt-2 pt-2">
          <img
            src="/images/why-us-header-banner.png"
            alt="Why Us Banner"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-full text-center mt-14">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Why Devapp
          </h2>
          <p className="text-base font-medium mt-1">
            Because a strong MVP needs more than a development team
          </p>
          <p className="mt-6 text-black text-lg leading-8">
            At Devapp, we combine product thinking, technical expertise, and execution to help businesses turn early-stage ideas into products people can actually use. We don't believe in stuffing an MVP with every possible feature. Instead, we identify what can create the most value, build it well, and give you a foundation that can grow with your business.

          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
            >
              Contact Us
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-lg font-semibold text-black transition  hover:bg-gray-100"
            >
              See Our Work
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </div>

        <div className="w-full text-center mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Turning Your Idea Into a Product People Actually Use
          </h2>
          <p className="mt-6 text-black text-sm leading-6">
            We don't just build mobile apps; we build unique concepts that help businesses
            show up stronger online, run more efficiently, and genuinely connect with their users.
            Our developers bring real expertise to Android, iOS, and cross-platform app
            development, and that expertise shows in every product we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mt-24">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="relative min-h-55 rounded-3xl border border-[#E7E7E7] bg-white px-6 pt-20 pb-8"
              >
                {/* Floating Icon */}
                <div className="absolute -top-8 right-0 w-20 h-20 rounded-[20px] border border-[#E7E7E7] bg-white flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt="stat icon"
                    className="w-10 h-10 text-[#4B5563]"
                  />
                </div>

                <h3 className="text-[40px] font-bold text-[#3B3F4A] leading-none">
                  {item.value}
                </h3>

                <p className="mt-3 text-lg leading-[1.6] text-black">
                  {item.line1}
                  <br />
                  {item.line2}
                </p>
              </div>
            );
          })}
        </div>

        <section className="w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                A Development Company Businesses Actually Trust
              </h2>

              <p className="text-gray-700 text-sm leading-6 mb-4">
                Devapp Solutions has earned its place as a leading software,
                web, and mobile app development company,
                with deep experience building technology solutions that are both
                visually striking and secured end-to-end. We bring real industry expertise
                together with a carefully planned approach, all built to push your business forward
              </p>

              <p className="text-gray-700 text-sm leading-6 mb-6">
                As a leading mobile app and software development company in the USA,
                Devapp has spent years mastering the art of customizing and innovating
                apps that actually work. We dig deep into research before writing a single
                line of code, because understanding your app's real needs is where great
                products start. We push ourselves to stay ahead of the curve, using top-tier
                technology to deliver products that feel current, not dated. It's why businesses
                keep recommending us as a development partner, and why we work hard to make the
                entire process feel smooth from start to finish.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Your app idea stays protected, always
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                     Communication that's clear, not confusing  
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    A development process you can actually see into

                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Every design gets verified before it moves forward
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Delivery that happens on time, every time

                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ChevronRight size={14} />
                  <span className="text-lg font-medium text-gray-800">
                    Quality that's never left to chance
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/images/part-b-whyus.jpg"
                alt="Trusted Partners"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-2">
          <p className="text-center text-gray-600 text-lg mb-2">
              Mobile App & Web Development, All Under One Roof
          </p>

          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Leading App Development Company in the USA
          </h2>

          <p className="w-full text-center text-gray-700 text-lg leading-7 mb-4">
            Devapp stands as one of the fastest-growing app development companies, 
            with a full team of developers, designers, testers, business developers, 
            and marketers all working together under one roof. Our multiplatform mobile app services 
            scale to fit anyone, from large enterprises to small and medium businesses. 
            We focus on delivering custom mobile apps, high-quality products, 
            and interactive UI/UX that set us apart from other app development companies in the USA.
          </p>

          <p className="w-full text-center text-gray-700 text-lg leading-7 mb-6">
           Got an amazing idea for a web or mobile app?
            You can count on us to bring it to life, from first concept to finished product.
          </p>

          <p className="text-center text-xl text-gray-800 mb-6 font-medium">
            Latest technology features find a way into our daily business
            practices that helps us stand out.
          </p>

          <div className="flex justify-center">
            <img
              src="/images/top-company-whyus.jpg"
              alt="App Development"
              className="w-full  shadow-lg object-cover"
            />
          </div>
        </section>
        <div className="w-full space-y-16 mt-5">
          {/* Top Banner Box */}
          <div className="bg-red-50 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
                See How We Turn Your Idea Into an Innovative Product
              </h2>
              <p className="mt-4 text-gray-700 text-base md:text-lg">
                Our portfolio does the talking here, it's the reason businesses across 
                the USA see us as one of the top app development companies around.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                See Our Work
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>

          {/* Bottom Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                10 Reasons to Choose Devapp
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
             Growth doesn't happen by accident, it happens when the right team is behind the wheel. 
             That's the mission we've built our entire company around, like helping businesses 
             grow through digital solutions shaped around what makes them different.
            </p>
          </div>
        </div>

        <section className="w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 hover:shadow-lg transition duration-300 bg-white"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                />

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-600 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
             Ready to Get Started?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              The best time to talk about your idea is before someone else builds it first. Call us today for a free consultation, and let's see where we can take it.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-400 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5  transition-colors"
                >
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>info@iqlance.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className=" transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className=" transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Let’s Discuss
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white w-full">
          <div className="text-center">
            <h2 className="text-2xl md:text-[35px] font-bold text-[#1F2937]">
                Still Weighing Your Options? Here's What Sets Us Apart
            </h2>

            <p className="mt-6 text-lg md:text-[20px] leading-8 text-[#4B5563] w-full">
              Take a look at what Devapp Solutions brings to the table: our services, 
              our step-by-step process for mobile app and software development, 
              and what clients have to say after working with us. When you're ready to move forward, 
              reach out and let's turn your next great idea into something real.
            </p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="w-full px-5">
            <h2 className="text-4xl font-bold text-center">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-center text-[17px] text-gray-600 w-full mx-auto">
              Find answers to common questions about our app and software
              development services and learn how we can help turn your idea into
              a successful digital product.
            </p>

            <div className="mt-12 space-y-4">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex justify-between items-center px-5 py-5 text-left"
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    {open === index ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </button>

                  {open === index && (
                    <div className="px-5 pb-5 text-[16px] leading-8 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-4xl font-bold">
                Have Something in Mind? Let's Talk
              </h3>

              <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-gray-600">
                Have a look at the services and development process of the
                iQlance solution. See what process we follow for mobile app and
                software development. Have a look at how we are praised by our
                clients. Start a conversation to innovate your next great idea
                into reality with us.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-2.5 pb-2 mt-2 w-full">
          <ContactForm />
        </div>
      </div>
      <section className="mb-5 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...partners, ...partners].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-35 h-17.5 sm:w-42.5 sm:h-20 md:w-55 md:h-23.75 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-3 shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

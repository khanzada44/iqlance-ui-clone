"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { faqsData } from "../faqs/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { stats , partners} from "../../../../utils/data";
import Link from "next/link";

export default function faqs() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <div className="mt-4">
          <img
            src="/images/faqs-header-photo.jpg"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>

        <section className="py-10">
          <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-blue-800 leading-tight">
            FAQs
          </h1>
          <p className="flex items-center justify-center text-xl font-bold text-black leading-tight mt-1">
            Got questions?
          </p>
          <p className="flex items-center justify-center text-xl font-bold text-black leading-tight">
            We have got answers!
          </p>
          <p className="flex items-center justify-center text-center text-black text-[18px] mt-2">
            At iQlance Solution, we address every mobile initiative with a
            unique approach. We are innovators of great ideas. To develop
            exclusive applications for your Business. This amazing development
            process begins by solving your doubts regarding any type of
            confusion towards app development.
          </p>
          <p className="flex items-center justify-center text-center text-black  text-[18px] mt-3">
            Your questions are as valuable as your ideas are for us! We are here
            to consult and answer your questions regarding app and software
            development. Get in touch with us today. Let's collaborate to make
            your success a step forward.{" "}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto bg-[#0C4A8A] hover:bg-[#083b70] text-white px-8 py-4 text-sm font-semibold flex items-center justify-center gap-3 transition"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto bg-[#eef0f2] hover:bg-gray-200 text-black px-8 py-4 text-sm font-semibold flex items-center justify-center gap-3 transition"
            >
              See Our Work
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="bg-white">
          <div className="w-full px-5">
            {/* Heading */}
            <h2 className="text-center text-[32px] md:text-[40px] font-bold text-black">
              Offshore Web, Mobile & Software Development Company
            </h2>

            {/* Description */}
            <p className="mt-6 text-center text-[18px] leading-8 text-black">
              iQlance solutions is a leading Software, Web, & Mobile App
              Development Company with a vast area of experience in crafting
              stunning and end to end encrypted technology solutions. We offer
              excellent expertise of the industry followed by an exactly planned
              approach to elevate your growth.
            </p>

            {/* Cards */}
                        <section>
              <div className="flex flex-wrap justify-center gap-7 mt-24 mb-10">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-full sm:w-70 lg:w-35 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-10 pb-6"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-15.5 h-15.5 rounded-2xl border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-11 h-11 object-contain"
                      />
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-black leading-none">
                        {item.value}
                      </h3>

                      <p className="text-sm leading-tight text-black">
                        {item.line1}
                        <br />
                        {item.line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Heading */}
            <div className="mt-12 mb-4 text-center">
              <h2 className="text-[32px] md:text-[42px] font-bold text-black">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-[18px] leading-8 text-[#444]">
                Have Questions related to our app developers Canada or about the
                cost of development? Here are Answers to some common questions
                rising in your mind!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="w-full px-4">
            <div className="space-y-3">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex items-center justify-between px-5 py-5 text-left"
                  >
                    <span className="text-[18px] font-medium text-black">
                      {faq.question}
                    </span>

                    {open === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {open === index && (
                    <div className="px-5 pb-5 text-[17px] leading-8 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 bg-white">
          <div className="w-full px-5 text-center">
            <h2 className="text-3xl md:text-[44px] font-bold text-black">
              Have Something in Mind? Let's Talk
            </h2>

            <p className="mt-2 text-[18px] leading-8 text-[#333]">
              Have a look at the services and development process of the iQlance
              solution. See What process we follow for mobile app and software
              development. Have a look at how we are praised by our clients.
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
          </div>
        </section>

        <div className="mb-3.5">
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

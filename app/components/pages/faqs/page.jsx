"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { stats } from "../about-us/data";
import { faqsData } from "../faqs/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function faqs() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="mt-4">
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/faqs-header-photo.jpg"
            alt=""
          />
        </div>
        <section className="py-10">
          <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-blue-800 leading-tight">
            FAQs
          </h1>
          <p className="flex items-center justify-center text-1xl md:text-1xl font-bold text-black leading-tight">
            Got questions?
          </p>
          <p className="flex items-center justify-center text-1xl md:text-1xl font-bold text-black leading-tight">
            We have got answers!
          </p>
          <p className="flex items-center justify-center text-center text-black leading-tight mt-2">
            At iQlance Solution, we address every mobile initiative with a
            unique approach. We are innovators of great ideas. To develop
            exclusive applications for your Business. This amazing development
            process begins by solving your doubts regarding any type of
            confusion towards app development.
          </p>
          <p className="flex items-center justify-center text-center  text-black leading-tight mt-3">
            Your questions are as valuable as your ideas are for us! We are here
            to consult and answer your questions regarding app and software
            development. Get in touch with us today. Let's collaborate to make
            your success a step forward.{" "}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <button className="w-full sm:w-auto bg-[#0C4A8A] hover:bg-[#083b70] text-white px-8 py-4 rounded-md text-sm font-semibold flex items-center justify-center gap-3 transition">
              Contact Us
              <ArrowRight size={18} />
            </button>

            <button className="w-full sm:w-auto bg-[#eef0f2] hover:bg-gray-200 text-black px-8 py-4 rounded-md text-sm font-semibold flex items-center justify-center gap-3 transition">
              See Our Work
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
        <section className=" bg-white">
          <div className="max-w-7xl mx-auto px-5">
            {/* Heading */}
            <h2 className="text-center text-[40px] font-bold text-black">
              Offshore Web, Mobile & Software Development Company
            </h2>

            {/* Description */}
            <p className="max-w-5xl mx-auto mt-6 text-center text-[18px] leading-8 text-[#333]">
              iQlance solutions is a leading Software, Web, & Mobile App
              Development Company with a vast area of experience in crafting
              stunning and end to end encrypted technology solutions. We offer
              excellent expertise of the industry followed by an exactly planned
              approach to elevate your growth.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-20">
              {stats.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative border border-gray-200 rounded-2xl pt-16 pb-8 px-4"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center">
                      <img
                        src={item.icon}
                        className="w-9 h-9 text-gray-600"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-[20px] font-bold text-[#3C3F4A]">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-[16px] leading-8 text-black">
                      {item.line1}
                      <br />
                      {item.line2}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* FAQ Heading */}
            <div className="mt-2 mb-4 text-center">
              <h2 className="text-[42px] font-bold text-black">
                Frequently Asked Questions
              </h2>

              <p className="max-w-4xl mx-auto mt-4 text-[18px] leading-8 text-[#444]">
                Have Questions related to our app developers Canada or about the
                cost of development? Here are Answers to some common questions
                rising in your mind!
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
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
          <div className="max-w-5xl mx-auto px-5 text-center">
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
    </>
  );
}

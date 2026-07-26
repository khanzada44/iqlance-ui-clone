"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { stats, missionData, faqs } from "../about-us/data";
import Link from "next/link";

export default function About() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="mt-6 pt-2">
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/about-header.png"
            alt=""
          />
        </div>
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-6xl px-6 text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E63B8]">
              About iQlance
            </h2>

            {/* Sub Heading */}
            <h3 className="mt-4 text-xl md:text-3xl font-bold text-black">
              Award-Winning App Development Agency
            </h3>

            {/* Paragraph 1 */}
            <p className="mx-auto mt-8 max-w-6xl text-lg md:text-[22px] leading-relaxed text-[#222]">
              iQlance Solutions is a leading software and mobile app development
              company serving clients in the USA. Our team of dedicated
              developers is always eager to innovate customized solutions based
              on your business needs.
            </p>

            {/* Paragraph 2 */}
            <p className="mx-auto mt-10 max-w-6xl text-lg md:text-[22px] leading-relaxed text-[#222]">
              Our highly experienced dedicated developers make us award-winning
              app development agency in the USA. We design solutions that lend
              high levels of client satisfaction.
            </p>

            {/* Buttons */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-[#1E4D8F] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#163d72]"
              >
                Inquiry Now
                <ArrowRight size={22} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-md border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-100"
              >
                See Our Work
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center">
              Trusted Custom Software, Web Mobile App Development Services
            </h2>

            {/* Description */}
            <p className="max-w-4xl mx-auto mt-4 text-center text-[16px] leading-7 text-black">
              iQlance solutions is a leading Software, Web, & Mobile App
              Development Company with a extensive experience in crafting
              stunning and secure, end-to-end technology solutions. We offer
              excellent expertise of the industry followed by an well-planned
              approach to accelerate your business growth.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mt-24">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="relative h-55 rounded-3xl border border-[#E7E7E7] bg-white px-6 pt-24 pb-8"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-25.5 h-25.5 rounded-[20px] border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <img
                        src={item.icon}
                        size={44}
                        strokeWidth={1.5}
                        className="text-[#4B5563]"
                      />
                    </div>

                    <h3 className="text-[46px] font-bold text-[#3B3F4A] leading-none">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-[20px] leading-[1.6] text-black">
                      {item.line1}
                      <br />
                      {item.line2}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-[15px] md:text-[28px] font-bold leading-tight text-black">
                  You Need a Technology Partner, Not Just a Developer
                </h2>

                <p className="mt-4 text-[15px] leading-9 text-[#333]">
                  At iQlance, we believe successful digital products are built
                  through collaboration, strategic planning, and technical
                  expertise. We work closely with our clients to understand
                  their goals and challenges and deliver scalable, user-focused
                  digital solutions.
                </p>

                <p className="mt-1 text-[15px] leading-9 text-[#333]">
                  Our dedicated team of software and app developers in the USA
                  follows a structured approach covering strategy, design,
                  development, testing, and deployment to create customized
                  solutions that drive business growth.
                </p>

                <p className="mt-1 text-[15px] leading-9 text-[#333]">
                  Since 2014, iQlance Solutions has delivered more than 1,500
                  digital products, including software and mobile applications
                  such as Doggy Dates, Bidda, Stable Hub, and Ukitchen. We are
                  proud to have worked with 250+ satisfied clients worldwide.
                </p>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-md bg-[#1F4D8C] px-8 py-4 text-white font-semibold hover:bg-[#173d70] transition"
                >
                  Get in touch
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/why-choose-us-hb.jpg"
                  alt="Technology Partner"
                  width={650}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>

            <p className="max-w-4xl mx-auto mt-4 text-center text-[16px] leading-7 text-gray-700">
              Our mission is to help businesses achieve sustainable growth
              through innovative, secure, and customized digital solutions. We
              combine technology expertise, strategic thinking, and user-focused
              design to solve complex business challenges and create measurable
              value for our clients.
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {missionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-8 min-h-90"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mb-6"
                  />

                  <h3 className="text-[18px] font-semibold text-black mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5">
            {/* Heading */}
            <h2 className="text-center text-4xl font-bold text-black">
              About iQlance
            </h2>

            {/* Content */}
            <div className="max-w-6xl mx-auto mt-8 space-y-8">
              <p className="text-center text-[17px] leading-8 text-[#333]">
                iQlance came into the existence with the aspirations to develop
                customize creative mobile apps that can cater the requirements
                of clients in a cost-effective manner. The company was started
                by two zealous engineers who always wanted to bring the change
                by proving real-world solutions to stand out from the rest of
                competitors. With a hope to reach beyond clouds and big plans
                whirling in the mind, we made our way out and blossomed up with
                many successful business apps. Our excellent industry based
                approach helps to deliver ground breaking mobile apps which
                helped the client to come up with the proficient business.
              </p>

              <p className="text-center text-[17px] leading-8 text-[#333]">
                Today, iQlance is a trusted software and mobile app development
                company serving businesses across the USA, with expertise in
                delivering scalable digital solutions for startups, growing
                businesses, and enterprises. We believe in adopting the latest
                trends as per the user's demand, be it Apple TV, Android wear,
                AR/VR apps, IoT, Beacon, game app and much more; we work with
                every technology. Our mobile-first approach makes us focus on
                your requirements; then we strategize mobile app development
                process to take your business ideas from conceptualization which
                always dominates the position on App store and Play store.
              </p>
            </div>

            {/* Image */}
            <div className="mt-12">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/about-us-iqlance.jpg"
                alt="About iQlance"
                width={1200}
                height={500}
                className="w-full h-65 md:h-105 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-center text-[17px] text-gray-600 max-w-4xl mx-auto">
              Find answers to common questions about our app and software
              development services and learn how we can help turn your idea into
              a successful digital product.
            </p>

            {/* FAQ */}
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
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

            {/* Bottom Section */}
            <div className="mt-20 text-center">
              <h3 className="text-4xl font-bold">
                Have Something in Mind? Let's Talk
              </h3>

              <p className="mt-6 max-w-5xl mx-auto text-[17px] leading-8 text-gray-600">
                Have a look at the services and development process of the
                iQlance solution. See what process we follow for mobile app and
                software development. Have a look at how we are praised by our
                clients. Start a conversation to innovate your next great idea
                into reality with us.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-2.5 pb-2">
        <ContactForm />
        </div>
      </div>
    </>
  );
}

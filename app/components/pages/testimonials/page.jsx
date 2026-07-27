import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { stats, testimonialsData } from "../testimonials/data";
export default function testimonials() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/client-header.jpg"
            alt=""
          />
        </div>
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center leading-tight">
              <span className="text-[#3D7BEB]">Words of Praise</span>{" "}
              <span className="text-[#1B2B52]">From All The Hard Work</span>
            </h2>
            <p className="max-w-6xl mx-auto mt-8 text-center text-gray-800 text-base sm:text-lg leading-8">
              Few words as the reward of our unique product development process
              and services given by our valuable clients. Team iQlance solutions
              feel pride and appreciated when given reviews and rates as per
              their hardwork.
            </p>
            <p className="max-w-6xl mx-auto mt-8 text-center text-gray-800 text-base sm:text-lg leading-8">
              iQlance solution has always believed that every emerging is the
              client is not only a solution seeker but is our inspiration to
              face challenges and find an amazing solution that can take the
              purpose of development to the next elevating step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              <button className="w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white font-semibold px-8 py-4 rounded-md transition flex items-center justify-center gap-3">
                Inquiry Now
                <ArrowRight size={20} />
              </button>

              <button className="w-full sm:w-auto border border-gray-300 hover:border-[#184A8B] hover:text-[#184A8B] text-black font-semibold px-8 py-4 rounded-md transition flex items-center justify-center gap-3">
                See Our Work
                <ArrowRight size={20} />
              </button>
            </div>
            <h3 className="mt-20 text-3xl md:text-5xl font-bold text-center text-black leading-tight">
              Offshore Web, Mobile & Software Development Company
            </h3>

            <p className="max-w-6xl mx-auto mt-8 text-center text-gray-700 text-base sm:text-lg leading-8">
              iQlance solutions is a leading Software, Web, & Mobile App
              Development Company with a vast area of experience in crafting
              stunning and end-to-end encrypted technology solutions. We offer
              excellent expertise of the industry followed by an exactly planned
              approach to elevate your growth.
            </p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stats.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative border border-gray-200 rounded-2xl bg-white p-6 pt-14 hover:shadow-lg transition"
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-22 h-22 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
                      <img src={item.icon} alt="" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-xl text-black">{item.title}</p>

                    <p className="text-xl text-black">{item.subtitle}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                What Client Say About Us?
              </h2>

              <p className="max-w-5xl mx-auto mt-6 text-lg text-gray-700 leading-9">
                It Provides Immense Satisfaction In Knowing That, We Did Our Job
                To The Highest Level Of Standards. We Like Even More When Our
                Client Takes Time To Acknowledge Their Satisfaction.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 p-6 hover:shadow-lg transition duration-300 bg-white"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>

                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#F59E0B"
                            stroke="#F59E0B"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700 text-sm leading-6">
                    {item.review}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs text-gray-500 mb-2">Verified by</p>

                    <img
                      src={item.verifiedLogo}
                      alt={item.source}
                      className="h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="mb-10">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

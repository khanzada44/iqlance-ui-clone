"use client";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../our-process/data";
import ContactForm from "../../contactForm/ContactForm";

export default function ourProcess() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="mt-10">
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/our-process-header.png"
            alt=""
          />
        </div>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
                  What makes our development process stand out of the box?
                </h2>

                <p className="mt-8 text-gray-700 text-base md:text-lg leading-8">
                  iQlancers are inventors of great ideas. To make your idea a
                  reality we are devoted to the creation of the product that
                  follows the favorable and easy to understand method which
                  includes all the aspects of app development without hindering
                  anyone's feeling. We are highly dedicated to the transparent
                  app development process.
                </p>

                <button className="mt-10 bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 rounded-md font-semibold flex items-center gap-3 transition">
                  Explore Our Process
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/our-process-right.jpg"
                  alt="Development Process"
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              We Start Here
            </h2>

            <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4">
              Before we convert your great idea into an amazing product, we make
              sure to follow and outline standard process and plan.
            </p>

            <div className="mt-16 space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Card */}
                  <div
                    className={`w-full lg:w-[82%]
                ${index % 2 === 0 ? "mr-auto" : "ml-auto"}
                rounded-xl p-8 lg:p-10`}
                    style={{ background: step.bg }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[70px_90px_1fr_70px] gap-6 items-center">
                      {/* Left Icon */}
                      <div className="flex justify-center">
                        <img
                          src={step.icon}
                          alt=""
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      {/* Number */}
                      <div className="text-center">
                        <h2 className="text-5xl lg:text-6xl font-light">
                          {step.number}
                        </h2>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-gray-700 leading-7">
                          {step.description}
                        </p>
                      </div>

                      {/* Right Icon */}
                      <div className="hidden md:flex justify-center">
                        <img
                          src={step.icon}
                          alt=""
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index !== processSteps.length - 1 && (
                    <img
                      src={step.arrow}
                      alt=""
                      className={`
                    hidden lg:block
                    absolute
                    h-24
                    ${
                      index % 2 === 0
                        ? "right-4 -bottom-14"
                        : "left-4 -bottom-14"
                    }
                  `}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-6 md:py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-black leading-tight">
              Have Something in Mind? Let's Talk
            </h2>

            <p className="mt-6 text-center text-gray-700 text-base md:text-lg leading-7 md:leading-9 max-w-4xl mx-auto">
              Have a look at the services and development process of the iQlance
              solution. See what process we follow for mobile app and software
              development. Have a look at how we are praised by our clients.
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
          </div>
        </section>
              <div className="mt-2 pt-2">
                <ContactForm />
              </div>
      </div>
    </>
  );
}

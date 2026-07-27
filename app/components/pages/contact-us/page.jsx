import { offices } from "../contact-us/data";
import { ArrowRight, Phone } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";

export default function ContactSection() {
  return (
    <>
      <div className="w-[92%] sm:w-[90%] mx-auto">
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side */}
              <div>
                <h2 className="text-4xl font-bold text-[#184A8B]">
                  Contact Us
                </h2>

                <p className="mt-6 text-gray-700">
                  Share Your Project Details on{" "}
                  <span className="font-semibold">info@iqlance.com</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg">Talk To Experts:</h3>

                  <p className="mt-2 text-gray-700">
                    USA: +1 (469) 793-9837 &nbsp;&nbsp; Canada: +1 (647)
                    637-9108
                  </p>
                </div>

                <p className="mt-6 text-gray-600 leading-8">
                  Get in touch with us for app development, software development
                  and Hire Dedicated Developers to bring your product to Reality
                  within your timeline and budget. Let's Collaborate to innovate
                  a prestigious product.
                </p>

                <ul className="mt-8 space-y-5">
                  <li>› 45 minutes of free consultation</li>
                  <li>› A strict non-disclosure policy</li>
                  <li>› Detailed Feature List Document</li>
                  <li>› Action plan to kick start your project</li>
                </ul>

                <button className="mt-10 bg-[#EEF2F7] hover:bg-gray-200 transition px-6 py-3 rounded-md flex items-center gap-3 font-semibold">
                  See Our Work
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Side */}
              <div className="relative">
                {/* Form */}
                <div className="bg-[#EEF5FF] border border-[#BFD3F6] rounded-xl p-6 md:p-8">
                  <h2 className="text-3xl font-bold">
                    Thank You For Reaching Out. Let's Talk!
                  </h2>

                  <p className="mt-4 text-gray-700">
                    Need Forward-thinking software? Get in touch with us.
                  </p>

                  <form className="mt-8 space-y-5">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full bg-transparent border-b border-gray-400 outline-none py-2"
                    />

                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-gray-400 outline-none py-2"
                    />

                    <input
                      type="text"
                      placeholder="Phone*"
                      className="w-full bg-transparent border-b border-gray-400 outline-none py-2"
                    />

                    <textarea
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      className="w-full bg-transparent border-b border-gray-400 outline-none resize-none py-2"
                    />

                    <input type="file" className="text-sm" />

                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" />
                      Please Send NDA
                    </label>

                    <button
                      type="submit"
                      className="bg-[#184A8B] hover:bg-[#143b72] transition text-white px-8 py-3 rounded-md font-semibold"
                    >
                      Schedule a free consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className="mt-20 text-center">
              <h2 className="text-4xl font-bold">Our Office</h2>

              <p className="max-w-5xl mx-auto mt-6 text-gray-600 leading-8">
                To better serve our clients, iQlance Solutions has opened
                locations throughout the world. Our diversified geographic
                presence allows us to provide superior services on a global
                scale, from USA, Toronto, Canada, London, New York, and
                Australia.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 font-semibold">
                <span className="flex gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/teams.svg"
                    alt=""
                  />{" "}
                  iQlance
                </span>

                <span className="flex gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                    alt=""
                  />{" "}
                  info@iqlance.com
                </span>

                <span className="flex gap-2">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/calendar.svg"
                    alt=""
                  />{" "}
                  schedule meeting
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white shadow-sm hover:shadow-lg transition rounded-md p-10 text-center"
                >
                  {office.title && (
                    <h4 className="text-2xl font-bold mb-6">{office.title}</h4>
                  )}

                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-24 h-24 mx-auto object-contain"
                  />

                  <h3 className="text-4xl font-bold mt-6">{office.city}</h3>

                  <p className="text-gray-600 mt-5 leading-8">
                    {office.address}
                  </p>

                  {office.phone && (
                    <div className="flex justify-center items-center gap-2 mt-8 text-2xl font-semibold">
                      <Phone size={24} />
                      <span>{office.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-2 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-black leading-tight">
              Have Something in Mind? Let's Talk
            </h2>

            <p className="mt-8 text-center text-gray-700 text-base md:text-xl leading-8 md:leading-10 max-w-5xl mx-auto">
              Have a look at the services and development process of the iQlance
              solution. See what process we follow for mobile app and software
              development. Have a look at how we are praised by our clients.
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
          </div>
        </section>
        <div className="mb-2.5 pb-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

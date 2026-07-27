import Link from "next/link";
import { ArrowRight, ChevronRight, Paperclip } from "lucide-react";
import { features, comparisonData } from "../engagement-model/data";

export default function EngagementSection() {
  return (
    <>
      <div className="w-[92%] sm:w-[90%] mx-auto">
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-[#2F67C8]">Engagement</span>{" "}
                  <span className="text-[#13294B]">Model</span>
                </h2>

                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold">
                  Process-driven Methodology, Result-driven Solutions
                </h3>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-gray-700">
                  iQlance Solutions is a trusted software and app development
                  company focused on building long-term professional
                  relationships with our clients. Our experienced development
                  team believes that choosing the right engagement model is
                  essential for delivering high-quality solutions, maintaining
                  transparency, and achieving successful project outcomes.
                </p>

                <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-gray-700">
                  As an experienced mobile app and software development company,
                  iQlance offers three flexible engagement models to meet
                  different project requirements, budgets, and business goals.
                  These models are all dependent on the type of solution you are
                  looking for. Get consulted today to select your best
                  engagement model.
                </p>

                <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 inline-block lg:block text-left">
                  {features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-[#2F67C8] shrink-0" />
                      <span className="text-base sm:text-lg md:text-xl font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10 items-center lg:items-start">
                  <Link
                    href="/contact"
                    className="bg-[#1D4F91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold flex items-center justify-center gap-3 hover:bg-[#173c6d] w-full sm:w-auto"
                  >
                    Contact Us
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="border border-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 w-full sm:w-auto"
                  >
                    See Our Work
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="bg-[#EEF5FF] border border-[#C9D8F5] rounded-3xl p-5 sm:p-8 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Request a Free Quote
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                    Guaranteed Response within One Business Day!
                  </p>

                  <form className="mt-6 sm:mt-10 space-y-5 sm:space-y-7">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full bg-transparent border-b border-gray-500 outline-none pb-3 text-sm sm:text-base"
                    />

                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-gray-500 outline-none pb-3 text-sm sm:text-base"
                    />

                    <input
                      type="text"
                      placeholder="Phone*"
                      className="w-full bg-transparent border-b border-gray-500 outline-none pb-3 text-sm sm:text-base"
                    />

                    <textarea
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      className="w-full bg-transparent border-b border-gray-500 outline-none resize-none text-sm sm:text-base"
                    />

                    <div className="flex items-center gap-3 flex-wrap">
                      <Paperclip size={18} className="shrink-0" />
                      <input type="file" className="text-sm max-w-full" />
                    </div>

                    <label className="flex items-center gap-3 text-sm sm:text-base">
                      <input type="checkbox" />
                      <span>Please Send NDA</span>
                    </label>

                    <button
                      type="submit"
                      className="bg-[#1D4F91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[#173c6d] w-full sm:w-auto"
                    >
                      Schedule a free consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-2 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            {/* Top Section */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/engagement-model-lefts.jpg"
                  alt="Engagement Model"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-black">
                  What is Your Engagement Model?
                </h2>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-gray-600">
                  As your technology partner, iQlance offers three flexible
                  engagement models designed to meet different project
                  requirements and business needs. Whether you have a clearly
                  defined project scope or are still refining your idea, our
                  team can help you choose the right engagement model.
                </p>

                <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-gray-600">
                  Our experts are here to guide you through the process. iQlance
                  offers a free 30-minute consultation with an experienced
                  expert to help you clarify your product vision, development
                  requirements, and project goals. Get in touch with us today!
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="mt-10 sm:mt-14 overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[640px] border border-gray-300 text-center">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-3 sm:p-6 bg-white w-40 sm:w-64">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/ct/iq-logo-ct.svg"
                          alt="Logo"
                          width={100}
                          height={35}
                          className="w-20 sm:w-[120px] h-auto"
                        />
                        <p className="mt-2 font-bold text-base sm:text-xl md:text-2xl">
                          Engagement Model
                        </p>
                      </div>
                    </th>

                    <th className="border border-gray-300 bg-[#F6F7FF] p-3 sm:p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/emodel-hourly-icn.png"
                          alt=""
                          width={35}
                          height={35}
                          className="w-8 sm:w-[45px] h-auto"
                        />
                        <span className="mt-2 sm:mt-3 font-semibold text-xs sm:text-base">
                          Time and Material
                        </span>
                      </div>
                    </th>

                    <th className="border border-gray-300 bg-[#F6F7FF] p-3 sm:p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/fixbg-icn-em.png"
                          alt=""
                          width={35}
                          height={35}
                          className="w-8 sm:w-[45px] h-auto"
                        />
                        <span className="mt-2 sm:mt-3 font-semibold text-xs sm:text-base">
                          Fixed
                        </span>
                      </div>
                    </th>

                    <th className="border border-gray-300 bg-[#F6F7FF] p-3 sm:p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/dedicated-icn-em.png"
                          alt=""
                          width={35}
                          height={35}
                          className="w-8 sm:w-[45px] h-auto"
                        />
                        <span className="mt-2 sm:mt-3 font-semibold text-xs sm:text-base">
                          Dedicated
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 text-left px-3 sm:px-5 py-3 sm:py-4 font-medium text-sm sm:text-base">
                        {row.title}
                      </td>

                      <td className="border border-gray-300 py-3 sm:py-4 text-sm sm:text-base">
                        {row.time}
                      </td>

                      <td className="border border-gray-300 py-3 sm:py-4 text-sm sm:text-base">
                        {row.fixed}
                      </td>

                      <td className="border border-gray-300 py-3 sm:py-4 text-sm sm:text-base">
                        {row.dedicated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

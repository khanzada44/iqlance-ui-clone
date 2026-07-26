import Link from "next/link";
import { ArrowRight, ChevronRight, Paperclip } from "lucide-react";
import { features, comparisonData } from "../engagement-model/data";

export default function EngagementSection() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <section className="py-2 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <h2 className="text-5xl font-bold">
                  <span className="text-[#2F67C8]">Engagement</span>{" "}
                  <span className="text-[#13294B]">Model</span>
                </h2>

                <h3 className="mt-6 text-2xl font-semibold">
                  Process-driven Methodology, Result-driven Solutions
                </h3>

                <p className="mt-6 text-lg leading-9 text-gray-700">
                  iQlance Solutions is a trusted software and app development
                  company focused on building long-term professional
                  relationships with our clients. Our experienced development
                  team believes that choosing the right engagement model is
                  essential for delivering high-quality solutions, maintaining
                  transparency, and achieving successful project outcomes.
                </p>

                <p className="mt-8 text-lg leading-9 text-gray-700">
                  As an experienced mobile app and software development company,
                  iQlance offers three flexible engagement models to meet
                  different project requirements, budgets, and business goals.
                  These models are all dependent on the type of solution you are
                  looking for. Get consulted today to select your best
                  engagement model.
                </p>

                <ul className="mt-8 space-y-5">
                  {features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-[#2F67C8]" />
                      <span className="text-xl font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-5 mt-10">
                  <Link
                    href="/contact"
                    className="bg-[#1D4F91] text-white px-8 py-4 rounded-md font-semibold flex items-center gap-3 hover:bg-[#173c6d]"
                  >
                    Contact Us
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="border border-gray-300 px-8 py-4 rounded-md font-semibold flex items-center gap-3 hover:bg-gray-50"
                  >
                    See Our Work
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="bg-[#EEF5FF] border border-[#C9D8F5] rounded-3xl p-8 shadow-sm">
                  <h3 className="text-4xl font-bold">Request a Free Quote</h3>

                  <p className="mt-4 text-lg">
                    Guaranteed Response within One Business Day!
                  </p>

                  <form className="mt-10 space-y-7">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full bg-transparent border-b border-gray-500 outline-none pb-3"
                    />

                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-gray-500 outline-none pb-3"
                    />

                    <input
                      type="text"
                      placeholder="Phone*"
                      className="w-full bg-transparent border-b border-gray-500 outline-none pb-3"
                    />

                    <textarea
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      className="w-full bg-transparent border-b border-gray-500 outline-none resize-none"
                    />

                    <div className="flex items-center gap-3">
                      <Paperclip size={18} />
                      <input type="file" />
                    </div>

                    <label className="flex items-center gap-3">
                      <input type="checkbox" />
                      <span>Please Send NDA</span>
                    </label>

                    <button
                      type="submit"
                      className="bg-[#1D4F91] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#173c6d]"
                    >
                      Schedule a free consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" mb-2 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            {/* Top Section */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/engagement-model-lefts.jpg"
                  alt="Engagement Model"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div>
                <h2 className="text-[38px] font-bold text-black">
                  What is Your Engagement Model?
                </h2>

                <p className="mt-5 text-[17px] leading-8 text-gray-600">
                  As your technology partner, iQlance offers three flexible
                  engagement models designed to meet different project
                  requirements and business needs. Whether you have a clearly
                  defined project scope or are still refining your idea, our
                  team can help you choose the right engagement model.
                </p>

                <p className="mt-6 text-[17px] leading-8 text-gray-600">
                  Our experts are here to guide you through the process. iQlance
                  offers a free 30-minute consultation with an experienced
                  expert to help you clarify your product vision, development
                  requirements, and project goals. Get in touch with us today!
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="mt-14 overflow-x-auto">
              <table className="w-full border border-gray-300 text-center">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-6 bg-white w-64">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/ct/iq-logo-ct.svg"
                          alt="Logo"
                          width={120}
                          height={40}
                        />
                        <p className="mt-2 font-bold text-2xl">
                          Engagement Model
                        </p>
                      </div>
                    </th>

                    <th className="border border-gray-300 bg-[#F6F7FF] p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/emodel-hourly-icn.png"
                          alt=""
                          width={45}
                          height={45}
                        />
                        <span className="mt-3 font-semibold">
                          Time and Material
                        </span>
                      </div>
                    </th>

                    <th className="border border-gray-300 bg-[#F6F7FF] p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/fixbg-icn-em.png"
                          alt=""
                          width={45}
                          height={45}
                        />
                        <span className="mt-3 font-semibold">Fixed</span>
                      </div>
                    </th>

                    <th className="border border-gray-300 bg-[#F6F7FF] p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://www.iqlance.com/wp-content/themes/iqlance/img/dedicated-icn-em.png"
                          alt=""
                          width={45}
                          height={45}
                        />
                        <span className="mt-3 font-semibold">Dedicated</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 text-left px-5 py-4 font-medium">
                        {row.title}
                      </td>

                      <td className="border border-gray-300 py-4">
                        {row.time}
                      </td>

                      <td className="border border-gray-300 py-4">
                        {row.fixed}
                      </td>

                      <td className="border border-gray-300 py-4">
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

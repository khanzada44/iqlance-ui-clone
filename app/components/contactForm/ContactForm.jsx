"use client";

export default function ContactForm() {
  return (
    <div className="max-w-7xl mx-auto bg-[#F7F8FA]">
      <div className="grid lg:grid-cols-2">
        <div className="border border-gray-200 p-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold">
                {" "}
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                  alt=""
                />{" "}
                Dallas, USA
              </h4>
              <p className="font-bold mt-1">+1 469 793 9837</p>
            </div>

            <div>
              <h4 className="font-semibold">
                {" "}
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                  alt=""
                />{" "}
                Email
              </h4>
              <p className="font-bold mt-1">info@iqlance.com</p>
            </div>

            <div>
              <h4 className="font-semibold">
                {" "}
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                  alt=""
                />{" "}
                New York, USA
              </h4>
              <p className="font-bold mt-1">+1 917 477 8991</p>
            </div>

            <div>
              <h4 className="font-semibold">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/teams.svg"
                  alt=""
                />{" "}
                Teams
              </h4>
              <p className="font-bold mt-1">iQlance Solutions</p>
            </div>

            <div>
              <h4 className="font-semibold">
                {" "}
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                  alt=""
                />{" "}
                Canada
              </h4>
              <p className="font-bold mt-1">+1 647 637 9108</p>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <h4 className="font-semibold">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
                  alt=""
                />{" "}
                Dallas
              </h4>

              <p className="font-bold">
                17250 Dallas Pkwy Dallas, TX 75248, USA
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
                  alt=""
                />{" "}
                New York
              </h4>

              <p className="font-bold">
                295 Madison Ave 12th Fl, New York, NY 10017, USA
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
                  alt=""
                />{" "}
                Canada
              </h4>

              <p className="font-bold">
                502-10 Markbrook Lane, Etobicoke, Canada
              </p>
            </div>
          </div>

          <button className="mt-10 bg-[#184A8B] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#123b72] transition flex gap-2">
            Download Company Profile{" "}
            <img
              src="https://www.iqlance.com/wp-content/themes/iqlance/img/download-btn-arrow.svg"
              alt=""
            />
          </button>
        </div>

        <div className="p-8 relative">
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/samedayresponse-badge.png.webp"
            className="absolute top-0 right-5 w-28"
            alt=""
          />

          <h2 className="text-4xl font-bold mb-8">How Can We Help?</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="border p-4 rounded"
            />

            <input
              type="text"
              placeholder="Last Name*"
              className="border p-4 rounded"
            />
          </div>

          <input
            type="email"
            placeholder="Your email address*"
            className="border p-4 rounded w-full mt-5"
          />

          <input
            type="text"
            placeholder="Phone*"
            className="border p-4 rounded w-full mt-5"
          />

          <select className="border p-4 rounded w-full mt-5">
            <option>Select a Service</option>
            <option>Mobile App Development</option>
            <option>Web Development</option>
            <option>AI Development</option>
          </select>

          <textarea
            rows={6}
            placeholder="Message"
            className="border p-4 rounded w-full mt-5"
          ></textarea>

          <label className="flex items-center gap-2 mt-4">
            <input type="checkbox" />
            Subscribe Our Newsletter
          </label>

          <button className="mt-6 bg-[#184A8B] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#123b72] transition">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function ContactForm() {
  return (
    <div className="max-w-7xl mx-auto bg-[#F7F8FA]">
      <div className="grid lg:grid-cols-2">
       <div className="border border-gray-200 p-5 md:p-8">
  {/* Contact Info */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
          alt=""
          className="w-5 h-5"
        />
        Dallas, USA
      </h4>
      <p className="mt-2 font-bold text-gray-800">
        +1 469 793 9837
      </p>
    </div>

    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
          alt=""
          className="w-5 h-5"
        />
        Email
      </h4>
      <p className="mt-2 font-bold break-all text-gray-800">
        info@iqlance.com
      </p>
    </div>

    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
          alt=""
          className="w-5 h-5"
        />
        New York, USA
      </h4>
      <p className="mt-2 font-bold text-gray-800">
        +1 917 477 8991
      </p>
    </div>

    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/teams.svg"
          alt=""
          className="w-5 h-5"
        />
        Teams
      </h4>
      <p className="mt-2 font-bold text-gray-800">
        iQlance Solutions
      </p>
    </div>

    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
          alt=""
          className="w-5 h-5"
        />
        Canada
      </h4>
      <p className="mt-2 font-bold text-gray-800">
        +1 647 637 9108
      </p>
    </div>
  </div>

  {/* Addresses */}
  <div className="mt-10 space-y-6">
    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
          alt=""
          className="w-5 h-5"
        />
        Dallas
      </h4>
      <p className="mt-2 font-bold text-gray-800 leading-7">
        17250 Dallas Pkwy, Dallas, TX 75248, USA
      </p>
    </div>

    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
          alt=""
          className="w-5 h-5"
        />
        New York
      </h4>
      <p className="mt-2 font-bold text-gray-800 leading-7">
        295 Madison Ave, 12th Floor, New York, NY 10017, USA
      </p>
    </div>

    <div>
      <h4 className="flex items-center gap-2 font-semibold text-lg">
        <img
          src="https://www.iqlance.com/wp-content/themes/iqlance/img/address-icn.svg"
          alt=""
          className="w-5 h-5"
        />
        Canada
      </h4>
      <p className="mt-2 font-bold text-gray-800 leading-7">
        502-10 Markbrook Lane, Etobicoke, Canada
      </p>
    </div>
  </div>

  {/* Bottom */}
  <div className="mt-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
    <button className="w-full sm:w-auto bg-[#184A8B] hover:bg-[#123b72] text-white px-6 py-4 rounded-md font-semibold transition flex items-center justify-center gap-3">
      Download Company Profile
      <img
        src="https://www.iqlance.com/wp-content/themes/iqlance/img/download-btn-arrow.svg"
        alt=""
        className="w-5"
      />
    </button>

    <img
      src="https://www.iqlance.com/wp-content/uploads/2024/10/hand-phone-1.webp"
      alt=""
      className="w-24 md:w-28"
    />
  </div>
</div>

        <div className="p-8 relative">
          <img
            src="https://www.iqlance.com/wp-content/uploads/2025/11/badge-sameday-resposnse.png"
            className="absolute -top-11 right-6 w-28 z-10"
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

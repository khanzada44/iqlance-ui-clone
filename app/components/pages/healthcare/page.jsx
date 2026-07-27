import { ArrowRight, Mail, Phone } from "lucide-react";
import { healthcareFeatures } from "../healthcare/data";
import ContactForm from "../../contactForm/ContactForm";

export default function HeroQuoteSection() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <p className="text-lg text-gray-700">USA's Top-Notch</p>

                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#1F4E99]">Healthcare App</span>
                  <br />
                  <span className="text-[#1F4E99]">Development</span>
                  <br />
                  <span className="text-[#1F4E99]">Company</span>
                </h1>

                <h3 className="mt-8 text-2xl font-bold leading-snug">
                  Adoption of Healthcare Apps to move forward towards better
                  decision making!
                </h3>

                <p className="mt-6 text-gray-700 leading-8 text-lg">
                  The healthcare industry is experiencing a massive digital
                  shift, with mobile apps that improve patient care,
                  diagnostics, and real-time communication. We are a leading
                  healthcare app development company, offering exceptional
                  mobile app solutions designed especially for the global
                  healthcare industry. We have proven healthcare industry
                  knowledge with advanced technologies to create secure apps as
                  per HIPAA, HL7, FDA, GDPR, and HITECH guidelines that are
                  scalable and user-friendly.
                </p>

                <ul className="mt-8 space-y-5 text-lg">
                  <li>› 45 minutes of free consultation</li>
                  <li>› A strict non-disclosure policy</li>
                  <li>› Detailed Feature List Document</li>
                  <li>› Action plan to kick start your project</li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button className="w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 rounded-md font-semibold flex justify-center items-center gap-3 transition">
                    Request a Quote
                    <ArrowRight size={18} />
                  </button>

                  <button className="w-full sm:w-auto border border-gray-300 hover:border-[#184A8B] px-8 py-4 rounded-md font-semibold flex justify-center items-center gap-3 transition">
                    See Our Work
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Form */}
              <div className="relative">
                {/* Badge */}
                <img
                  src="https://www.iqlance.com/wp-content/uploads/2025/11/badge-sameday-resposnse.png"
                  alt="Guaranteed"
                  className="absolute -top-12 right-6 w-28 z-10"
                />

                <div className="bg-[#EEF5FF] border border-[#BFD3F6] rounded-2xl shadow-lg p-6 md:p-8">
                  <h2 className="text-3xl font-bold">Request a Free Quote</h2>

                  <p className="mt-3 text-lg">
                    Guaranteed Response within One Business Day!
                  </p>

                  <form className="mt-8 space-y-6">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                    />

                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Phone*"
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none"
                    />

                    <textarea
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      className="w-full bg-transparent border-b border-gray-400 py-3 outline-none resize-none"
                    />

                    <input type="file" className="text-sm" />

                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" />
                      Please Send NDA
                    </label>

                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 rounded-md font-semibold transition"
                    >
                      Schedule a free consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Top Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
              Healthcare Mobile App Development Company for Modern Healthcare
              Solutions
            </h2>

            {/* Top Content */}
            <div className="mt-8 space-y-6 text-center text-gray-700 text-base md:text-lg leading-8">
              <p>
                We develop healthcare apps that help overcome the gap between
                the patients and the doctors and establish a seamless
                transition. It lays down a smooth path to get advanced care and
                better outcomes.
              </p>

              <p>
                Our healthcare app development services include the end-to-end
                process, including designing and developing mobile applications
                for hospitals, clinics, and medtech companies. We specialize in
                building custom solutions for appointment scheduling,
                telemedicine, patient monitoring, and EHR systems. As a trusted
                healthcare app development company, we develop secure, scalable,
                and high-performing mobile solutions.
              </p>

              <p>
                From lowered operation costs to enhanced patient engagement, we
                have a lot of things to offer. We are a world-class healthcare
                app development company that makes use of cutting-edge
                technology to provide a simplified solution. Plus, we are fully
                equipped to take your healthcare projects to the sky with.
              </p>
            </div>

            {/* Image */}
            <div className="mt-12">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/change/healthcare-full-photo.jpg"
                alt="Healthcare Mobile App Development"
                className="w-full rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Bottom Heading */}
            <h2 className="mt-14 text-3xl md:text-5xl font-bold text-center leading-tight">
              Cloud-based Healthcare Mobile App Development Services for
              Scalable and Secure Operations
            </h2>

            {/* Bottom Content */}
            <div className="mt-8 space-y-6 text-center text-gray-700 text-base md:text-lg leading-8">
              <p>
                A cloud-based healthcare solution is necessary for a digital
                medical environment, as it offers real-time access to patient
                data, seamless collaboration between internal teams, lower
                infrastructure costs, and better scalability.
              </p>

              <p>
                As a leading healthcare app development services provider across
                the globe, we have hands-on experience in building custom
                cloud-based healthcare apps, including EHR, EMR, telemedicine,
                and more. Moreover, we are fully equipped to build a
                high-quality app that improves diagnosis, patient fitness, and
                medical data interoperability within a pre-decided timeframe.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Let's Take A Deep Dive Into The Extraordinary Features Of The
                  Healthcare App Development Done By Us
                </h2>

                <ul className="mt-8 space-y-6">
                  <li className="flex gap-3">
                    <span className="text-[#184A8B] font-bold">›</span>
                    <p className="text-gray-700 leading-7">
                      <strong>App for your Business niche:</strong> Our highly
                      qualified healthcare app developers first analyze the
                      requirement of the particular niche market through an
                      in-depth search and create the best solution.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#184A8B] font-bold">›</span>
                    <p className="text-gray-700 leading-7">
                      <strong>Instant Access:</strong> Healthcare app
                      development enables patients to receive instant medical
                      guidance using smartphones.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#184A8B] font-bold">›</span>
                    <p className="text-gray-700 leading-7">
                      <strong>Attractive UI + Unbeatable Performance:</strong>
                      Smooth workflow with a clean interface and optimized code.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#184A8B] font-bold">›</span>
                    <p className="text-gray-700 leading-7">
                      <strong>Secured Payment:</strong> Industry-level security
                      and encrypted payment protocols.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#184A8B] font-bold">›</span>
                    <p className="text-gray-700 leading-7">
                      <strong>Branding:</strong> Healthcare apps help improve
                      patient engagement and strengthen brand identity.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Right */}
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/main/apply-change-healthcare.jpg"
                  alt="Healthcare"
                  className="w-full rounded-xl object-cover shadow-md"
                />
              </div>
            </div>

            {/* CTA Box */}

            <div className="mt-20 bg-[#EEF5FF] rounded-xl p-8 md:p-12 text-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt=""
                className="w-16 h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl md:text-4xl font-bold">
                Looking to Hire a Healthcare App Development Team?
              </h2>

              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Partner with us to hire experienced healthcare app developers to
                build secure, scalable and user-friendly mobile solutions
                tailored to your healthcare business needs.
              </p>

              {/* Contact Box */}

              <div className="mt-8 border border-[#184A8B] bg-white rounded-lg p-4 flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span className="font-medium">info@iqlance.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span className="font-medium">
                    US: +1 469 793 9837, CA: +1 647 637 9108
                  </span>
                </div>
              </div>

              <button className="mt-8 bg-[#184A8B] hover:bg-[#143b72] text-white px-8 py-4 rounded-md font-semibold inline-flex items-center gap-3 transition">
                Hire Dedicated Developers
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Features of Healthcare App Development
            </h2>

            <p className="mt-6 max-w-4xl mx-auto text-center text-gray-600 text-base md:text-lg leading-8">
              We craft only top-notch applications that not only help in
              achieving every healthcare solution but also act as a gateway to
              new medical opportunities.
            </p>

            {/* Cards */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="border border-gray-200 rounded-md bg-white hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center justify-center text-center min-h-42.5"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />

                  <h3 className="mt-5 text-base md:text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              ))}
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

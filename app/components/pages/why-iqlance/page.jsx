import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "../../contactForm/ContactForm";
import { stats } from "../about-us/data";
import { features } from "../why-iqlance/data";
export default function whyIqlance() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="mt-2 pt-2">
          <img
            src="https://www.iqlance.com/wp-content/themes/iqlance/img/why-us-header-banner.png"
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto text-center mt-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Why iQlance
          </h2>
          <p>Converting your iDea into Innovative Product</p>
          <p className="mt-6 text-gray-700 text-lg leading-8">
            We are developers of Unique concepts in the form of mobile apps that
            help businesses to enhance their digital presence and make it more
            efficient and engaging. Hire dedicated software and mobile app
            developers from iQlance solutions as they are experts for innovating
            excellence in Android, iOS and cross-platform app development
            services.
          </p>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-[#1E4D8F] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#163d72]"
            >
              Contact Us
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
        <div className="max-w-5xl mx-auto text-center mt-14">
          <h2 className="text-3xl md:text-3xl font-bold text-black">
            Offshore Web, Mobile & Software Development Company
          </h2>
          <p className="mt-6 text-black text-sm leading-6">
            iQlance solutions is a leading Software, Web, & Mobile App
            Development Company with a vast area of experience in crafting
            stunning and end to end encrypted technology solutions. We offer
            excellent expertise of the industry followed by an exactly planned
            approach to elevate your growth.
          </p>
        </div>
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
        <section class="max-w-7xl mx-auto px-6 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold text-gray-900 mb-2">
                We as Trusted Partners
              </h2>

              <p class="text-gray-700 text-lg leading-8 ">
                <span class="font-semibold">
                  iQlance Solution as a leading Mobile App & Software
                  Development Company
                </span>
                in Canada, USA, has gained expertise in customizing and
                innovating apps.
              </p>

              <p class="text-gray-700 text-lg leading-8 ">
                We carry out thru research to understand exactly what your app
                needs. We always push ourselves to deliver extremely trendy
                products by making use of top-notch technologies. As one of the
                most recommended software and app development partner, we try
                our best to deliver a swift experience of the development
                process.
              </p>

              <ul class="space-y-5">
                <li class="flex items-center gap-3">
                  <span class="text-blue-700 text-xl">&#8250;</span>
                  <span class="text-lg font-medium text-gray-800">
                    Security of your App idea.
                  </span>
                </li>

                <li class="flex items-center gap-3">
                  <span class="text-blue-700 text-xl">&#8250;</span>
                  <span class="text-lg font-medium text-gray-800">
                    Fluent communication
                  </span>
                </li>

                <li class="flex items-center gap-3">
                  <span class="text-blue-700 text-xl">&#8250;</span>
                  <span class="text-lg font-medium text-gray-800">
                    Transparent App Development
                  </span>
                </li>

                <li class="flex items-center gap-3">
                  <span class="text-blue-700 text-xl">&#8250;</span>
                  <span class="text-lg font-medium text-gray-800">
                    App Design Verification before Approval
                  </span>
                </li>

                <li class="flex items-center gap-3">
                  <span class="text-blue-700 text-xl">&#8250;</span>
                  <span class="text-lg font-medium text-gray-800">
                    On-Time App Delivery
                  </span>
                </li>

                <li class="flex items-center gap-3">
                  <span class="text-blue-700 text-xl">&#8250;</span>
                  <span class="text-lg font-medium text-gray-800">
                    App Quality is Assured
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/part-b-whyus.jpg"
                alt="Trusted Partners"
                class="w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-2">
          <p class="text-center text-gray-600 text-lg mb-3">
            Mobile app and web development solution under one roof
          </p>

          <h2 class="text-center text-4xl font-bold text-gray-900 mb-2">
            Top App Development Company in Canada
          </h2>

          <p class="max-w-5xl mx-auto text-center text-gray-700 text-lg leading-6 mb-3">
            iQlance being the quickest growing Top Toronto mobile app
            development company, possesses the team of developers, designers,
            Testers, Business Developers, Marketers and much more. The
            development of our multiplatform mobile app services can be useful
            for large enterprise to small and medium business. We strive to
            serve our clients with the customized mobile apps, high quality
            product and interactive UI/UX which helps to differentiate ourselves
            with other mobile app development companies in Canada.
          </p>

          <p class="max-w-5xl mx-auto text-center text-gray-700 text-lg leading-6 mb-3">
            If you have an amazing idea for web or mobile app development, you
            can rely upon us to execute your idea. Our Top app developers in
            Canada understands the need of your mobile app and hence, develops
            the solution that is engaging, visually appealing and user-centric.
            Having released 200+ mobile apps on app store and play store, we
            have inculcated hands-on experience in developing the apps for any
            industrial domain.
          </p>

          <p class="text-center text-xl text-gray-800 mb-5">
            Latest technology features find a way into our daily business
            practices that helps us stand out.
          </p>

          <div class="flex justify-center">
            <img
              src="https://www.iqlance.com/wp-content/themes/iqlance/img/top-company-whyus.jpg"
              alt="App Development"
              class="w-full max-w-5xl rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>
        <section class="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 hover:shadow-lg transition duration-300"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                />

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-600 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-[42px] font-bold text-[#1F2937]">
                Have Something in Mind? Let's Talk
              </h2>

              <p className="mt-8 text-[22px] leading-[1.8] text-[#4B5563] max-w-5xl mx-auto">
                Have a look at the services and development process of the
                iQlance solution. See what process we follow for mobile app and
                software development. Have a look at how we are praised by our
                clients. Start a conversation to innovate your next great idea
                into reality with us.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-2.5 pb-2 mt-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

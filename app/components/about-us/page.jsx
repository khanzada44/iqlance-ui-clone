export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      
      {/* Description */}
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 text-center leading-relaxed">
          iQlance is a leading technology company specializing in web development, 
          mobile applications, and digital marketing solutions. We help businesses 
          transform their ideas into reality with cutting-edge technology.
        </p>
        <p className="mt-4 text-gray-600 text-center leading-relaxed">
          With a team of experienced developers and designers, we deliver 
          high-quality solutions that drive business growth and success.
        </p>
      </div>

      {/* Company Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">COMPANY</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 text-center">
            About Us
          </div>
          <div className="rounded-lg border p-4 text-center">
            Services
          </div>
          <div className="rounded-lg border p-4 text-center">
            Our Process
          </div>
          <div className="rounded-lg border p-4 text-center">
            Engagement Model
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">SERVICES</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4 text-center">
            iOS App Development
          </div>
          <div className="rounded-lg border p-4 text-center">
            Android App Development
          </div>
          <div className="rounded-lg border p-4 text-center">
            Asp.net Development
          </div>
        </div>
      </div>

      {/* Hire Developers Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">HIRE DEDICATED DEVELOPERS</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 text-center">
            Hire Android Developers
          </div>
          <div className="rounded-lg border p-4 text-center">
            Hire .NET Developers
          </div>
        </div>
      </div>

      {/* Industry Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">INDUSTRY</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4 text-center">
            Healthcare
          </div>
          <div className="rounded-lg border p-4 text-center">
            Logistics
          </div>
          <div className="rounded-lg border p-4 text-center">
            Wellness & Fitness
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">SOLUTION</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4 text-center">
            On Demand
          </div>
          <div className="rounded-lg border p-4 text-center">
            Taxi Booking
          </div>
          <div className="rounded-lg border p-4 text-center">
            Restaurant
          </div>
        </div>
      </div>
    </div>
  );
}
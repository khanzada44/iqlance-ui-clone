import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#120e0f] text-white px-4 relative overflow-hidden">
      
      {/* Background Glow Effect for Red Theme */}
      <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none -bottom-20 -right-20"></div>

      <div className="text-center max-w-xl mx-auto relative z-10">
        
        {/* Glowing 404 Number */}
        <h1 className="text-9xl font-black tracking-widest text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          404
        </h1>

        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-gray-100">
            Opps! Page Not Found
          </h2>
        </div>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Red Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            BACK TO HOME
          </Link>
        </div>

      </div>
    </div>
  );
}
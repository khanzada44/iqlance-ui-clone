import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import Script from "next/script";
export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-9999 w-full">
        <Navbar />
      </div>
      <div className="w-full overflow-x-clip flex-1">
        <main className="w-full pt-17">{children}</main>
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=832e42ad-4c5d-4c97-8f07-1e27982ea22a"
          strategy="afterInteractive"
        />
        <Footer />
      </div>
    </div>
  );
}

import Script from "next/script";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import ZendeskWidget from "../components/ZendeskWidget/ZendeskWidget";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18460576382"
      ></script>

      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18460576382');
      `}
      </script> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18460576382"
        strategy="afterInteractive"
      />

      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18460576382');
  `}
      </Script>
      <div className="fixed top-0 left-0 right-0 z-9999 w-full">
        <Navbar />
      </div>
      <div className="w-full overflow-x-clip flex-1">
        <main className="w-full pt-17">{children}</main>
        <Footer />
        <ZendeskWidget />
      </div>
    </div>
  );
}
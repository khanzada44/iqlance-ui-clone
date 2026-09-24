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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-56WZ55LX');
        `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-56WZ55LX"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        />
      </noscript>
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
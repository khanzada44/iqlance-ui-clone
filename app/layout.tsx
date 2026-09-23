import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
// import DisableRightClick from "../app/components/DisableRightClick/DisableRightClick";

export const metadata: Metadata = {
  title: "APP GRID",
  description: "Your trusted partner",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="zendesk-widget"
          src="https://static.zdassets.com/ekr/snippet.js?key=832e42ad-4c5d-4c97-8f07-1e27982ea22a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
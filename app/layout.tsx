import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ZendeskWidget from "../app/components/ZendeskWidget/ZendeskWidget";

export const metadata: Metadata = {
  title: "Devapp GRID",
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
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18460576382"></script>
        {children}
        <ZendeskWidget />
      </body>
    </html>
  );
}
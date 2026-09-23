import type { Metadata } from "next";
import "./globals.css";
import ZendeskWidget from "../app/components/ZendeskWidget/ZendeskWidget";

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
        <ZendeskWidget />
      </body>
    </html>
  );
}
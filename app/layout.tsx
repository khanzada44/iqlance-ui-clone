import type { Metadata } from "next";
import Navbar from "../app/components/navigation/Navbar";
import Footer from "../app/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "iQlance",
  description: "Your trusted partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

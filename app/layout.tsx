import type { Metadata } from "next";
import "./globals.css";
import DisableRightClick from "../app/components/DisableRightClick/DisableRightClick";

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
        <DisableRightClick>
          {children}
        </DisableRightClick>
      </body>
    </html>
  );
}
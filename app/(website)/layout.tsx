import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import FloatingTalkToExpert from "../components/pages/FloatingTalkToExpert/page";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <FloatingTalkToExpert />

      <Footer />
    </>
  );
}
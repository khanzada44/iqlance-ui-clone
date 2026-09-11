import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

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
        <Footer />
      </div>
    </div>
  );
}

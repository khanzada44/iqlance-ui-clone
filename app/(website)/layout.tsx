import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <div className="w-full overflow-x-hidden">
  <div className="fixed top-0 left-0 right-0 z-50">
    <Navbar />
  </div>

  <main className="w-full pt-20 ">
    {children}
  </main>

  <Footer />
</div>
  );
}
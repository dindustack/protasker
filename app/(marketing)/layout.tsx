import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="pt-40 pb-20 px-4 md:px-24">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingLayout;

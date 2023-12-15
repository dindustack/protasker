// import { Logo } from "@/components/logo";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white">
      {/* <Logo /> */}
      <main className="pt-40 pb-20 px-4 md:px-24">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default MarketingLayout;
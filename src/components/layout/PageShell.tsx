import { Navbar } from "@/sections/Navbar";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const PageShell = () => {
  return (
    <div className="bg-gray-50 box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px]">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

import type { ReactNode } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

type PageShellProps = {
  children: ReactNode;
};

export const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="bg-gray-50 box-border caret-transparent flex min-h-screen flex-col overflow-x-hidden outline-[3px]">
      <Navbar />
      <main className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

import { FloatingSupport } from "@/components/FloatingSupport";
import { PageShell } from "@/components/layout/PageShell";

export const App = () => {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-dm_sans">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="fixed box-border caret-transparent outline-[3px] pointer-events-none z-[9999] inset-4"></div>
        <FloatingSupport />
        <PageShell />
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
    </div>
  );
};

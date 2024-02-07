import { ReactNode } from "react";

const StickyHeader = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <header className="bg-[color:var(--background-primary)]/[.65] sticky top-0 z-10 border-b border-[color:var(--background-third)] backdrop-blur-md">
      <h3 className="flex h-[3.313rem] items-center px-4 text-xl font-bold">{title}</h3>
      {children}
    </header>
  );
};
export default StickyHeader;

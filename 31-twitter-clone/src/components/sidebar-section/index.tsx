import { ReactNode } from "react";
import { Link } from "react-router-dom";

const SidebarSection = ({ title, more, children }: { title: string; more?: string; children: ReactNode }) => {
  return (
    <section className="mb-4 rounded-2xl border border-[color:var(--background-secondary)] bg-[color:var(--background-secondary)]">
      <h5 className="flex items-center px-4 py-3 text-xl font-extrabold leading-6">{title}</h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          to={more}
          className="flex h-[3.25rem] items-center rounded-b-2xl px-4 text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--background-third)]"
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
};
export default SidebarSection;

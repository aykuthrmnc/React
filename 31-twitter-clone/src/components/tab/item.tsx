import { ReactNode } from "react";
import { useTab } from "./context";
import classNames from "classnames";

const Item = ({ id, children }: { id: string; children: ReactNode | string }) => {
  const { active, setActive } = useTab();
  return (
    <button
      type="button"
      className="flex-1 text-center transition-colors hover:bg-[color:var(--background-secondary)]"
      onClick={() => {
        setActive(id);
      }}
    >
      <div
        className={classNames("relative inline-flex h-[3.313rem] items-center", {
          "font-bold": active === id,
          "font-medium text-[color:var(--color-base-secondary)]": active !== id,
        })}
      >
        {children}
        {active === id && (
          <div className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-[color:var(--color-primary)]" />
        )}
      </div>
    </button>
  );
};
export default Item;

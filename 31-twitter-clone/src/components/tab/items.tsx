import { ReactNode } from "react";

const Items = ({ children }: { children: ReactNode }) => {
  return <div className="flex">{children}</div>;
};
export default Items;

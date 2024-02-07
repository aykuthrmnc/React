import { ReactNode } from "react";

const Content = ({ children }: { id: string; children: ReactNode }) => {
  return <div>{children}</div>;
};
export default Content;

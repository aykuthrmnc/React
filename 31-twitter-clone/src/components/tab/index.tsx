import { ReactNode, useEffect, useState } from "react";
import Content from "./content";
import Item from "./item";
import Items from "./items";
import { TabContext } from "./context";
import StickyHeader from "../sticky-header";

const Tab = ({ activeTab, children }: { activeTab: string; children: ReactNode[] }) => {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const contents = children?.filter((c: any) => c.type === Content);
  const items = children?.find((c: any) => c.type === StickyHeader);
  //   const items = stickyHeader?.[0];

  const content = contents?.find((c: any) => c.props.id === active);

  const data = {
    active,
    setActive,
  };

  return (
    <TabContext.Provider value={data}>
      {items}
      {content}
    </TabContext.Provider>
  );
};

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;
export default Tab;

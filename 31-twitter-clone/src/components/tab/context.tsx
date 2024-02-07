import React, { createContext, useContext } from "react";

export const TabContext = createContext<{
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}>({ active: null, setActive: () => undefined });

export const useTab = () => useContext(TabContext);

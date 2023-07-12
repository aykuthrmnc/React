import { createContext, useContext, useReducer, useState } from "react";
import { siteReducer } from "../reducer";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(siteReducer, {
    theme: sessionStorage.getItem("theme") || "light",
  });

  const [language, setLanguage] = useState(sessionStorage.getItem("language") || "tr");

  const data = {
    ...state,
    dispatch,
    language,
    setLanguage,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useSite = () => useContext(Context);

export default Provider;

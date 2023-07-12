import { useEffect, useState } from "react";

declare let process: {
  env: {
    REACT_APP_THEME_KEY: string;
  };
};

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (
      localStorage[process.env.REACT_APP_THEME_KEY] === "dark" ||
      (!(process.env.REACT_APP_THEME_KEY in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("light");
      localStorage.setItem(process.env.REACT_APP_THEME_KEY, "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem(process.env.REACT_APP_THEME_KEY, "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return { theme, changeTheme };
};

export default useTheme;

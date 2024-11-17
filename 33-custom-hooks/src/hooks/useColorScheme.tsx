import { useEffect, useState } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState("dark");

  useEffect(() => {
    const changeHandle = (e: any) => {
      if (e.matches) {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }
    };

    const colorScheme = matchMedia("(prefers-color-scheme: dark)");

    // İlk seferde color scheme'i kontrol et
    changeHandle(colorScheme);

    colorScheme.addEventListener("change", changeHandle);

    return () => {
      colorScheme.removeEventListener("change", changeHandle);
    };
  }, []);

  return colorScheme;
};
export default useColorScheme;

import React from "react";
import { useSite } from "./context";
export default function SwitchLanguage() {
  const { language, setLanguage } = useSite();

  // useEffect(() => {
  //   sessionStorage.setItem("language", language)
  // }, [language])
  

  return (
    <div>
      Mevcut tema = {language}
      <br />
      <button onClick={() => setLanguage(language === "tr" ? "en" : "tr") & sessionStorage.setItem("language", language)}>Temayı Değiştir</button>
    </div>
  );
}

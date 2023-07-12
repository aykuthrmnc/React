import { useTranslation } from "react-i18next";
import { sayHello } from "./utils";

const App = () => {
  const { t, i18n } = useTranslation();

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      Aktif dil : {i18n.language} <br />
      <nav>
        <button onClick={() => clickHandle("tr")}>Türkçe</button>
        <button onClick={() => clickHandle("en")}>English</button>
        <button onClick={sayHello}>Say Hello</button>
      </nav>
      <div>{t("welcome", { user: "Aykut" })}</div>
    </div>
  );
};

export default App;

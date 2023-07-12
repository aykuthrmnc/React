import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// const resources = {
//   en: {
//     translation: {
//       welcome: "Welcome",
//     },
//   },
//   tr: {
//     translation: {
//       welcome: "Hoşgeldin!",
//     },
//   },
// };

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    // resources,
    // lng: "tr",
    // backend: {
    //     loadPath: "https://localhost:1234/language/index.php?lang={{lng}}"
    // },
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

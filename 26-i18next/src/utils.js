import i18n from "./i18n";

export const sayHello = () => {
//   i18n.changeLanguage("tr");
  console.log(i18n.t("Home Page"));
};

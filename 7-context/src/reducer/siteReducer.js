export default function siteReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      const theme = state.theme === "light" ? "dark" : "light"
      sessionStorage.setItem("theme", theme)
      return {
        ...state,
        theme,
      };
    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        theme: state.language === "tr" ? "en" : "tr",
      };
    default:
      break;
  }
}

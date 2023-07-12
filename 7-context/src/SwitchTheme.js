import { useSite } from "./context";
export default function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <div>
      Mevcut tema = {theme}
      <br />
      <button onClick={switchTheme}>Temayı Değiştir</button>
    </div>
  );
}

import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "./context";

export default function Header() {
  const { user, dispatch } = useAuth();

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        id: 1,
        name: "Aykut",
      },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      Header
      <br />
      {(user && <button onClick={logout}>Çıkış yap</button>) || <button onClick={login}>Giriş yap</button>}
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </div>
  );
}

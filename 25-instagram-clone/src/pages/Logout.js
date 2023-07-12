import { logout } from "firebase.js";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    logout();
  });

  return null;
};

export default Logout;

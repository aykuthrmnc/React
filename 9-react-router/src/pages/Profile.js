import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet";

export default function Profile() {
  const { user, setUser } = useAuth();
  const logoutHandle = () => {
    setUser(false);
  };

  return (
    <div>
      <Helmet>
        <title>Profil</title>
      </Helmet>
      Profil sayfası <br />
      {!user && <Link to="/auth/login">Giriş yap</Link>}
      {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
    </div>
  );
}

import { Link } from "react-router-dom";

const Anasayfa = () => {
  return (
    <>
      <p>Anasayfa</p>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/hakkimizda">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/iletisim">İletişim</Link>
        </li>
      </ul>
    </>
  );
};

export default Anasayfa;

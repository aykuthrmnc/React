import { Link } from "react-router-dom";

const Hakkimizda = () => {
  return (
    <>
      <p>Hakkimizda</p>
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

export default Hakkimizda;

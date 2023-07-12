import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h1>Sayfa bulunamadı</h1>
      <Link to="/">Anasayfaya dön</Link>
    </>
  );
}

export default Page404
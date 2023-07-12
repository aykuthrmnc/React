import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Anasayfa</title>
        <meta name="description" content="anasayfa description" />
      </Helmet>
      Home
    </div>
  );
}

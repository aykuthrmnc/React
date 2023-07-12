import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Anasayfa from "./Anasayfa";
// import Hakkimizda from "./Hakkimizda";
// import Iletisim from "./Iletisim";

const Hakkimizda = React.lazy(() => import("./Hakkimizda"));
const Iletisim = React.lazy(() => import("./Iletisim"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Anasayfa />} exact />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </Suspense>
  );
};

export default App;

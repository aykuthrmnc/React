import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <h1>Sayfa bulunamadı</h1>
      <Link to="/">Anasayfaya dön</Link>
    </>
  );
}

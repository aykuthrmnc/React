import React from "react";
import { Link } from "react-router-dom";

export default function Blog404() {
  return (
    <>
      <div>Blog bulunamadı</div>
      <Link to="/blog">Bloga dön</Link>
    </>
  );
}

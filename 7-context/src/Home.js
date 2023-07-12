import React from "react";
import { useAuth } from "./context";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <Header />
      App
      {user && <div style={{ padding: 10, border: "1px solid red" }}>Giriş yapılınca görülür.</div>}
      <Footer />
    </div>
  );
}

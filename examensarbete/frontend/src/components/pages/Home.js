import React from "react";
import Header from "../elems/Header";
import Footer from "../elems/Footer";
import Machine from "../gacha/Machine";
import CharacterInfo from "../gacha/CharacterInfo";

export default function Home() {
  return (
    <>
      <Header />
      <Machine />
      <Footer />
    </>
  );
}

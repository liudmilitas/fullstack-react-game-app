import React from "react";
import Header from "../elems/Header";
import Footer from "../elems/Footer";
import Machine from "../gacha/Machine";
import CharacterInfo from "../gacha/CharacterInfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center content-center h-screen w-full">
      <Header />
      <p className="text-3xl font-bold underline text-red-500">yo mom</p>
      <Machine />
      <Footer />
      <CharacterInfo />
    </div>
  );
}

import React from "react";
import { render } from "react-dom";
import Header from "./elems/Header";
import Footer from "./elems/Footer";
import Machine from "./gacha/Machine";
import CharacterInfo from "./elems/CharacterInfo";

export default function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Header />
      <p className="text-3xl font-bold underline text-red-500">yo mom</p>
      <Machine />
      <Footer />
      <CharacterInfo />
    </div>
  );
}

const app = document.getElementById("app");
render(<App />, app);

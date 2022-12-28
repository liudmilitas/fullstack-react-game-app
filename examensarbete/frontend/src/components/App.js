import React from "react";
import { render } from "react-dom";
import Header from "./elems/Header";
import Footer from "./elems/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <p class="text-3xl font-bold underline text-red-500">yo mom</p>
      <Footer />
    </div>
  );
}

const app = document.getElementById("app");
render(<App />, app);

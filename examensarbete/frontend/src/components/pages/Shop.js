import React from "react";
import Footer from "../elems/Footer";
import Header from "../elems/Header";

export default function Shop() {
  return (
    <div className="flex flex-col items-center content-center h-screen w-full">
      <Header />
      <p className="text-3xl font-bold underline">shop</p>
      <Footer />
    </div>
  );
}

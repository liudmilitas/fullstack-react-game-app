import React, { useState } from "react";
import Header from "../elems/Header";
import Footer from "../elems/Footer";
import stickers from "../elems/stickers";
import CharacterInfo from "../gacha/CharacterInfo";

export default function Gallery() {
  const GradientList = {
    Pyro: "bg-gradient-to-t from-orange-400 to-red-600",
    Hydro: "bg-gradient-to-t from-blue-300 to-blue-700",
    Dendro: "bg-gradient-to-t from-lime-400 to-lime-700",
    Anemo: "bg-gradient-to-t from-emerald-100 to-emerald-400",
    Cryo: "bg-gradient-to-t from-sky-50 to-sky-300",
    Electro: "bg-gradient-to-t from-purple-600 via-violet-600 to-purple-200",
    Geo: "bg-gradient-to-t from-amber-200 to-amber-600",
  };

  function StickerList() {
    return (
      <section className="h-fit px-5 py-2 mx-auto">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center content-center gap-4">
          {stickers.map((sticker) => (
            <li
              className={
                "w-[200px] h-[200px] transition-all rounded-lg p-1.5 mx-auto" +
                " " +
                GradientList[sticker.element_type]
              }
              key={sticker.name}
            >
              <div className="bg-white p-4 rounded-lg">
                <button className="flex flex-col items-center content-center justify-end w-full h-full">
                  <img
                    className="pb-3 h-32 drop-shadow-2xl ease-in-out duration-500 hover:scale-110 "
                    src={sticker.url}
                  />
                  <span className="text-lg">{sticker.name}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <Header />
      <StickerList />
      <CharacterInfo />
      <Footer />
    </>
  );
}

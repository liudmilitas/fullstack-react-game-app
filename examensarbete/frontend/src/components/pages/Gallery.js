import React, { useState } from "react";
import Header from "../elems/Header";
import Footer from "../elems/Footer";
import stickers from "../elems/stickers";
import CharacterInfoModal from "../gacha/CharacterInfoModal";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);

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
      <section class="h-fit px-5 py-2 mx-auto">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center content-center gap-4">
          {stickers.map((sticker) => (
            <li
              className={
                "w-[190px] h-[190px] bg-cover transition-all rounded-lg" +
                " " +
                GradientList[sticker.element_type]
              }
              key={sticker.name}
            >
              <button
                onClick={() => setShowModal(true)}
                className="flex flex-col items-center content-center justify-end w-full h-full text-white"
              >
                <img
                  className=" shadow-white pb-3 h-32 drop-shadow-[0_35px_35px_rgba(0,0,0,1.2)] ease-out duration-500 hover:scale-110 "
                  src={sticker.url}
                />
                <span className=" shadow-white pb-3 text-lg drop-shadow-[0_35px_35px_rgba(0,0,0,1)]">
                  {sticker.name}
                </span>
              </button>
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
      {showModal && <CharacterInfoModal />}
      <Footer />
    </>
  );
}

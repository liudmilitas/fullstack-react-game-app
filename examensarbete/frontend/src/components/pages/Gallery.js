import React, { useState } from "react";
import Header from "../elems/Header";
import Footer from "../elems/Footer";
import stickers from "../elems/stickers";
import CharacterInfo from "../gacha/CharacterInfo";

export default function Gallery() {
  const GradientList = {
    Pyro: "bg-gradient-to-t from-orange-600 to-red-400",
    Hydro: "bg-gradient-to-t from-blue-700 to-blue-300",
    Dendro: "bg-gradient-to-t from-lime-700 to-lime-400",
    Anemo: "bg-gradient-to-t from-emerald-500 to-emerald-100",
    Cryo: "bg-gradient-to-t from-sky-400 to-sky-100",
    Electro: "bg-gradient-to-t from-purple-600 via-violet-600 to-purple-200",
    Geo: "bg-gradient-to-t from-amber-600 to-amber-200",
  };

  const [showModal, setShowModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(false);

  function toggleModal() {
    setCurrentCharacter(false);
  }

  function StickerList() {
    return (
      <section className="h-fit px-5 py-2 mx-auto">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center content-center gap-4">
          {stickers.map((sticker) => (
            <li
              className={
                "w-[190px] h-[190px] bg-cover transition-all rounded-lg hover:shadow-lg" +
                " " +
                GradientList[sticker.element_type]
              }
              key={stickers.indexOf(sticker)}
            >
              <button
                onClick={(e) => {
                  setCurrentCharacter(sticker.character);
                }}
                className="flex flex-col items-center content-center justify-end w-full h-full text-white"
              >
                <img
                  className="pb-3 h-32 drop-shadow-[0_22px_22px_rgba(255,255,255,0.9)] ease-out duration-500 hover:scale-110"
                  src={sticker.url}
                />
                <span className="pb-3 text-lg drop-shadow-xl">
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
      {currentCharacter && (
        <CharacterInfo
          toggleModal={toggleModal}
          currentCharacter={currentCharacter}
        />
      )}
      <Footer />
    </>
  );
}

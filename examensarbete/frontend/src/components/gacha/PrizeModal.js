import Shine from "/src/image/shine.png";
import React, { useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import CloseButton from "/src/svg/close-button.svg";

export default function PrizeModal({ sticker, togglePrizeModal }) {
  const { width, height } = useWindowSize();

  return (
    <>
      {sticker ? (
        <div className="prize-reward-container w-full relative h-full top-0 left-0 z-40 bg-black bg-opacity-25">
          <Confetti className="z-30" width={width} height={height} />
          <button
            type="button"
            onClick={() => {
              togglePrizeModal();
            }}
            className="absolute z-50 top-[20%] left-[80%] bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 pointer-events-auto"
          >
            <span className="text-xl text-black">CLOSE</span>{" "}
            <img src={CloseButton} className="h-6 w-6" />
          </button>
          <div className="absolute inset-0 flex justify-center items-center shine animate-spin-slow w-full">
            <img className="h-[80%]" src={Shine} />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 w-full">
            <img className="w-40" src={sticker.url} />
          </div>
        </div>
      ) : null}
    </>
  );
}

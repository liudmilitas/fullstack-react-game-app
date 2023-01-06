import Shine from "/src/image/shine.png";
import React, { useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Ayaka from "/src/image/ayaka.png";

export default function PrizeModal() {
  const { width, height } = useWindowSize();

  let prize;

  function getPrize() {
    const prizes = [
      {
        image: "/src/image/ayaka.png",
        title: "Ayaka",
      },
      {
        image: "/src/image/raiden.png",
        title: "Raiden",
      },
      {
        image: "/src/image/keqing.png",
        title: "Keqing",
      },
    ];

    return prizes[~~(prizes.length * Math.random())];
  }

  // setting source attribute for sticker image
  const stickerImageRef = useRef();
  const [stickerImage, setStickerImage] = useState(false);
  useEffect(() => {
    prize = getPrize();
    setStickerImage(prize.image);
  });

  return (
    <div className="prize-reward-container w-full h-full absolute top-0 left-0 z-1">
      <Confetti width={width} height={height} />
      <div className="shine">
        <img src={Shine} />
      </div>
      <div className="prize">
        <img
          className="wiggle"
          src="https://assets.codepen.io/2509128/prize1.png"
        />
      </div>
    </div>
  );
}

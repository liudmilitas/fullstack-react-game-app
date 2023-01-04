import Shine from "/src/image/shine.png";
import React from "react";
import Ayaka from "/src/image/ayaka.png";

export default function PrizeModal() {
  return (
    <div className="prize-reward-container w-full h-full absolute top-0 left-0 z-1">
      <div className="shine">
        <img src={Shine} />
      </div>
      <div className="prize">
        <img className="wiggle" src={Ayaka} />
      </div>
    </div>
  );
}

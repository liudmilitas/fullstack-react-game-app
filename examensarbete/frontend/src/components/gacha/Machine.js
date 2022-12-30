import React from "react";
import { gsap } from "gsap";
import MachineFrame from "/src/svg/machine-frame.svg";
import Handle from "/src/svg/handle.svg";

export default function Machine() {
  return (
    <div className="container">
      <div className="game-block">
        <div className="machine-container">
          <div className="backboard"></div>
          <div className="balls"></div>
          <img src={MachineFrame} />
          <div className="title"></div>
          <div className="price"></div>
          <img src={Handle} />
        </div>
      </div>
      <div className="interaction-block">
        <div class="prize-container">
          <div class="prize-ball-container"></div>
          <div class="prize-reward-container">
            <div class="shine">{/*<img src="ADD ANIMATED SHINE FERE" />*/}</div>
            <div class="prize">
              <img class="wiggle" src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

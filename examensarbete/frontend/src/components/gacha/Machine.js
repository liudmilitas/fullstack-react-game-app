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
        <div className="prize-container">
          <div className="prize-ball-container"></div>
          <div className="prize-reward-container">
            <div className="shine">
              {/*<img src="ADD ANIMATED SHINE FERE" />*/}
            </div>
            <div className="prize">
              <img className="wiggle" src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

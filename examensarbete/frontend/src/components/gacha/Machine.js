import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import MachineFrame from "/src/svg/machine-frame.svg";
import Handle from "/src/svg/handle.svg";
import PrizeModal from "./PrizeModal";
import { Spring } from "react-spring";
import RotateHandle from "./RotateHandle";

export default function Machine() {
  const [handleMoved, setHandleMoved] = useState(false);
  function toggle() {
    setHandleMoved(!handleMoved);
  }

  return (
    <div className="container w-full h-full overflow-hidden flex items-center justify-center content-center mx-0">
      <div className="game-block w-full h-full overflow-hidden flex justify-center items-center content-center">
        <div className="machine-container relative whitespace-nowrap self-center">
          <div className="backboard z-0 w-[15vh] h-[13vh] left-[28%] top-[65%] bg-pink-400 absolute"></div>
          <div className="balls absolute w-[96%] h-[34.5%] left-[2%] top-[22%]"></div>
          <img
            className="machine relative z-1 max-h-[50vh] pointer-events-none"
            src={MachineFrame}
          />

          <button>
            <RotateHandle toggle={handleMoved}>
              <img
                onClick={toggle}
                className="handle absolute z-3 h-[2.5vh] left-[13%] top-[70%]"
                src={Handle}
                /*onClick={onClickHandle}*/
              />
            </RotateHandle>
          </button>
        </div>
      </div>
      <div className="interaction-block w-full h-full overflow-hidden absolute top-0 left-0 z-1 pointer-events-none">
        <div className="prize-container w-full h-full overflow-hidden absolute top-0 left-0">
          <div className="prize-ball-container w-full h-full overflow-hidden absolute top-0 left-0"></div>
          {/*<PrizeModal />*/}
        </div>
      </div>
    </div>
  );
}

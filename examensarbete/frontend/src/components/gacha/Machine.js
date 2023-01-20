import React, { useRef, useState, useEffect } from "react";
import MachineFrame from "/src/svg/machine-frame.svg";
import Handle from "/src/svg/handle.svg";
import PrizeModal from "./PrizeModal";
import { Spring } from "react-spring";
import RotateHandle from "./RotateHandle";
import { useDispatch, useSelector } from "react-redux";
import { listStickers } from "../../actions/stickerActions";
import Loader from "../elems/Loader";

export default function Machine() {
  const [handleMoved, setHandleMoved] = useState(false);
  function toggle() {
    setHandleMoved(!handleMoved);
  }

  const dispatch = useDispatch();
  const stickerList = useSelector((state) => state.stickerList);
  const { error, loading, stickers } = stickerList;

  useEffect(() => {
    dispatch(listStickers());
  }, [dispatch]);

  const [sticker, setSticker] = useState();

  function getRandomSticker() {
    let randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    setSticker(randomSticker);
  }

  function togglePrizeModal() {
    setSticker(false);
  }

  const [handleClick, setHandleClick] = useState(false);

  return (
    <div className="container w-full h-full overflow-hidden flex items-center justify-center content-center mx-0">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {" "}
          <div className="game-block w-full h-full overflow-hidden flex justify-center items-center content-center">
            <div className="machine-container relative whitespace-nowrap self-center">
              <div className="backboard z-0 w-[15vh] h-[13vh] left-[28%] top-[65%] bg-pink-400 absolute"></div>
              <div className="balls absolute w-[96%] h-[34.5%] left-[2%] top-[22%]"></div>
              <img
                className="machine relative z-1 max-h-[50vh] pointer-events-none"
                src={MachineFrame}
              />

              <button
                className={`${
                  handleClick && "rotate-45"
                } transition duration-1000 ease-out handle absolute z-3 left-[13%] top-[70%]`}
                onClick={() => {
                  setHandleClick(true);
                  // getRandomSticker();
                }}
                onAnimationEnd={() => setHandleClick(false)}
              >
                <img className="h-[2.5vh]" src={Handle} />
              </button>
            </div>
          </div>
          <div className="interaction-block w-full h-full overflow-hidden absolute top-0 left-0 z-1 pointer-events-none">
            <div className="prize-container w-full h-full overflow-hidden absolute top-0 left-0">
              <div className="prize-ball-container w-full h-full overflow-hidden absolute top-0 left-0"></div>
              <PrizeModal
                sticker={sticker}
                togglePrizeModal={togglePrizeModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

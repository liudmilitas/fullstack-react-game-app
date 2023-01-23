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

  function GenerateBalls() {
    const ballColors = [
      "indigo",
      "pink",
      "sky",
      "cyan",
      "purple",
      "orange",
      "amber",
      "red",
      "lime",
      "green",
      "emerald",
      "rose",
    ];

    const ballCoordinates = [
      { left: 0.5, top: 0.6 },
      { left: 0, top: 0.68 },
      { left: 0.22, top: 0.65 },
      { left: 0.7, top: 0.63 },
      { left: 0.75, top: 0.79 },
      { left: 0.96, top: 0.66 },
      { left: 0.5, top: 0.8 },
      { left: 0.9, top: 0.81 },
      { left: 0, top: 0.82 },
      { left: 1, top: 0.9 },
      { left: 0.25, top: 0.85 },
      { left: 0.9, top: 1 },
      { left: 0.4, top: 1 },
      { left: 0.65, top: 1 },
      { left: 0.09, top: 1 },
    ];

    return (
      <>
        {ballCoordinates.map((ball) => {
          let rotate = Math.floor(Math.random() * 360);
          let color = ballColors[Math.floor(Math.random() * ballColors.length)];
          let x = Math.floor(ball.left * 96);
          let y = Math.floor(ball.top * 96);
          return (
            <figure
              key={ballCoordinates.indexOf(ball)}
              className={
                "gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center " +
                `bg-${color}-300 border-${color}-600 left-[${x}%] top-[${y}%] rotate-[${rotate}]`
              }
            ></figure>
          );
        })}
      </>
    );
  }

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
              <div className="balls absolute w-[96%] h-[34.5%] left-[2%] top-[22%]">
                <div className="w-32 h-32 flex">
                  <GenerateBalls />
                </div>
              </div>
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
                  getRandomSticker();
                }}
                onAnimationEnd={() => {
                  setHandleClick(false);
                }}
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

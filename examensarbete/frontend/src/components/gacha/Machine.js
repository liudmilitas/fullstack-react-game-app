import React, { useState, useEffect } from "react";
import MachineFrame from "/src/svg/machine-frame.svg";
import Handle from "/src/svg/handle.svg";
import PrizeModal from "./PrizeModal";
import { useDispatch, useSelector } from "react-redux";
import { listStickers } from "../../actions/stickerActions";
import Loader from "../elems/Loader";
import { createGame } from "../../actions/gameActions";
import {
  createTransaction,
  listMyTransactions,
} from "../../actions/transactionActions";

export default function Machine() {
  const dispatch = useDispatch();
  const stickerList = useSelector((state) => state.stickerList);
  const { error, loading, stickers } = stickerList;

  useEffect(() => {
    dispatch(listStickers());
    dispatch(listMyTransactions());
  }, [dispatch]);

  const [sticker, setSticker] = useState();

  function getRandomSticker() {
    if (!sticker) {
      let randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
      dispatch(createGame(randomSticker._id));
      dispatch(createTransaction(0, -1));
      setSticker(randomSticker);
    }
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
          <div className="game-block w-full h-full overflow-hidden flex justify-center items-center content-center">
            <div className="machine-container relative whitespace-nowrap self-center">
              <div className="backboard z-0 w-[15vh] h-[13vh] left-[28%] top-[65%] bg-pink-400 absolute"></div>
              <div className="balls absolute w-[96%] h-[34.5%] left-[2%] top-[16%] ">
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 top-[57%] left-[48%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-sky-300 border-sky-600 rotate-[282deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[0%] top-[65%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-indigo-300 border-indigo-600 rotate-[83deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[21%] top-[62%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-red-300 border-red-600 rotate-[169deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[67%] top-[60%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-indigo-300 border-indigo-600 rotate-[87deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[78%] top-[70%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-sky-300 border-sky-600 rotate-[156deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[62%] top-[63%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-lime-300 border-lime-600 rotate-[330deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[48%] top-[76%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-red-300 border-red-600 rotate-[223deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[11%] top-[77%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-pink-300 border-pink-600 rotate-[8deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[0%] top-[78%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-red-300 border-red-600 rotate-[33deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[76%] top-[86%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-pink-300 border-pink-600 rotate-[121deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[24%] top-[81%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-purple-300 border-purple-600 rotate-[304deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[77%] top-[94%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-purple-300 border-purple-600 rotate-[223deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[38%] top-[96%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-emerald-300 border-emerald-600 rotate-[239deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[62%] top-[96%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-purple-300 border-purple-600 rotate-[346deg]"></figure>
                </div>
                <div
                  className={`${
                    handleClick && "animate-wiggle"
                  } absolute w-8 h-8 left-[8%] top-[94%]`}
                >
                  <figure className="gacha-ball w-8 h-8 border-4 rounded-full absolute overflow-hidden origin-center bg-red-300 border-red-600 rotate-[178deg]"></figure>
                </div>
              </div>
              <img
                className="machine relative z-1 max-h-[50vh] pointer-events-none"
                src={MachineFrame}
              />

              <button
                className={`${
                  handleClick && "rotate-180"
                } transition duration-[3s] ease-out handle absolute z-3 left-[13%] top-[70%]`}
                onClick={() => {
                  setHandleClick(true);
                }}
                onTransitionEnd={() => {
                  getRandomSticker();
                  setHandleClick(false);
                  dispatch(listMyTransactions());
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

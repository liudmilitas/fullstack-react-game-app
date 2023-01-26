import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createTransaction,
  listMyTransactions,
} from "../../actions/transactionActions";
import CloseButton from "/src/svg/close-button.svg";

export default function PaymentModal({ coins, price, toggle }) {
  const dispatch = useDispatch();
  return (
    <>
      {coins && (
        <section className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none w-full">
          <div className="w-[90%] lg:w-[60%] my-6 mx-auto rounded-lg bg-white shadow-lg p-5 z-50 text-gray-700">
            <div className="mb-8 flex w-full justify-between">
              <h2 className="text-center font-bold text-xl uppercase">
                Purchase {coins} coins
              </h2>
              <button className="" onClick={toggle}>
                <img src={CloseButton} className="h-6 w-6" />
              </button>
            </div>
            <div className="mb-3 flex -mx-2">
              <div className="px-2 flex items-center">
                <label htmlFor="type2" className="px-2">
                  <span>Unreal Wallet</span>
                </label>
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500 cursor-pointer"
                  name="type"
                  id="type2"
                  checked
                  readOnly
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/3">
                <div>
                  <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/3">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
              <div className="px-2 w-1/3">
                <input
                  className="w-24 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="000"
                  type="number"
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e) => {
                  dispatch(createTransaction(price, coins));
                  dispatch(listMyTransactions());
                  toggle();
                }}
                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                <span className="mdi mdi-lock-outline mr-1">PAY NOW</span>
              </button>
            </div>
          </div>
          <div
            onClick={toggle}
            className="opacity-25 fixed inset-0 z-30 bg-black w-full"
          ></div>
        </section>
      )}
    </>
  );
}

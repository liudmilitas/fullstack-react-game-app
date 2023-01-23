import React from "react";

export default function StartBackground() {
  const n = 8;
  const colors = [
    "powder",
    "powder",
    "powder",
    "powder",
    "powder",
    "powder",
    "powder",
    "powder",
  ];
  return (
    <div className="bg-container absolute -z-10 bg-gradient-to-b from-sky-700 to-indigo-100 w-screen h-screen object-cover overflow-hidden"></div>
  );
}

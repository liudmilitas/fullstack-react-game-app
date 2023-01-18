import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full fill-indigo-900"
        role="status"
      ></div>
    </div>
  );
}

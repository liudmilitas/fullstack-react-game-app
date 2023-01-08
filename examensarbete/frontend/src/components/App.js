import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <div className="flex flex-col items-center content-center h-screen w-full justify-between">
      <Shop />
    </div>
  );
}

const app = document.getElementById("app");
render(<App />, app);

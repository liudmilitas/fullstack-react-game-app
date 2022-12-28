import React from "react";
import { render } from "react-dom";

export default function App() {
  return (
    <div>
      <p class="text-3xl font-bold underline">yo mom</p>
    </div>
  );
}

const app = document.getElementById("app");
render(<App />, app);

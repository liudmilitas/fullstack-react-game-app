import React from "react";
import { render } from "react-dom";

export default function App() {
  return <div>'a new thing'</div>;
}

const app = document.getElementById("app");
render(<App />, app);

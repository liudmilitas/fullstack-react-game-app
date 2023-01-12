import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.scss";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

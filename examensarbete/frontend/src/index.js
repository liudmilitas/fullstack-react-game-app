import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

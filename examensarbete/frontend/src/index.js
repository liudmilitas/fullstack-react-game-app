import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/styles.scss";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

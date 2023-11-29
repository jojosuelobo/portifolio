import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/main.sass";

import global_us from '../translations/en/global.json'
import global_ptbr from '../translations/ptbr/global.json'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

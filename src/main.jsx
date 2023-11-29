import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/main.sass";

import global_us from '../translations/en/global.json'
import global_ptbr from '../translations/ptbr/global.json'
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValues: false },
  lng: "ptbr",
  resources: {
    ptbr: {
      global: global_ptbr
    },
    us: {
      global: global_us
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

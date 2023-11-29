import { useState } from "react";

import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

import { useTranslation } from "react-i18next";

function App() {

  const [t, i18n] = useTranslation("global")

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <div className="languages">
        <img
          src="https://flagcdn.com/br.svg"
          width="44"
          alt="ptbr"
          onClick={() => handleChangeLanguage("ptbr")} />

        <img
          src="https://flagcdn.com/us.svg"
          width="60"
          alt="us"
          onClick={() => handleChangeLanguage("us")} />

      </div>
      <div id="portfolio">
        <Sidebar/>
        <MainContent />
      </div>
    </>

  );
}

export default App;

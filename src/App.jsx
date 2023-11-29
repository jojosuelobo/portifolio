import { useState } from "react";

import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {

  const [language, setLanguage] = useState("PTBR")

  return (
    <>
      <div className="languages">
        <img
          src="https://flagcdn.com/br.svg"
          width="44"
          alt="ptbr"
          onClick={() => setLanguage("PTBR")} />

        <img
          src="https://flagcdn.com/us.svg"
          width="60"
          alt="us"
          onClick={() => setLanguage("EN")} />

      </div>
      <div id="portfolio">
        <Sidebar language={language} />
        <MainContent />
      </div>
    </>

  );
}

export default App;

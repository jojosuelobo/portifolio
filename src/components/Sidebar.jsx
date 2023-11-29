import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import { useState, useEffect } from "react";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = ({language}) => {

  // https://www.npmjs.com/package/@react-lang/language

  const [data, setData] = useState([])
  //language == 'PTBR' ? setData(PTBR) : setData(EN)
  
  useEffect(() => {
    language == 'PTBR' ? setData(PTBR) : setData(EN)
  })

  console.log(data)

  return (
    <aside id="sidebar">
      <h1>Josué Lobo</h1>
      <img src={Avatar} alt="Josué Lobo" />
      <div className="tags">
        <p className="title">Desenvolvedor Web</p>
        <p className="subtitle">Analista de Testes QA</p>
      </div>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;

import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
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

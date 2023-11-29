import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import { useState, useEffect } from "react";

import Avatar from "../img/eu.jpg";
import { useTranslation } from "react-i18next";

import "../styles/components/sidebar.sass";

const Sidebar = () => {

  const [t, i18n] = useTranslation("global")

  const downloadCurriculum = () => {

  };

  return (
    <aside id="sidebar">
      {/* <h1>Josué Lobo</h1> */}
      <h1>{t("aside.nome")}</h1>
      <img src={Avatar} alt="Josué Lobo" />
      <div className="tags">
        <p className="title">{t("aside.tag1")}</p>
        <p className="subtitle">{t("aside.tag2")}</p>
      </div>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1s4PD2tTA6kUJnefi-uGgf5wgj5ba2Dyw/view" className="btn">
        {t("aside.botaoDownload")}
      </a>
    </aside>
  );
};

export default Sidebar;

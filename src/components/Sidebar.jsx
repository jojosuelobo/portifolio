import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import { useState, useEffect } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

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
      <a target="_blank" href="https://drive.google.com/file/d/1s4PD2tTA6kUJnefi-uGgf5wgj5ba2Dyw/view" className="btn">
        {t("aside.botaoDownload")}
      </a>
      <div className="certifications">
        <h2>Formação acadêmica e Certificações</h2>
        <ul>

          {t(`certificacoes`, { returnObjects: true }).map((exp, index) => (
            <li key={index}>
              <div>
                <h3>{exp.titulo}</h3>
                <p>{exp.descricao}</p>
              </div>
              <div className="share">
                <p>{exp.autor}</p>
                {exp.link &&
                  <a target="_blank" href={exp.link}>
                    <FaExternalLinkAlt className="icon" />
                  </a>
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

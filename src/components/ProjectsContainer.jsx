import "../styles/components/ProjectsContainer.sass"

import { useTranslation } from "react-i18next";

const ProjectsContainer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="projects-container">
      <h2>{t("labels.projetos")}</h2>
      <a target="_blank" href="https://github.com/jojosuelobo?tab=repositories" className="btn">
      {t("labels.botaoProjetos")}
      </a>
    </section>
  );
};

export default ProjectsContainer;

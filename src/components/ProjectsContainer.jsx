import { useTranslation } from "react-i18next";

const ProjectsContainer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="projects-container">
      <h2>{t("labels.projetos")}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
        rem fugit provident dolorum exercitationem, ducimus quisquam ratione
        cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
        Dignissimos labore aspernatur pariatur?
      </p>
      <a href="#" className="btn">
      {t("labels.botaoProjetos")}
      </a>
    </section>
  );
};

export default ProjectsContainer;

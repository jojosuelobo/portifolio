import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiGit
} from "react-icons/di";
import {
  SiCypress,
  SiSelenium,
  SiSass,
  SiCsharp
} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";
import { useTranslation } from "react-i18next";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <SiSass /> },
  { id: "cypress", name: "Cypress", icon: <SiCypress /> },
  { id: "csharp", name: "C#", icon: <SiCsharp /> },
  { id: "selenium", name: "Selenium", icon: <SiSelenium /> },
  { id: "git", name: "Git", icon: <DiGit /> },

];

const TechnologiesContainer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="technologies-container">
      <h2>{t("labels.tecnologia")}</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <p>{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

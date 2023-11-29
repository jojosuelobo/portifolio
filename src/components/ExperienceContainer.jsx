import "../styles/components/ExperienceContainer.sass";

import { useTranslation } from "react-i18next";

const ExperienceContainer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="about-container">
      <h2>Experiência Profissional</h2>
      <ul>
        {t(`experience`, { returnObjects: true }).map((exp, index) => (
          <li key={index}>
            <h3>{exp.cargo}</h3>
            <div className="stats">
              <p>{exp.empresa}</p>
              <p>{exp.mesInicio} de {exp.anoInicio} - {exp.mesFim} {exp.anoFim}</p>
            </div>
            <div className="description">
              <p>{exp.descricao}</p>
              <div className="tasks">
                {exp.tarefas && Array.isArray(exp.tarefas) && exp.tarefas.map((tarefa, index) => (
                  <p key={index}>{tarefa}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default ExperienceContainer;

import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import ExperienceContainer from "./ExperienceContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ExperienceContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;

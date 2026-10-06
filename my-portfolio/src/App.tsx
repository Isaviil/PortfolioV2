import "./App.css";
import HeroContainer from "./components/sections/hero/HeroContainer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/sections/about-me/AboutMe";
import MyProjects from "./components/sections/my-projects/MyProjects";
import TechSkills from "./components/sections/tech-skills/TechSkills";
import { sectionRefs } from "./utils/sectionRef";
import "./i18n/i18n.js";
import Contact from "./components/sections/contact/Contact";

function App() {
  return (
    <div className="main-container">
      <HeroContainer />
      <NavBar scrollTargets={sectionRefs} />
      <AboutMe scrollTargets={sectionRefs} />
      <TechSkills scrollTargets={sectionRefs} />
      <MyProjects scrollTargets={sectionRefs} />
      <Contact scrollTargets={sectionRefs} />
    </div>
  );
}

export default App;

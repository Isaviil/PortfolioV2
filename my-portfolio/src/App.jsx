
import './App.css'
import HeroContainer from './components/HeroContainer';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import TechSkills from "./components/TechSkills";
import Contact from "./components/Contact";
import { sectionRefs } from "./utils/refs";
import './i18n/i18n.js';

function App() {
  return (
      <div className = "main-container">        
        <HeroContainer />
        <NavBar scrollTargets={sectionRefs} />
        <AboutMe scrollTargets={sectionRefs}/>
        <TechSkills scrollTargets={sectionRefs}/>
        <MyProjects scrollTargets={sectionRefs} />
        <Contact scrollTargets={sectionRefs}/>
      </div>
  )
}

export default App

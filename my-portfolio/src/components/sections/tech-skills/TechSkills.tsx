import "./tech-skills.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { sectionRefs } from "../../../utils/sectionRef";
import { useGSAP } from "@gsap/react";
import { fadeInOnScroll } from "../../../utils/gsap";
gsap.registerPlugin(ScrollTrigger);

interface StackProps {
  category: string;
  skills: string[];
}

interface MyProjects {
  scrollTargets: typeof sectionRefs;
}

export default function TechSkills({ scrollTargets }: MyProjects) {
  // Traslate
  const { t: translate } = useTranslation();

  useGSAP(() => {
    const techSkills = gsap.utils.toArray<Element>(".tech-skills");

    techSkills.forEach((x) => {
      fadeInOnScroll({
        sections: [x],
        target: x,
        start: "top 80%",
      });
    });
  }, []);

  const arraySkills = translate("technologies.stack", {
    returnObjects: true,
  }) as StackProps[];

  return (
    <div className="tech" ref={scrollTargets.techRef}>
      <div className="project-title">
        <h1>{translate("technologies.mainTitle")}</h1>
      </div>

      <div className="tech-skills-container">
        {arraySkills.map((x, i) => (
          <div className="tech-skills" key={i}>
            <h2>{x.category}</h2>
            <div className="skills">
              <div className="skill-element">
                {x.skills.map((y, index) => (
                  <p key={index}>{y}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

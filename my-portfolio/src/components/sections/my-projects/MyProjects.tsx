import "./my-projects.scss";
import githubIcon from "../../../assets/images/githubIcon.png";
import CirclesTwo from "../../ui/circles/CirclesTwo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { sectionRefs } from "../../../utils/sectionRef";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

interface MyProjects {
  scrollTargets: typeof sectionRefs;
}

interface ProjectProps {
  img: string;
  tech: string[];
  title: string;
  description: string[];
  github: string;
  imgClick?: string;
}

export default function MyProjects({ scrollTargets }: MyProjects) {
  const { t: translate } = useTranslation();

  const parentRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const targetEachElem = gsap.utils.toArray(".projects");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 70%",
        end: "top 70%",
      },
    });

    //background
    tl.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 0.3 },
    );

    //description
    tl.fromTo(
      pRef.current,
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.3 },
    );

    //Containears
    tl.fromTo(
      targetEachElem,
      { opacity: 0, x: -15 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.4,
        delay: 0.2,
        duration: 0.7,
        ease: "power1.out",
      },
    );
  }, []);

  const projectArray = translate("projects.myprojects", {
    returnObjects: true,
  }) as ProjectProps[];

  return (
    <div className="my-projects" ref={parentRef}>
      <CirclesTwo />

      <div className="project-title" ref={scrollTargets.projectRef}>
        <h1>{translate("projects.mainTitle")}</h1>
      </div>

      <p ref={pRef}>
        <Trans
          i18nKey="projects.mainDescription"
          components={{
            1: (
              <a
                href="https://github.com/Isaviil/PortfolioV2"
                target="_blank"
                rel="noreferrer"
              />
            ),
          }}
        />
      </p>

      <div className="projects-display" ref={backgroundRef}>
        {projectArray.map((x, i) => (
          <div className="projects" key={i}>
            <div className="projects-img">
              {x.imgClick ? (
                <a href={x.imgClick} target="_blank" rel="noreferrer">
                  <img src={x.img} alt={x.title}></img>
                </a>
              ) : (
                <img src={x.img} alt={x.title}></img>
              )}
            </div>

            <div className="projects-description">
              <div className="projects-title-description">
                <h2>{x.title}</h2>
                {x.description.map((y, ind) => (
                  <p key={ind}> {y} </p>
                ))}
              </div>

              <div className="technologies">
                {x.tech.map((x, i) => (
                  <div className="tech-elem" key={i}>
                    <p> {x} </p>
                  </div>
                ))}
              </div>

              <div className="github-icon">
                <a href={x.github} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

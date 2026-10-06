import "./about-me.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Circles from "../../ui/circles/Circles";
import { useTranslation } from "react-i18next";
import { sectionRefs } from "../../../utils/sectionRef";
import { useGSAP } from "@gsap/react";
import { fadeInOnScroll } from "../../../utils/gsap";
gsap.registerPlugin(ScrollTrigger);

interface AboutMeProps {
  scrollTargets: typeof sectionRefs;
}

interface SectionsProps {
  title: string;
  desc: string[];
}

export default function AboutMe({ scrollTargets }: AboutMeProps) {
  const { t: translate } = useTranslation();

  // Sección
  const parentRef = useRef<HTMLElement>(null);

  // gsap para el ScrollTrigger
  useGSAP(() => {
    const seccion = gsap.utils.toArray<Element>(".about-me-section");

    // El valor inicial nulo del ref se manejó en la función
    fadeInOnScroll({ sections: seccion, target: parentRef.current });
  }, []);

  // Usamos el hook translate para tomar solamente la sección aboutMe
  // Necesitamos usar type assertions dado que en este caso sabemos qué es lo que se devuelve
  const aboutParagraphs: SectionsProps[] = translate("aboutMe.sections", {
    returnObjects: true,
  }) as SectionsProps[];

  return (
    <section className="about-me" ref={parentRef}>
      <Circles />
      <h1 ref={scrollTargets.aboutRef}>{translate("aboutMe.mainTitle")}</h1>

      <div className="am-position-container">
        {aboutParagraphs.map((me, i) => (
          <article className="about-me-section" key={i}>
            <div className="title">
              <h2>{me.title}</h2>
            </div>

            <div className="description">
              {me.desc.map((description, ind) => (
                <p key={ind}>{description}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import "./contact.scss";
import Circles from "../../ui/circles/Circles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { fadeInOnScroll } from "../../../utils/gsap";
import { sectionRefs } from "../../../utils/sectionRef";
gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  scrollTargets: typeof sectionRefs;
}

interface ContactProps {
  subtitle: string;
  text: string;
}

const Contact = ({ scrollTargets }: ContactSectionProps) => {
  const { t: translate } = useTranslation();

  // Sección
  const contactRef = useRef<HTMLDivElement>(null);

  // gsap para el ScrollTrigger. Pasar a un componente mejor
  useGSAP(() => {
    const msgContainer = gsap.utils.toArray<Element>(".msg");

    fadeInOnScroll({
      sections: msgContainer,
      target: contactRef.current,
    });
  }, []);

  // Usamos el hook translate para tomar solamente la sección aboutMe
  // Necesitamos usar type assertions dado que en este caso sabemos qué es lo que se devuelves
  const contactArray = translate("contact.message", {
    returnObjects: true,
  }) as ContactProps[];

  return (
    <div className="contact" ref={contactRef}>
      <Circles />
      <h1 ref={scrollTargets.contactoRef}>{translate("contact.title")}</h1>

      <div className="message">
        {contactArray.map((x, i) => (
          <div className="msg" key={i}>
            <h2>{x.subtitle}</h2>
            <p>{x.text}</p>
          </div>
        ))}
      </div>

      <div className="contact-options">
        <a className="contact-option gmail" href="mailto:isavil.94s@gmail.com">
          GMAIL
        </a>
        <a
          className="contact-option github"
          href="https://github.com/isaviil"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className="contact-option resume"
          href={translate("resume.file")}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Contact;

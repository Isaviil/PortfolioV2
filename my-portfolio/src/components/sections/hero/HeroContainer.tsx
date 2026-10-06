import "./hero-container.scss";
import { useRef } from "react";
import NightCity from "../../../assets/videos/Nightcity2077.mp4";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { fadeInFromLeft } from "../../../utils/gsap";

export default function HeroContainer() {
  /*
   * =================
   * REFERENCIAS
   *  ================
   */
  const { t: translate } = useTranslation();

  /*
   * =================
   * REFERENCIAS
   *  ================
   */

  const pRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pTwoRef = useRef<HTMLParagraphElement>(null);

  /*
   * =================
   * GSAP
   *  ================
   */

  useGSAP(() => {
    const elements = [pRef.current, h1Ref.current, pTwoRef.current].filter(
      Boolean,
    ) as Element[];

    fadeInFromLeft(elements);
  });

  return (
    <section className="hero-container">
      <div className="hero-container-video">
        <video src={NightCity} autoPlay muted loop />
      </div>

      <div className="hero-container-overlay"></div>

      <div className="hero-container-text">
        <p ref={pRef}>{translate(`hero.intro`)}</p>
        <h1 ref={h1Ref}>{translate("hero.name")}</h1>
      </div>

      <div className="hero-container-text-two">
        <p ref={pTwoRef}>{translate("hero.desc")}</p>
      </div>
    </section>
  );
}

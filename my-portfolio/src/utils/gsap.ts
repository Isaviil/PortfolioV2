import gsap from "gsap";

interface FadeInScrollInterface {
  sections: Element[];
  target: Element;
  start?: string;
}

// De izq. a posición original
export const fadeInFromLeft = (elements: Element[]) => {
  const timeline = gsap.timeline({ delay: 2.7 });

  elements.forEach((element) => {
    timeline.fromTo(
      element,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      },
    );
  });

  return timeline;
};

// Scrolltrigger al llegar a la mitad - Reemplazar
export const fadeInOnScroll = ({
  sections,
  target,
  start = "top 50%",
}: FadeInScrollInterface) => {
  if (!sections.length || !target) return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start,
      end: start,
    },
  });

  sections.forEach((section) => {
    timeline.fromTo(
      section,
      { opacity: 0 },
      { opacity: 1, delay: 0.2, duration: 0.4 },
    );
  });
};

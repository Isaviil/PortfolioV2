import './AboutMe.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Circles from './Circles';

gsap.registerPlugin(ScrollTrigger);

const aboutParagraphs = [
   {
    title: "Pasado",
    desc: [
        "Mi pasión por la programación inició como un pasatiempo, pero con el pasar de los meses, mi interés creció al ver diseños únicos e interactivos.",
        "Esta curiosidad inicial me motivó a aprender más sobre el frontend y crear mis propios proyectos."
    ]
   },{
    title: "Presente",
    desc: [
        "Soy estudiante de último año de Computación e Informática en Cibertec, institución a la que ingresé con el objetivo de aprender sobre el backend y seguir creciendo profesionalmente.",
        "Estoy en búsqueda de prácticas preprofesionales o roles junior en las que pueda aprender en entornos reales y seguir desarrollando mis habilidades."
    ]
   },{
    title: "Futuro",
    desc: [
        "Soy consciente de que el camino es largo, pero confío en que mi pasión por la programación y el compromiso con el aprendizaje continuo me permitirán alcanzar mis objetivos como futuro desarrollador."
    ]
   }
];










export default function AboutMe({scrollTargets}){
    const parentRef = useRef();

    useEffect(()=> {

    const targetEachElem = gsap.utils.toArray(".about-me-section");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: parentRef.current,
            //markers: true,
            start: "top 50%",
            end: "top 50%"
        }
    });

    targetEachElem.forEach((x, i)=>{
        tl.fromTo(x, {opacity: 0}, {opacity: 1, delay: .2, duration: .4})
    })

    }, []);
    

    return (        
        <section className="about-me" ref={parentRef}>

            <Circles />
            <h1 ref={scrollTargets.aboutRef}>Sobre mí</h1>

            <div className="am-position-container">
                {aboutParagraphs.map((x,i)=> (
                <article className="about-me-section" key={i}>
                    <div className="title">
                        <h2>{x.title}</h2>
                    </div>
                    
                    <div className="description">
                        {x.desc.map((description, ind)=> (                        
                            <p key={ind}>{description}</p>
                        ))}
                    </div>                  
                </article>
            ))}
            </div>

        </section>

    )
}
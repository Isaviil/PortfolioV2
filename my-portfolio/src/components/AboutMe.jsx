import './AboutMe.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Circles from './Circles';

gsap.registerPlugin(ScrollTrigger);

const aboutParagraphs = [
   {
    title: "Inicios",
    desc: [
        "Mi pasión comenzó en mi antiguo trabajo, con un simple y curioso click en un video sobre cómo crear un *Hello World* en html.",
        "Tras un tiempo, decidí llevar mi curiosidad al siguiente nivel y así poco a poco descubrí lo que era el frontend y backend."
    ]
   },{
    title: "Actualmente",
    desc: [
        "Soy estudiante en mis últimos ciclos de Computación e Informática.",
        "Me encuentro en búsqueda de prácticas pre profesionales o trabajos en los cuales pueda aprender, fortalecer y aplicar mis conocimientos en un entorno laboral real."
    ]
   },{
    title: "Extras",
    desc: [
        "Estoy aprendiendo typescript de manera autodidacta.",
        "Declaro types hasta en proyectos sin TS, cortesía de horas en Typescript.",
        "La interacción entre el backend, bases de datos y frontend me resulta muy interesante.",
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
            <h1 ref={scrollTargets.aboutRef}>Un poco sobre mí</h1>

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
import './TechSkills.scss';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

let arraySkills = [
    {
        category: "Front-end",
        skills: [
        "HTML",
        "React",
        "Javascript"]
    },{
        category: "Estilos y diseño",
        skills: [
        "CSS",
        "Tailwind",
        "Sass"
        ]
    },{
        category: "Back-end y bases de datos",
        skills: [
        "C# - ASP.NET MVC",
        "Java - Eclipse EE",
        "Microsoft SQL",
        "MySQL"
        ]
    }
]

export default function TechSkills({scrollTargets}){

    useEffect(()=>{
 
    const techSkills = gsap.utils.toArray(".tech-skills");

    techSkills.forEach((x, i)=>{
        gsap.fromTo(x, {opacity: 0}, {opacity: 1,
            scrollTrigger: {
                //markers: true,
                start: "top 80%",
                end: "top 80%",
                trigger: x
            }
        })
    })


}, [])

    return ( 
    <div className="tech" ref={scrollTargets.techRef}>

        <div className="project-title">
            <h1>Tecnologías</h1>
        </div>        

        <div className="tech-skills-container">
            {arraySkills.map((x, i)=> (
            
            <div className="tech-skills" key={i}>
                <h2>{x.category}</h2>
                <div className="skills">
                    <div className="skill-element">
                        {x.skills.map((y, index)=> (
                            <p key={index}>{y}</p>
                        ))}
                    </div>
                </div>
            </div>

            ))}
        </div>

    </div>
    )

}
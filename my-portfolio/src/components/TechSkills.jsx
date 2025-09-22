import './TechSkills.scss';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all'
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);


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


    const {t} = useTranslation();

    const arraySkills = t('technologies.stack', {returnObjects: true});

    return ( 
    <div className="tech" ref={scrollTargets.techRef}>

        <div className="project-title">
            <h1>{t('technologies.mainTitle')}</h1>
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
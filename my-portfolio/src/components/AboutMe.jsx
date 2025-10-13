import './AboutMe.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Circles from './Circles';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);


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

    const {t} = useTranslation();
    
    //Retrieving the content from the language file.
    const aboutParagraphs = t('aboutMe.sections', { returnObjects: true });
    

    return (        
        <section className="about-me" ref={parentRef}>

            <Circles />
            <h1 ref={scrollTargets.aboutRef}>{t('aboutMe.mainTitle')}</h1>

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
import './MyProjects.scss';
import githubIcon from '../assets/images/githubIcon.png';
import CirclesTwo from './CirclesTwo';
import gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);


export default function MyProjects({scrollTargets}){

    const parentRef = useRef();
    const pRef = useRef();
    const backgroundRef = useRef();

    useEffect(()=>{      
        const targetEachElem = gsap.utils.toArray(".projects");
        const githubIcon = gsap.utils.toArray(".github-icon");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parentRef.current,
            start: 'top 70%',
            end: 'top 70%',
          }
        });
            //background
            tl.fromTo(backgroundRef.current, {opacity: 0}, {opacity: 1, ease: "power2.out", duration: .3})

            //description
            tl.fromTo(pRef.current, {opacity: 0, x:-15}, { opacity: 1, x: 0, duration: .3})

            //Containears
            tl.fromTo(targetEachElem, {opacity: 0, x: -15}, {x: 0, opacity: 1, stagger: .4, delay: .2, duration: .7, ease: "power1.out"})                    

            //Icon
            tl.fromTo(githubIcon,{ opacity: 0 }, { opacity: 1, duration: .7, stagger: .4, ease: "power2.out" }
            );   

            }, [])



    const {t} = useTranslation();

    const projectArray = t('projects.myprojects', {returnObjects: true})       

    return(               
        <div className="my-projects" ref={parentRef}>
            <CirclesTwo/>

            <div className="project-title" ref={scrollTargets.projectRef}>
                <h1>{t('projects.mainTitle')}</h1>
            </div>

            <p ref={pRef}>{t('projects.mainDescription')}</p>
            
            <div className="projects-display" ref={backgroundRef}>

                {projectArray.map((x, i)=>(

                    <div className="projects" key={i}>

                        <div className="projects-img">
                          {
                            x.imgClick?
                              <a href={x.imgClick} target='_blank'>
                                <img src={x.img} alt={x.title}></img>
                              </a>
                            :
                            <img src={x.img} alt={x.title}></img>
                          }
                        </div>

                      <div className="projects-description">

                          <div className="projects-title-description">
                              <h2>{x.title}</h2>
                              {x.description.map((y, ind)=> (
                                  <p key={ind}> {y} </p>
                              ))}
                          </div>

                          <div className="technologies">
                              {x.tech.map((x, i)=> (
                                  <div className="tech-elem" key={i}>
                                      <p> {x} </p>
                                  </div>
                              ))}
                          </div>

                          <div className="github-icon">
                              <a href={x.github} target='_blank'><img src={githubIcon} alt="" /></a>   
                          </div>  
                      
                      </div>                     

                    </div>

                ))}

            </div>
        </div>
    )

}

/*

*/
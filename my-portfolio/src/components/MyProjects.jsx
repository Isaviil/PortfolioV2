import './MyProjects.scss';
import imgSignUp from '../assets/images/exampleSignup.png';
import imgCart from '../assets/images/exampleCart.png';
import imgLogIn from '../assets/images/exampleLogin.png';
import githubIcon from '../assets/images/githubIcon.png';
import CirclesTwo from './CirclesTwo';
import imgShop from '../assets/images/exampleShop.png';
import gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


const projectArray = [
    {
      img: imgShop,
      tech: [
        "Next.js",
        "React",
        "Typescript",
        "NextAuth",
        "SCSS",
        "Prisma",
        "Supabase"
      ],
      title: "E-Strive shop",
      description: [
        "※E-commerce digital de contenido descargable (DLCs).",
        "※Remake de mi primer proyecto académico, ahora con Typescript y hosteado en Supabase.",
        "※Incluye un usuario de prueba en el login."
      ],
      github: "https://github.com/Isaviil/next-shop",
      imgClick: "https://next-shop-gr59413t7-isaacs-projects-8d680544.vercel.app/"
    },
    {
      img: imgLogIn,
      tech: [
        "Next.js", 
        "React",
        "NextAuth",
        "SCSS",
        "Prisma",
        "Supabase"],
      title: "Autenticación Next.js",
      description: [
        "※Pequeña práctica con Next.js.",
        "※Se usó NextAuth para la validación del ingreso.",
        "※Incluye protección de rutas y redirección automática según el estado de la sesión.",
      ],
      github: "https://github.com/Isaviil/NextJSLogin",
      imgClick: "https://next-js-login-n59g0462i-isaacs-projects-8d680544.vercel.app/"
    },
    {
      img: imgSignUp,
      tech: [
        "HTML/CSS", 
        "JS"],
      title: "Interfaz de registro",
      description: [
        "※Formulario de registro redimensionable y sin backend.",
        "※Utiliza HTML, CSS y JavaScript puro para validación básica.",
        "※Diseñado como interfaz inicial para proyectos con autenticación de usuarios."
      ],
      github: "https://github.com/Isaviil/GuiltyGear-sign-up-demo",
      imgClick: "https://isaviil.github.io/GuiltyGear-sign-up-demo/"
      
    }, 
    {
      img: imgCart,
      tech: ["C#", 
        "JS", 
        "HTML/CSS",
        "Microsoft SQL"],
      title: "Tienda virtual",
      description: [
        "※Primer proyecto personal y académico publicado.",
        "※E-shop de venta de contenido descargable.",
        "※Diseño fijo, no redimensionable.",
      ],
      github: "https://github.com/Isaviil/guilty-gear-shop-junior",
      imgClick: null
    }
]

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




    return(               
        <div className="my-projects" ref={parentRef}>
            <CirclesTwo/>

            <div className="project-title" ref={scrollTargets.projectRef}>
                <h1>Proyectos</h1>
            </div>

            <p ref={pRef}>Algunos de mis proyectos personales y académicos que publiqué en <strong>Github</strong></p>
            
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
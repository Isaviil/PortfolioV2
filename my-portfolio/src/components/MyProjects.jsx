import './MyProjects.scss';
import imgSignUp from '../assets/images/exampleSignup.png';
import imgCart from '../assets/images/exampleCart.png';
import imgPortfolio from '../assets/images/examplePortfolio.png';
import imgLogIn from '../assets/images/exampleLogin.png';
import githubIcon from '../assets/images/githubIcon.png';
import CirclesTwo from './CirclesTwo';
import gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


const projectArray = [
    {
      img: imgSignUp,
      tech: [
        "HTML/CSS", 
        "JS"],
      title: "Interfaz de registro de usuario",
      description: [
        "※Formulario de registro inspirado en el estilo visual de Guilty Gear.",
        "※Utiliza HTML, CSS y JavaScript puro para validación básica y experiencia interactiva.",
        "※Diseñado como una interfaz inicial para proyectos con autenticación de usuarios."
      ],
      github: "https://github.com/Isaviil/GuiltyGear-sign-up-demo"
      
    }, {
      img: imgCart,
      tech: ["C#", 
        "JS", 
        "HTML/CSS",
        "Microsoft SQL"],
      title: "Tienda de videojuegos",
      description: [
        "※Mini tienda web inspirada en Guilty Gear, con un catálogo funcional.",
        "※Permite seleccionar, añadir productos al carrito y ver detalles.",
        "※Los datos de las compras y el usuario de guardan en el back-end"
      ],
      github: "https://github.com/Isaviil/guilty-gear-shop-junior"
    },{
      img: imgPortfolio,
      tech: [
        "HTML/CSS", 
        "JS", 
        "GSAP"],
      title: "Primer portafolio",
      description: [
        "※Primer portafolio web con animaciones personalizadas usando GSAP y JavaScript vanilla.",
        "※Contiene modales interactivos, transiciones fluidas y efectos tipográficos personalizados.",
        "※Desarrollado para experimentar con diseño dinámico sin frameworks como React o Vue."
      ],
      github: "https://github.com/Isaviil/PortfolioV1"
    },{
      img: imgLogIn,
      tech: [
        "Next.js", 
        "React",
        "NextAuth",
        "SCSS",
        "Prisma",
        "PostgreSQL"],
      title: "Sistema de Autenticación Next.js",
      description: [
        "※Formulario de registro y autentificación simple como práctica de Next.JS.",
        "※Se usó NextAuth para la validación del ingreso.",
        "※Incluye protección de rutas y redirección automática según el estado de la sesión."
      ],
      github: ""
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
            start: 'top 60%',
            end: 'top 60%'
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

            <p ref={pRef}>Algunos trabajos personales y académicos que realicé durante mi formación</p>
            
            <div className="projects-display" ref={backgroundRef}>

                {projectArray.map((x, i)=>(

                    <div className="projects" key={i}>

                        <div className="projects-img">
                            <img src={x.img} alt={x.title} />
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
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import './NavBar.scss';
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function NavBar({scrollTargets}){ 


function handleScroll(ref) {
  if (ref && ref.current) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: ref.current, offsetY: 70 }, 
      ease: "power2.out",
    });
  }
}

    const buttonRef = useRef();
    const navContainerRef = useRef();
    const navOneRef = useRef();
    const navTwoRef = useRef();
    const currentSize = useRef(window.innerWidth > 576 ? "large" : "small");

    //1.Intro animation
    useEffect(()=>{
        let navTimeline = gsap.timeline({delay: .8});
        navTimeline.fromTo(navContainerRef.current, {width: '0%', opacity: 0}, {width: '100%', opacity: 1,duration: .9, ease: "power1.out"})
        .fromTo(navOneRef.current, {x:-50, opacity: 0}, {x:0, opacity: 1, duration: .4})
            if (window.innerWidth > 576) {
                navTimeline.fromTo(navTwoRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 })
            }
        navTimeline.fromTo(buttonRef.current, {x:50, opacity: 0}, {x:0, opacity: 1, duration: .4}, '<')

    }, [])


    //2.EventListener to close the options on click
    const [navOpen, setNavOpen] = useState(false);

    useEffect(()=>{

        const btn = buttonRef.current;

        const removeNav = (e) => {

            if (e.target.closest(".bi-list")){
                if (navOpen){                    
                    gsap.to(navTwoRef.current, {opacity: 1, duration: .4, pointerEvents: "auto"})
                } else {
                    gsap.to(navTwoRef.current, {opacity: 0, duration: .4, pointerEvents: "none"})
                }
            }
        }

            document.addEventListener("click", removeNav);
            

        return ()=> {
            document.removeEventListener("click", removeNav)
        }


    }, [navOpen])




    //3. Resize Listener with debounce 

    const debounceRef = useRef();

    useEffect(() => {

        const triggerNavAnimation = () => {

        if (debounceRef.current){
            debounceRef.current.kill(); //-kill() the tween.
        }
 
        const newSize = window.innerWidth>576? "large" : "small";

            debounceRef.current = gsap.delayedCall(.3, ()=> {

                    if (newSize != currentSize.current){
                    currentSize.current = newSize;

                    if (newSize === "large"){
                        let tl = gsap.timeline();
                        tl.fromTo(navTwoRef.current, {opacity: 0}, {opacity: 1, pointerEvents: "auto"})
                        .fromTo(buttonRef.current, {opacity: 1}, {opacity: 0, pointerEvents: "none"});
                        setNavOpen(false);
                    } else {
                        let tl = gsap.timeline();
                        tl.fromTo(buttonRef.current, {opacity: 0}, {opacity: 1, pointerEvents: "auto"})
                        .fromTo(navTwoRef.current, {opacity: .5}, {opacity: 0, pointerEvents: "none", duration: .3})  
                    }
                }

            })

        }

        window.addEventListener("resize", triggerNavAnimation);

        return ()=>{
            window.removeEventListener("resize", triggerNavAnimation);
            if (debounceRef.current) debounceRef.current.kill();
        }

    }, []);

    
    //4. Close options on >576px on click

    useEffect(()=>{

        const listLi = gsap.utils.toArray(".nav-two ul li a")

        const closeOnClick = () =>{

            if (window.innerWidth<=576){
                gsap.to(navTwoRef.current, {opacity: 0, duration: .4, pointerEvents: "none", onComplete: ()=> {setNavOpen(false)}});
            }
        }

            listLi.forEach((x, i)=> x.addEventListener("click", closeOnClick));

            return ()=>{
                listLi.forEach((x, i)=> x.removeEventListener("click", closeOnClick));
            }
            
    }, [])




    //5. Toggle night/light btn

    //Checking the state night/light mode

    const [nightMode, setNightMode] = useState(true);
    const moonRef = useRef();
    const sunRef = useRef();
    let isAnimating = useRef(false);
    

    const safeToggle = () =>{
        if (isAnimating.current){
                return;
        } else {
                isAnimating.current = true;
                setNightMode(!nightMode);
        }
    }

    useEffect(()=>{

        document.body.setAttribute("data-theme", nightMode? "dark": "light");

        if (nightMode){
            let tl = gsap.timeline();
            tl.fromTo(moonRef.current, {opacity: 1}, {opacity: 0, duration: .3, ease: "power2.out"})
            .fromTo(sunRef.current, {opacity: 0}, {opacity: 1, duration: .6, ease: "power2.out",
                onComplete: ()=>{
                    isAnimating.current = false;
                }
            })

        } else {
            let tl = gsap.timeline();
            tl.fromTo(sunRef.current, {opacity: 1}, {opacity: 0, duration: .3, ease: "power2.out"})
            .fromTo(moonRef.current, {opacity: 0}, {opacity: 1, duration: .6, ease: "power2.out",
                onComplete: ()=>{
                    isAnimating.current = false;
                }
            })
        }

        


    }, [nightMode])
    


    

    return (
       <nav className="nav" ref={navContainerRef}>
            <div className="nav-one" ref={navOneRef}>
                    <i className="bi bi-sun-fill" ref={sunRef} onClick={safeToggle}></i>
                    <i className="bi bi-moon-fill" ref={moonRef} onClick={safeToggle}></i>
            </div>

            <div className="hamburguer-menu">
                <i className="bi bi-list" onClick={()=> setNavOpen(!navOpen)} ref={buttonRef}></i>    
            </div>  

            <div className={`nav-two ${navOpen? 'show': ''}`} ref={navTwoRef}>              

                <ul>
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleScroll(scrollTargets.aboutRef); }}>
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a href="#" onClick={(e)=> { e.preventDefault(); handleScroll(scrollTargets.techRef); }}>
                            Tecnologías
                        </a>
                    </li> 

                    <li>
                        <a href="#" onClick={(e)=> {e.preventDefault(); handleScroll(scrollTargets.projectRef)}}>
                            Projectos
                        </a>
                    </li>

                    <li>
                        <a href="#" onClick={(e)=> {e.preventDefault(); handleScroll(scrollTargets.contactoRef)}}>
                            Contacto
                        </a>
                    </li>                
                </ul>
            </div>
       </nav> 

    )
}
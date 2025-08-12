import './HeroContainer.scss'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function HeroContainer(){

    const pRef = useRef();
    const h1Ref = useRef();
    const pTwoRef = useRef();

    useEffect(()=>{
        const heroTimeline = gsap.timeline({delay: 2});
        heroTimeline.fromTo(pRef.current, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: .3, ease: "power1.out"})
        .fromTo(h1Ref.current, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: .3, ease: "power1.out"})
        .fromTo(pTwoRef.current, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: .3, ease: "power1.out"})
    })

    return (
    <section className="hero-container">
        
        <div className="hero-container-text">
            <p ref={pRef}>Hola! Soy</p>
            <h1 ref={h1Ref}>Isaac Villafuerte,</h1>
        </div>

        <div className="hero-container-text-two">
            <p ref={pTwoRef}>Desarrollador fullstack en formación</p>
        </div>
    </section>
    )
}
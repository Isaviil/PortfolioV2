import './Contact.scss'
import Circles from './Circles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Contact = ({scrollTargets}) =>{

    const contactRef = useRef();

    useEffect(()=>{

        const msgContainer = gsap.utils.toArray(".msg");

        let tl = gsap.timeline({scrollTrigger:{
            //markers: true,
            trigger: contactRef.current,
            start: "top 60%",
            end: "top 60%"
        }})

        tl.fromTo(msgContainer, {opacity: 0}, {opacity: 1, stagger: .5, duration: .7, ease: "power1.out"})

    }, []);


    return (
        <div className="contact" ref={contactRef}>
            <Circles/>
            <h1 ref={scrollTargets.contactoRef}>
                Contacto
            </h1>
 
            <div className="message">
                <div className="msg">
                    <h2>Oportunidades</h2>
                    <p> Me encuentro en busca de oportunidades de trabajo como practicante. Me gustaría poder aplicar y adquirir más conocimientos en un entorno de trabajo real ya sea front-end o back-end.</p>
                </div>

                <div className="msg">
                    <h2>¿Conectar?</h2>
                    <p>Si tienes alguna pregunta o deseas contantarme, puedes hacerlo mediante los siguientes medios. Siempre reviso mis mensajes</p>
                </div>
            </div>

            <div className="contact-options">
                <a className="contact-option gmail" href="mailto:isavil.94s@gmail.com">GMAIL</a>
                <a className="contact-option github" href="https://github.com/isaviil" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a className="contact-option resume" href="#" target='_blank'>CV</a>
            </div>

        </div>
    )
}

export default Contact;
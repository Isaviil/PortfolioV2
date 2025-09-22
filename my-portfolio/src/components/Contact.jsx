import './Contact.scss'
import Circles from './Circles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

    const {t} = useTranslation();

    const contactArray = t('contact.message', {returnObjects: true})


    return (
        <div className="contact" ref={contactRef}>
            <Circles/>
            <h1 ref={scrollTargets.contactoRef}>
                {t('contact.title')}
            </h1>
 
            <div className="message">
                {contactArray.map((x, i)=> 
                    <div className="msg" key={i}>
                        <h2>{x.subtitle}</h2>
                        <p>{x.text}</p>
                    </div>
                )}
            </div>

            <div className="contact-options">
                <a className="contact-option gmail" href="mailto:isavil.94s@gmail.com">GMAIL</a>
                <a className="contact-option github" href="https://github.com/isaviil" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a className="contact-option resume" href={t('resume.file')} target='_blank' rel="noopener noreferrer">CV</a>
            </div>

        </div>
    )
}

export default Contact;


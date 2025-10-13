import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import imgSignUp from '../assets/images/exampleSignup.png';
import imgCart from '../assets/images/exampleCart.png';
import imgLogIn from '../assets/images/exampleLogin.png';
import imgShop from '../assets/images/exampleShop.png';

const resources = {

    en: {
        translation: {
            nav: {
                about: "About Me",
                tech: "Technologies",
                projects: "Projects",
                contact: "Contact"
            },
            hero: {
                intro: "Hi! I am",
                name: "Isaac Villafuerte",
                desc: "Programming enthusiast fueled by tea"
            },
            aboutMe: {
                mainTitle: "A little bit about me",
                sections: [
                    {
                        title: "Beginnings",
                        desc: [
                            "My passion started at my previous job, with a simple click on a video about creating a *Hello World* in HTML.",
                            "After a while, I decided to take my curiosity to the next level, gradually learning about frontend and backend."
                        ]
                        },
                        {
                        title: "Present",
                        desc: [
                            "I'm a student in the final stages of my Computer Science studies.",
                            "I am looking for internships or entry-level positions where I can learn, strengthen, and grow professionally in a real work environment."
                        ]
                        },
                        {
                        title: "Extras",
                        desc: [
                            "I am learning Typescript on my own",
                            "I add type annotations even in projects without TypeScript, all because of the hours I spent practicing it.",
                            "I'm very interested in everything related to backend development.",
                            "I enjoy working with C#, but I would like to learn another backend technology."
                        ]
                    }
                ]
            },
            technologies: {
                mainTitle: "Technologies",
                stack: [
                    {
                        category: "Front-end",
                        skills: [
                        "HTML",
                        "React",
                        "Javascript",
                        "Typescript",
                        "Next.js",]
                    },{
                        category: "Styling and design",
                        skills: [
                        "CSS",
                        "Tailwind",
                        "Sass"
                        ]
                    },{
                        category: "Back-end and databases",
                        skills: [
                        "C# - ASP.NET MVC",
                        "Java",
                        "Node.JS - Básico",
                        "Microsoft SQL",
                        "MySQL",
                        "Supabase - Cloud"
                        ]
                    }
                ]
            },
            projects: {
                mainTitle: "Projects",
                mainDescription: "Some of my personal and academic work.",
                myprojects: [
                    {
                    img: imgCart,
                    tech: [
                        "Next.js",
                        "React",
                        "Typescript",
                        "NextAuth",
                        "SCSS",
                        "Prisma",
                        "Supabase"
                    ],
                    title: "Worklink",
                    description: [
                        "※Demo project for user profile simulation.",
                        "※Includes sign-up, login, and image gallery.",
                        "※Content can be viewed without logging in.",
                    ],
                    github: "https://github.com/Isaviil/WorkLink",
                    imgClick: "https://work-link-s1zz-67eio3tea-isaacs-projects-8d680544.vercel.app/"
                    },
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
                        "※Digital e-commerce for downloadable content (DLCs).",
                        "※Remake of my first academic project, now with TypeScript and hosted on Supabase.",
                        "※Includes a test user for login."
                    ],
                    github: "https://github.com/Isaviil/next-shop",
                    imgClick: "https://next-shop-i2ff6l92w-isaacs-projects-8d680544.vercel.app/"
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
                    title: "Next.js Authentication",
                    description: [
                        "※Small practice project with Next.js.",
                        "※Used NextAuth for login validation.",
                        "※Includes route protection and automatic redirection based on session state.",
                    ],
                    github: "https://github.com/Isaviil/NextJSLogin",
                    imgClick: "https://next-js-login-n59g0462i-isaacs-projects-8d680544.vercel.app/"
                    },
                    {
                    img: imgSignUp,
                    tech: [
                        "HTML/CSS", 
                        "JS"],
                    title: "Sign-Up Interface",
                    description: [
                        "※Resizable registration form without a backend.",
                        "※Built with raw HTML, CSS, and JavaScript for basic validation.",
                        "※Designed as an initial interface for projects with user authentication."
                    ],
                    github: "https://github.com/Isaviil/GuiltyGear-sign-up-demo",
                    imgClick: "https://isaviil.github.io/GuiltyGear-sign-up-demo/"
                    
                    }                   
                ]
            },
            contact: {
                title: "Contact",
                message: [
                    {
                        subtitle: "Looking for..",
                        text: "job opportunities where I can learn and grow in a real work environment."
                    },
                    {
                        subtitle: "Let's talk!",
                        text: "I always check my Gmail and phone messages. Feel free to reach out anytime!"
                    }
                ]
            },
            resume: {
                file: "/PortfolioV2/docs/Isaac_Villafuerte_Resume_ENG.pdf"
            }
        }
    },
    es: {
        translation: {
            nav: {
                about: "Sobre mí",
                tech: "Tecnologías",
                projects: "Proyectos",
                contact: "Contacto"                
            },
            hero: {
                intro: "Hola! Soy",
                name: "Isaac Villafuerte",
                desc: "Entusiasta de la programación y el té"
            },
            aboutMe: {
                mainTitle: "Un poco sobre mí",
                sections: [
                    {
                        title: "Inicios",
                        desc: [
                            "Mi pasión comenzó en mi antiguo trabajo, con un simple click en un video sobre cómo crear un *Hello World* en html.",
                            "Tras un tiempo, decidí llevar mi curiosidad al siguiente nivel y así poco a poco aprendí sobre el frontend y backend."
                        ]
                        },
                        {
                        title: "Actualmente",
                        desc: [
                            "Soy estudiante en mis últimos ciclos de Computación e Informática.",
                            "Me encuentro en búsqueda de prácticas pre profesionales o trabajos en los cuales pueda aprender, fortalecer y crecer profesionalmente en un entorno laboral real."
                        ]
                        },
                        {
                        title: "Extras",
                        desc: [
                            "Estoy aprendiendo typescript de manera autodidacta.",
                            "Declaro types hasta en proyectos sin TS, cortesía de horas en Typescript.",
                            "Tengo un gran interés en todo lo que respecta a backend.",
                            "Disfruto trabajar con C#, pero me gustaría aprender otra tecnología backend."
                        ]
                    }
                ]
            },
            technologies: {
                mainTitle: "Tecnologías",
                stack: [
                    {
                        category: "Front-end",
                        skills: [
                        "HTML",
                        "React",
                        "Javascript",
                        "Typescript",
                        "Next.js",]
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
                        "Java",
                        "Node.JS - Básico",
                        "Microsoft SQL",
                        "MySQL",
                        "Supabase - Cloud"
                        ]
                    }
                ]
            },
            projects: {
                mainTitle: "Proyectos",
                mainDescription: "Algunos proyectos personales y académicos que publiqué en Github",
                myprojects: [
                    {
                    img: imgCart,
                    tech: [
                        "Next.js",
                        "React",
                        "Typescript",
                        "NextAuth",
                        "SCSS",
                        "Prisma",
                        "Supabase"
                    ],
                    title: "Worklink",
                    description: [
                        "※Ejercicio para simular perfiles de usuarios.",
                        "※Incluye registro, login y galería de imágenes.",
                        "※El contenido puede verse sin iniciar sesión.",
                    ],
                    github: "https://github.com/Isaviil/WorkLink",
                    imgClick: "https://work-link-s1zz-67eio3tea-isaacs-projects-8d680544.vercel.app/"
                    },
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
                        "※E-commerce de contenido descargable (DLCs).",
                        "※Remake de mi primer proyecto académico, ahora con Typescript y hosteado en Supabase.",
                        "※Incluye un usuario de prueba en el login."
                    ],
                    github: "https://github.com/Isaviil/next-shop",
                    imgClick: "https://next-shop-1gby5mlgt-isaacs-projects-8d680544.vercel.app/"
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
                    
                    }                                       
                ]
            },
            contact: {
                title: "Contacto",
                message: [
                    {
                        subtitle: "En búsqueda..",
                        text: "de oportunidades de trabajo con el objetivo de aprender y crecer en un entorno de trabajo real."
                    },
                    {
                        subtitle: "Conversemos!",
                        text: "Siempre reviso mis mensajes en Gmail o en el teléfono. Escríbeme cuando quieras!"
                    }
                ]
            },
            resume: {
                file: "/PortfolioV2/docs/Isaac_Villafuerte_Resume_ESP.pdf"
            }
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    interpolation: { escapeValue: false } 
});

export default i18n;
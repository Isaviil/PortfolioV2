import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import imgCart from "../assets/images/exampleCart.png";
import imgShop from "../assets/images/exampleShop.png";
import imgMiniThesis from "../assets/images/mini_proyecto_003.png";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About Me",
        tech: "Technologies",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        intro: "Hi! I am",
        name: "Isaac Villafuerte",
        desc: "Frontend Developer | Full-Stack Experience",
      },
      aboutMe: {
        mainTitle: "A little bit about me",
        sections: [
          {
            title: "Beginnings",
            desc: [
              "My interest in programming started at my previous job, driven by a curiosity about web development.",
              "That curiosity led me to explore both frontend and backend development, eventually turning programming into my career.",
            ],
          },
          {
            title: "Present",
            desc: [
              "I completed my Software Development studies at Cibertec and am currently in the process of obtaining my degree.",
              "I develop ERP systems, which has allowed me to strengthen my TypeScript skills, apply a modular approach, and build custom solutions tailored to client needs.",
            ],
          },
          {
            title: "Fun Facts",
            desc: [
              "My favorite hobby is swimming, especially during the summer. I tried swimming once in winter; never again.",
              "Writing plain JavaScript without TypeScript feels weird to me now.",
              "Souls-like games stress me out quite a bit, but I love them.",
            ],
          },
        ],
      },
      technologies: {
        mainTitle: "Technologies",
        stack: [
          {
            category: "Front-end",
            skills: ["HTML", "React", "JavaScript", "TypeScript", "Next.js"],
          },
          {
            category: "Styling and design",
            skills: ["CSS", "Tailwind", "Sass"],
          },
          {
            category: "Back-end and databases",
            skills: [
              "C# - ASP.NET MVC",
              "Java",
              "Node.js",
              "PostgreSQL",
              "Microsoft SQL",
              "MySQL",
              "Supabase - Cloud",
            ],
          },
          {
            category: "Libraries and tools",
            skills: ["TanStack Query", "Zustand", "React Hook Form", "Prisma"],
          },
        ],
      },
      projects: {
        mainTitle: "Projects",
        mainDescription:
          "Some of my projects, including my <1>portfolio</1>, published on GitHub",
        myprojects: [
          {
            img: imgMiniThesis,
            tech: [
              "Next.js",
              "React",
              "Typescript",
              "NextAuth",
              "SCSS",
              "Prisma",
              "Supabase",
              "React Hook Form",
              "Axios",
            ],
            title: "Sales Management System",
            description: [
              "• Web-based sales management system designed for small businesses.",
              "• Developed as part of my academic thesis project. Currently in development.",
              "• Includes authentication, product and customer management, and sales reports.",
            ],
            github: "https://github.com/Isaviil/sistema-gestion-ventas",
            imgClick: "https://sistema-gestion-ventas-r63a.vercel.app",
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
              "Supabase",
            ],
            title: "E-Strive shop",
            description: [
              "• Digital e-commerce for downloadable content (DLCs).",
              "• Remake of one of my earliest projects, originally built with HTML, CSS, and JavaScript.",
              "• Remade using TypeScript as a way to learn and practice the language.",
            ],
            github: "https://github.com/Isaviil/next-shop",
            imgClick:
              "https://next-shop-alyuog2lt-isaacs-projects-8d680544.vercel.app/",
          },
          {
            img: imgCart,
            tech: [
              "Next.js",
              "React",
              "Typescript",
              "NextAuth",
              "SCSS",
              "Prisma",
              "Supabase",
            ],
            title: "Worklink",
            description: [
              "• Demo project for user profile simulation.",
              "• Includes sign-up, login, and image gallery.",
              "• Content can be viewed without logging in.",
            ],
            github: "https://github.com/Isaviil/WorkLink",
            imgClick:
              "https://work-link-s1zz-67eio3tea-isaacs-projects-8d680544.vercel.app/",
          },
        ],
      },
      contact: {
        title: "Contact",
        message: [
          {
            subtitle: "Aiming to...",
            text: "Grow professionally and take on new challenges in real-world environments.",
          },
          {
            subtitle: "Let's talk!",
            text: "I always check my Gmail and phone messages. Feel free to reach out anytime!",
          },
        ],
      },
      resume: {
        file: "/PortfolioV2/docs/Isaac_Villafuerte_Resume_ENG.pdf",
      },
    },
  },
  es: {
    translation: {
      nav: {
        about: "Sobre mí",
        tech: "Tecnologías",
        projects: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        intro: "Hola! Soy",
        name: "Isaac Villafuerte",
        desc: "Desarrollador Frontend | Experiencia Full-Stack",
      },
      aboutMe: {
        mainTitle: "Un poco sobre mí",
        sections: [
          {
            title: "Inicios",
            desc: [
              "Mi interés por la programación comenzó en mi antiguo trabajo, por curiosidad de aprender a crear páginas web.",
              "Esa búsqueda inicial me llevó a explorar el desarrollo frontend y backend, y eventualmente a convertir la programación en mi profesión.",
            ],
          },
          {
            title: "Actualmente",
            desc: [
              "Culminé mis estudios de Computación e Informática en Cibertec y actualmente me encuentro en proceso de obtener mi título.",
              "Desarrollo sistemas ERP, lo que me ha permitido consolidar el uso de TypeScript, aplicar un enfoque modular y diseñar soluciones a medida según los requerimientos del cliente.",
            ],
          },
          {
            title: "Curiosidades",
            desc: [
              "Mi hobby favorito es nadar, especialmente durante los veranos. Intenté nadar una vez en invierno; nunca más.",
              "Se me hace extraño escribir código sin TypeScript.",
              "Los juegos Souls-like me estresan bastante, pero me gustan.",
            ],
          },
        ],
      },

      technologies: {
        mainTitle: "Tecnologías",
        stack: [
          {
            category: "Front-end",
            skills: ["HTML", "React", "JavaScript", "TypeScript", "Next.js"],
          },
          {
            category: "Estilos y diseño",
            skills: ["CSS", "Tailwind", "Sass"],
          },
          {
            category: "Back-end y bases de datos",
            skills: [
              "C# - ASP.NET MVC",
              "Java",
              "Node.js",
              "PostgreSQL",
              "Microsoft SQL",
              "MySQL",
              "Supabase",
            ],
          },
          {
            category: "Librerías y herramientas",
            skills: ["TanStack Query", "Zustand", "React Hook Form", "Prisma"],
          },
        ],
      },

      projects: {
        mainTitle: "Proyectos",
        mainDescription:
          "Algunos proyectos, además de mi <1>portafolio</1>, que publiqué en Github",
        myprojects: [
          {
            img: imgMiniThesis,
            tech: [
              "Next.js",
              "React",
              "Typescript",
              "NextAuth",
              "SCSS",
              "Prisma",
              "Supabase",
              "React Hook Form",
              "Axios",
            ],
            title: "Sistema de ventas",
            description: [
              "• Sistema web de gestión de ventas para pequeñas empresas.",
              "• Desarrollado inicialmente como parte de mi tesis y actualmente en desarrollo.",
              "• Incluye autenticación, gestión de productos, clientes y reportes de ventas",
            ],
            github: "https://github.com/Isaviil/sistema-gestion-ventas",
            imgClick: "https://sistema-gestion-ventas-r63a.vercel.app",
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
              "Supabase",
            ],
            title: "E-Strive shop",
            description: [
              "• E-commerce de contenido descargable (DLCs).",
              "• Remake de uno de mis primeros proyectos, originalmente desarrollado con HTML, CSS y JavaScript.",
              "• Rehecho con TypeScript como forma de aprendizaje y práctica del lenguaje.",
            ],
            github: "https://github.com/Isaviil/next-shop",
            imgClick:
              "https://next-shop-alyuog2lt-isaacs-projects-8d680544.vercel.app/",
          },
          {
            img: imgCart,
            tech: [
              "Next.js",
              "React",
              "Typescript",
              "NextAuth",
              "SCSS",
              "Prisma",
              "Supabase",
            ],
            title: "Worklink",
            description: [
              "• Ejercicio para simular perfiles de usuarios.",
              "• Incluye registro, login y galería de imágenes.",
              "• El contenido puede verse sin iniciar sesión.",
            ],
            github: "https://github.com/Isaviil/WorkLink",
            imgClick:
              "https://work-link-s1zz-67eio3tea-isaacs-projects-8d680544.vercel.app/",
          },
        ],
      },
      contact: {
        title: "Contacto",
        message: [
          {
            subtitle: "En búsqueda..",
            text: "De seguir creciendo profesionalmente y asumir nuevos retos.",
          },
          {
            subtitle: "Conversemos!",
            text: "Siempre reviso mis mensajes en Gmail o en el teléfono. Escríbeme cuando quieras!",
          },
        ],
      },
      resume: {
        file: "/PortfolioV2/docs/Isaac_Villafuerte_Resume_ESP.pdf",
      },
    },
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;

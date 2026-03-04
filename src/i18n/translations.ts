export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;
export const defaultLang: Language = "es";

export const ui = {
  es: {
    // Meta
    "meta.title": "Angel Portuondo — Desarrollador de Videojuegos",
    "meta.description":
      "Portafolio de Angel Alberto Portuondo Hierrezuelo. Desarrollador de videojuegos especializado en Unreal Engine y Godot. Experiencia en desarrollo web fullstack, sistemas y herramientas. Estudiante de Ciencias de la Computación.",

    // Nav
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "nav.resume": "Descargar CV",
    "cv.download": "Descargar CV",
    "cv.link":
      "https://docs.google.com/document/d/1NaoBaaDtAc2L0FIMPwNHXwQSh7QI9WcQ/edit?usp=drive_link&ouid=109799712322136287398&rtpof=true&sd=true",
    "cv.es":
      "https://docs.google.com/document/d/1NaoBaaDtAc2L0FIMPwNHXwQSh7QI9WcQ/edit?usp=drive_link&ouid=109799712322136287398&rtpof=true&sd=true",
    "cv.en":
      "https://docs.google.com/document/d/1Sh-SpWT8JD3F4h_WDIcjj8un0KwDLMHb/edit?usp=drive_link&ouid=109799712322136287398&rtpof=true&sd=true",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.name": "Angel Portuondo",
    "hero.role": "Desarrollador de Videojuegos & Full Stack",
    "hero.description":
      "Desarrollador Full Stack con más de 2 años de experiencia. Especializado en Unreal Engine para desarrollo de juegos y herramientas. Experto en web con Astro, React y Svelte. Combino rendimiento, diseño y código limpio.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.contact": "Contactar",
    "hero.scroll": "Scroll para explorar",

    // About
    "about.title": "Sobre mí",
    "about.subtitle": "Un poco sobre quién soy y qué hago",
    "about.description":
      "Más de 2 años de experiencia como Desarrollador Full Stack. En Xitry Games, trabajé con Unreal Engine creando herramientas, gameplay y la página web oficial del estudio. He construido soluciones frontend y backend combinando diseño, rendimiento y funcionalidad. Actualmente estudiante de Licenciatura en Ciencias de la Computación en la Universidad de Oriente.",
    "about.card1.title": "Unreal Engine & Desarrollo de Juegos",
    "about.card1.description":
      "Desarrollo de funcionalidades y sistemas en Unreal Engine. Creación de herramientas internas y lógica de gameplay. Colaboración con equipos de arte y diseño para coherencia visual entre juego y web.",
    "about.card2.title": "Desarrollo Web Full Stack",
    "about.card2.description":
      "Diseño y desarrollo de sitios web con Astro, React y Svelte. TypeScript, Node.js, Tailwind CSS. Despliegue en Cloudflare Pages con CI/CD. Experiencia profesional creando la web oficial de Xitry Games.",
    "about.card3.title": "Tecnologías & Herramientas",
    "about.card3.description":
      "JavaScript, TypeScript, C++, Python, HTML, CSS, SQL. React, Node, Git, GitHub, Linux. Español nativo, Inglés intermedio (B1). Rendimiento optimizado y diseño responsivo.",
    "about.stats.experience": "Años de experiencia",
    "about.stats.projects": "Proyectos completados",
    "about.stats.technologies": "Tecnologías",
    "about.cta.resume": "Descargar mi CV",

    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle":
      "Videojuegos, aplicaciones web y herramientas que combinan creatividad, tecnología e innovación",
    "projects.viewCode": "Código",
    "projects.viewDemo": "Demo",
    "projects.viewAll": "Ver todos los proyectos",
    "projects.filter.all": "Todos",
    "projects.filter.web": "Web",
    "projects.filter.game": "Juegos",
    "projects.filter.tool": "Herramientas",

    // Skills
    "skills.title": "Habilidades",
    "skills.subtitle":
      "Tecnologías y herramientas que utilizo para crear soluciones completas",

    // Footer
    "footer.tagline":
      "Construyendo experiencias digitales con código y creatividad.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Hecho con",
    "footer.and": "y mucho",
    "footer.code": "código",
    "footer.nav": "Navegación",
    "footer.status": "Estado",
    "footer.available": "Disponible para trabajar",

    // 404
    "404.title": "Página no encontrada",
    "404.description":
      "Lo siento, la página que buscas no existe o ha sido movida.",
    "404.back": "Volver al inicio",
    "404.label": "Error 404 · Página no encontrada",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? Hablemos.",
    "contact.email": "Enviar email",
    "contact.or": "o encuéntrame en",
  },

  en: {
    // Meta
    "meta.title": "Angel Portuondo — Game Developer",
    "meta.description":
      "Portfolio of Angel Alberto Portuondo Hierrezuelo. Game Developer specializing in Unreal Engine and Godot. Fullstack web development, systems programming and game design. Computer Science student.",

    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.resume": "Download CV",
    "cv.download": "Download CV",
    "cv.link":
      "https://docs.google.com/document/d/1Sh-SpWT8JD3F4h_WDIcjj8un0KwDLMHb/edit?usp=drive_link&ouid=109799712322136287398&rtpof=true&sd=true",
    "cv.es":
      "https://docs.google.com/document/d/1NaoBaaDtAc2L0FIMPwNHXwQSh7QI9WcQ/edit?usp=drive_link&ouid=109799712322136287398&rtpof=true&sd=true",
    "cv.en":
      "https://docs.google.com/document/d/1Sh-SpWT8JD3F4h_WDIcjj8un0KwDLMHb/edit?usp=drive_link&ouid=109799712322136287398&rtpof=true&sd=true",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Angel Portuondo",
    "hero.role": "Game Developer & Full Stack Developer",
    "hero.description":
      "Full Stack Developer with more than 2 years of experience. Specialized in Unreal Engine for game and tools development. Expert in web with Astro, React and Svelte. I combine performance, design and clean code.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "hero.scroll": "Scroll to explore",

    // About
    "about.title": "About me",
    "about.subtitle": "A bit about who I am and what I do",
    "about.description":
      "More than 2 years of experience as a Full Stack Developer. At Xitry Games, I worked with Unreal Engine creating tools, gameplay and the studio's official website. I've built frontend and backend solutions combining design, performance and functionality. Currently pursuing a Bachelor's degree in Computer Science at Universidad de Oriente.",
    "about.card1.title": "Unreal Engine & Game Development",
    "about.card1.description":
      "Development of features and systems in Unreal Engine. Creation of internal tools and gameplay logic. Collaboration with art and design teams for visual coherence between game and web.",
    "about.card2.title": "Full Stack Web Development",
    "about.card2.description":
      "Website design and development with Astro, React and Svelte. TypeScript, Node.js, Tailwind CSS. Deployment on Cloudflare Pages with CI/CD. Professional experience creating Xitry Games official website.",
    "about.card3.title": "Technologies & Tools",
    "about.card3.description":
      "JavaScript, TypeScript, C++, Python, HTML, CSS, SQL. React, Node, Git, GitHub, Linux. Native Spanish, Intermediate English (B1). Optimized performance and responsive design.",
    "about.stats.experience": "Years of experience",
    "about.stats.projects": "Projects completed",
    "about.stats.technologies": "Technologies",
    "about.cta.resume": "Download my CV",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle":
      "Games, web applications and tools that combine creativity, technology and innovation",
    "projects.viewCode": "Code",
    "projects.viewDemo": "Demo",
    "projects.viewAll": "View all projects",
    "projects.filter.all": "All",
    "projects.filter.web": "Web",
    "projects.filter.game": "Games",
    "projects.filter.tool": "Tools",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle":
      "Technologies and tools I use to build complete solutions",

    // Footer
    "footer.tagline": "Building digital experiences with code and creativity.",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with",
    "footer.and": "and lots of",
    "footer.code": "code",
    "footer.nav": "Navigation",
    "footer.status": "Status",
    "footer.available": "Available for work",

    // 404
    "404.title": "Page not found",
    "404.description":
      "Sorry, the page you're looking for doesn't exist or has been moved.",
    "404.back": "Back to home",
    "404.label": "Error 404 · Page not found",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk.",
    "contact.email": "Send email",
    "contact.or": "or find me on",
  },
} as const;

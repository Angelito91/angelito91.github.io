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

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.name": "Angel Portuondo",
    "hero.role": "Desarrollador de Videojuegos & Full Stack",
    "hero.description":
      "Estudiante de Ciencias de la Computación especializado en desarrollo de videojuegos con Unreal Engine 5 y Godot. También experto en desarrollo web fullstack, sistemas y herramientas. Combino creatividad, tecnología y código limpio.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.contact": "Contactar",
    "hero.scroll": "Scroll para explorar",

    // About
    "about.title": "Sobre mí",
    "about.subtitle": "Un poco sobre quién soy y qué hago",
    "about.description":
      "Soy estudiante de Ciencias de la Computación especializado en desarrollo de videojuegos. He creado juegos inmersivos con Unreal Engine 5 (C++ y Blueprint) y Godot Engine (GDScript), combinando mecánicas complejas con narrativas envolventes. También tengo sólida experiencia en desarrollo web fullstack (Astro, React, Svelte), sistemas en Rust, bots de Telegram y aplicaciones de escritorio. En Xitry Games ayudé a impulsar proyectos creativos con tecnología de punta.",
    "about.card1.title": "Desarrollo de Videojuegos",
    "about.card1.description":
      "Juegos 3D con Unreal Engine 5 (C++, Blueprint) y Godot Engine (GDScript). Sistemas de IA avanzada, física realista, ray tracing y diseño de niveles. Del concepto a la publicación con excelente rendimiento.",
    "about.card2.title": "Desarrollo Web & Full Stack",
    "about.card2.description":
      "Sitios web modernos con Astro, React, Svelte y TypeScript. APIs REST con Node.js, bots de Telegram, compiladores educativos en Rust. Experiencia profesional en Xitry Games.",
    "about.card3.title": "Herramientas & Aplicaciones",
    "about.card3.description":
      "Aplicaciones interactivas con Flet, simuladores educativos, editores especializados. Desde herramientas de línea de comandos hasta soluciones multiplataforma de escritorio.",
    "about.stats.experience": "Años de experiencia",
    "about.stats.projects": "Proyectos completados",
    "about.stats.technologies": "Tecnologías",

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

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Angel Portuondo",
    "hero.role": "Game Developer & Full Stack Developer",
    "hero.description":
      "Computer Science student specializing in game development with Unreal Engine 5 and Godot. Expert in fullstack web development, systems programming and creative tools. I combine innovation, technology and clean code.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "hero.scroll": "Scroll to explore",

    // About
    "about.title": "About me",
    "about.subtitle": "A bit about who I am and what I do",
    "about.description":
      "I'm a Computer Science student specializing in game development. I create immersive games with Unreal Engine 5 (C++ and Blueprint) and Godot Engine (GDScript), combining complex mechanics with engaging narratives. I also have solid fullstack web development experience (Astro, React, Svelte), systems programming in Rust, Telegram bots, and desktop applications. At Xitry Games I helped drive creative projects with cutting-edge technology.",
    "about.card1.title": "Game Development",
    "about.card1.description":
      "3D games with Unreal Engine 5 (C++, Blueprint) and Godot Engine (GDScript). Advanced AI systems, realistic physics, ray tracing and level design. From concept to publication with excellent performance.",
    "about.card2.title": "Web & Full Stack Development",
    "about.card2.description":
      "Modern websites with Astro, React, Svelte and TypeScript. REST APIs with Node.js, Telegram bots, educational compilers in Rust. Professional experience at Xitry Games.",
    "about.card3.title": "Tools & Applications",
    "about.card3.description":
      "Interactive applications with Flet, educational simulators, specialized editors. From command-line tools to cross-platform desktop solutions.",
    "about.stats.experience": "Years of experience",
    "about.stats.projects": "Projects completed",
    "about.stats.technologies": "Technologies",

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

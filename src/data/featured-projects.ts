import type { Language } from "@/i18n/translations";

// Fuente de verdad de los proyectos destacados: la consume tanto
// ProjectSection.astro (maquetación) como el JSON-LD del layout (ItemList),
// para que el dato estructurado nunca se desincronice del contenido visible.
export interface FeaturedProject {
    title: string;
    dates: string;
    description: string;
    technologies: string[];
    href: string;
    image: string;
    fit?: "cover" | "contain";
}

export function getFeaturedProjects(lang: Language): FeaturedProject[] {
    const es = lang === "es";
    return [
        {
            title: "8Apera Fotografía",
            dates: "2026",
            description: es
                ? "Sitio web profesional para un estudio fotográfico en Santiago de Cuba, con galería filtrable y una estética paper."
                : "Professional website for a photography studio in Santiago de Cuba, with a filterable gallery and a paper-inspired visual identity.",
            technologies: ["Astro", "Tailwind CSS", "GSAP"],
            href: "https://8apera.com",
            image: "/images/projects/8apera.webp",
        },
        {
            title: "8Apera Blog",
            dates: "2026",
            description: es
                ? "Blog documental con CMS headless Keystatic, para que el cliente publique contenido sin tocar código."
                : "Documentary blog powered by a headless Keystatic CMS, so the client can publish content without touching code.",
            technologies: ["Astro", "React", "Keystatic", "Cloudflare"],
            href: "https://blog.8apera.com",
            image: "/images/projects/blog-8apera.webp",
        },
        {
            title: "Xitry Games",
            dates: "2026",
            description: es
                ? "Web corporativa trilingüe para un estudio indie de videojuegos y 3D, con sliders interactivos."
                : "Trilingual corporate site for an indie video game and 3D studio, with interactive sliders.",
            technologies: ["Astro", "Tailwind CSS", "Splide", "Cloudflare"],
            href: "https://xitry-game.com",
            image: "/images/projects/xitry-game.webp",
        },
        {
            title: "Halo Compiler",
            dates: "2026",
            description: es
                ? "Compilador e intérprete educativo escrito en Rust para explorar lexing, parsing, AST y chequeo de tipos."
                : "Educational compiler and interpreter in Rust exploring lexing, parsing, ASTs, and type checking.",
            technologies: ["Rust", "Compiler Design", "AST"],
            href: "https://github.com/Angelito91/halo",
            image: "/images/projects/halo.webp",
            fit: "contain",
        },
    ];
}

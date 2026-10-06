# Angel Portuondo — Portfolio Personal

Portafolio de Angel Alberto Portuondo Hierrezuelo. Desarrollador de Videojuegos especializado en **Unreal Engine 5** y **Godot Engine**. También experto en desarrollo web fullstack, sistemas y herramientas. Estudiante de Ciencias de la Computación.

🌐 [angelito91.github.io](https://angelito91.github.io)

## 🎮 Especialidades

- **Desarrollo de Videojuegos**: Unreal Engine 5 (C++, Blueprint) y Godot Engine (GDScript)
- **Desarrollo Web**: Fullstack con Astro, React, Svelte y TypeScript
- **Sistemas & Herramientas**: Rust, Python, Node.js, APIs REST, Bots de Telegram
- **Experiencia Profesional**: Xitry Games — Desarrollo de videojuegos, modelado 3D y entornos virtuales

## 🛠 Instalación

- Debes tener [Bun](https://bun.sh) instalado

- Clonar el repositorio
    ```sh
    git clone https://github.com/Angelito91/angelito91.github.io.git
    cd angelito91.github.io
    ```

- Instalar las dependencias
    ```sh
    bun install
    ```

- Ejecutar en desarrollo
    ```sh
    bun run dev
    ```

- Construir para producción
    ```sh
    bun run build
    ```

- Preview local del build
    ```sh
    bun run preview
    ```

## 🔍 SEO & AEO

El sitio está pensado tanto para buscadores como para motores de respuesta (IA).

| Fichero | Qué hace | Cuándo tocarlo |
| --- | --- | --- |
| `public/robots.txt` | Permite el rastreo general y a los bots de IA (GPTBot, ClaudeBot, PerplexityBot…). Declara el sitemap. | Si cambia la política de rastreo o añades un sitemap nuevo. |
| `public/llms.txt` | Índice breve en Markdown para LLMs, con enlace a `llms-full.txt`. | Si cambian las secciones, proyectos o datos de contacto. |
| `public/llms-full.txt` | Contenido completo del sitio en Markdown (ES + EN), para que los LLMs puedan citarlo sin rastrear la web. | **Manual**: actualizarlo cada vez que cambies textos, proyectos, habilidades o contacto. |
| `src/data/featured-projects.ts` | Fuente de verdad de los proyectos destacados. La consume la maquetación **y** el JSON-LD `ItemList`. | Al añadir o retirar un proyecto destacado. |
| `src/lib/git-dates.ts` | Calcula `datePublished` (JSON-LD) y `lastmod` (sitemap) a partir de `git log`. | No requiere mantenimiento. Por eso el workflow usa `fetch-depth: 0`. |

Otros puntos generados automáticamente:

- **JSON-LD** (`src/layouts/main.astro`): `ProfilePage`, `Person`, `Organization`
  (QvaLabs y Xitry Games), `ItemList` de proyectos y `WebSite`, enlazados entre sí
  por `@id`. Las páginas `noindex` (404) no llevan JSON-LD.
- **Sitemap** con `lastmod` real desde git. Solo incluye `/` y `/en/`.
- **Fuentes Geist auto-alojadas** vía `experimental.fonts` + `fontProviders.fontsource()`
  en `astro.config.mjs`: sin peticiones a `fonts.googleapis.com` y con
  fallbacks métricos (`size-adjust`) para evitar salto de texto.
- **Verificación de Search Console**: `google-site-verification` en el layout.

Al cambiar textos visibles, revisa también `public/llms.txt` y `public/llms-full.txt`.

## 📄 Licencia

© Angel Portuondo. Todos los derechos reservados.

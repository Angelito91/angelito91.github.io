// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import { getLastModified } from "./src/lib/git-dates.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://angelito91.github.io/",
  output: "static",
  integrations: [
    sitemap({
      // lastmod real (último commit), no la fecha del build.
      serialize(item) {
        item.lastmod = getLastModified();
        return item;
      },
    }),
    icon(),
  ],

  // Geist auto-alojada desde node_modules (@fontsource-variable/geist instalado
  // con bun): el build no toca la red y no hay stylesheet render-blocking.
  // <Font /> en el layout emite @font-face + preload y genera fallbacks
  // optimizados por métricas (menos CLS). Solo subset latin: cubre ES y EN.
  experimental: {
    fonts: [
      {
        name: "Geist",
        cssVariable: "--font-geist",
        provider: "local",
        variants: [
          {
            src: ["@fontsource-variable/geist/files/geist-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            // Subset "latin" de @fontsource-variable/geist (unicode.json).
            // Cubre ES y EN; fuera de este rango el navegador salta a la familia
            // siguiente de la pila en vez de mostrar tofu.
            unicodeRange: [
              "U+0000-00FF", "U+0131", "U+0152-0153", "U+02BB-02BC", "U+02C6",
              "U+02DA", "U+02DC", "U+0304", "U+0308", "U+0329", "U+2000-206F",
              "U+20AC", "U+2122", "U+2191", "U+2193", "U+2212", "U+2215",
              "U+FEFF", "U+FFFD",
            ],
          },
        ],
        fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      {
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        provider: "local",
        variants: [
          {
            src: ["@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
            // Mismo subset "latin" que Geist (unicode.json del paquete).
            unicodeRange: [
              "U+0000-00FF", "U+0131", "U+0152-0153", "U+02BB-02BC", "U+02C6",
              "U+02DA", "U+02DC", "U+0304", "U+0308", "U+0329", "U+2000-206F",
              "U+20AC", "U+2122", "U+2191", "U+2193", "U+2212", "U+2215",
              "U+FEFF", "U+FFFD",
            ],
          },
        ],
        fallbacks: ["ui-monospace", "monospace"],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      cssMinify: true,
    },
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

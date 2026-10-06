// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

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

  // Geist auto-alojada: sin peticiones a fonts.googleapis.com (que era el único
  // stylesheet render-blocking externo). <Font /> en el layout emite @font-face
  // + preload y genera fallbacks optimizados por métricas (menos CLS).
  experimental: {
    fonts: [
      {
        name: "Geist",
        cssVariable: "--font-geist",
        provider: fontProviders.fontsource(),
        weights: ["400 700"],
        styles: ["normal"],
        subsets: ["latin"],
        fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      {
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        provider: fontProviders.fontsource(),
        weights: ["400 600"],
        styles: ["normal"],
        subsets: ["latin"],
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

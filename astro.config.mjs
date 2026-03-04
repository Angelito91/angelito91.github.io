// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://angelito91.github.io/",
  output: "static",
  integrations: [sitemap()],

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

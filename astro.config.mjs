// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://angelito91.github.io/",
  output: "static",
  integrations: [sitemap(), icon()],

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

// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://angelito.me/",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      cssMinify: true
    },
  },

  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    },
  },
});
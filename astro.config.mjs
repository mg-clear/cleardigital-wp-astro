import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  redirects: {
    '/': '/set-1/homepage',
    '/ui-kit': '/ui',
    '/set-1/ui': '/ui'
  }
});
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/set-1/homepage',
    '/ui-kit': '/ui',
    '/set-1/ui': '/ui'
  },
  output: "server",
  adapter: netlify()
});
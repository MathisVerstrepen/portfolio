import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compressor(), sitemap(
    {
        i18n: {
          defaultLocale: 'en',
          locales: {
            en: 'en-US',
            fr: 'fr-CA',
          },
        },
      }
  )],
  site: "https://portfolio.diikstra.fr/"
});
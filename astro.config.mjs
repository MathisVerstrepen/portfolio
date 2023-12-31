import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        compressor(),
        icon(
            icon({
                iconDir: "src/icons/",
            })
        ),
        sitemap({
            i18n: {
                defaultLocale: "en",
                locales: {
                    en: "en-US",
                    fr: "fr-CA",
                },
            },
        }),
    ],
    image: {
        service: squooshImageService(),
    },
    site: "https://portfolio.diikstra.fr/",
});

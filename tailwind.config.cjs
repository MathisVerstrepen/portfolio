/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                licorice: "#01030D",
                ghost_white: "#FBFBFF",
                scarlet: "#FF331F",
                red_error: "#CC0000",
            },
        },
	},
	plugins: [],
}
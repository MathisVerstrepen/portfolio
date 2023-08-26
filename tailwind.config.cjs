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
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-50': '20% 20%',
                'pos-100': '100% 100%',
            },
        },
        fontFamily: {
            'ClashDisplay-Variable': ['ClashDisplay-Variable', 'sans-serif'],
            'ClashDisplay-Extralight': ['ClashDisplay-Extralight', 'sans-serif'],
            'ClashDisplay-Light': ['ClashDisplay-Light', 'sans-serif'],
            'ClashDisplay-Regular': ['ClashDisplay-Regular', 'sans-serif'],
            'ClashDisplay-Medium': ['ClashDisplay-Medium', 'sans-serif'],
            'ClashDisplay-Semibold': ['ClashDisplay-Semibold', 'sans-serif'],
            'ClashDisplay-Bold': ['ClashDisplay-Bold', 'sans-serif'],
        },
	},
	plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"artic-powder": "#F1F6F4",
				"mystic-mint": "#D9E8E3",
				"oceanic-noir": "#172B36",
				"nocturnal-expedition": "#114C5A",
				"forsythis": "#FFC801",
				"deep-saffron": "#FF9932",
				white: "#FFFFFF",
				black: "#000000",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

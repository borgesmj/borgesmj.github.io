/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      lightWhite: "#ffffff30",
      'background': {
        100: '#15202B',
        200: '#242f3b',
        300: '#3c4754'
      },
      'primary': {
        100: '#1DA1F2',
        200: '#0085d3',
        300: '#00488e'
      },
      'accent': {
        100: '#657786',
        200: '#f7ffff',
      },
      'text': {
        100: '#FFFFFF',
        200: '#e0e0e0'
      },
      'white': '#FFFFFF',
      'black': '#000000'
    }
  },
  plugins: [],
};

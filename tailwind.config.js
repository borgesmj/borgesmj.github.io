/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      lightWhite: "#ffffff30",
      'background': {
        100: '#0F1C3F',
        200: '#212b50',
        300: '#3b426a'
      },
      'primary': {
        100: '#00BFA5',
        200: '#00a189',
        300: '#005f4b'
      },
      'accent': {
        100: '#00E676',
        200: '#008119',
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

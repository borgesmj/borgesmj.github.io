/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'background': {
        100: '#0A1929',
        200: '#1a2839',
        300: '#323f52'
      },
      'primary': {
        100: '#1F3C88',
        200: '#5666b9',
        300: '#bbc4ff'
      },
      'accent': {
        100: '#FF5A5F',
        200: '#fff7ef',
      },
      'text': {
        100: '#FFFFFF',
        200: '#1a2839'
      },
      'white': '#FFFFFF',
      'black': '#000000'
    }
  },
  plugins: [],
};

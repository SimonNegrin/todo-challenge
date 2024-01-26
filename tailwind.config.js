import scrollbarHide from 'tailwind-scrollbar-hide'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "ta-green": "#639605"
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
}


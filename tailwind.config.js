/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc: ["Roboto Slab", "serif"]
    },
  },
  plugins: [
    [require('daisyui')],require('flowbite/plugin')
],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-first': "#7e90fe",
        'primary-second': '#9873ff'
      }
    },

  },
  plugins: [require('daisyui')],
}


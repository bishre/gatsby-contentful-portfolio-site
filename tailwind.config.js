/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        accent: '#A855F7'
      },
      width: {
        'xl': '48rem',
        '2xl': '60rem'
      }
    },
  },
  plugins: [],
}


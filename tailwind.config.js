/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#309975',
        secondary: '#454D66',
        text: '#221E66',
        hover: '#1CBCDD',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },

  },
  plugins: [],
}
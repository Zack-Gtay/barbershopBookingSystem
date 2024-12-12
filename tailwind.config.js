/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBeige: "#F8F3F0", 
        customOrange: "#F97A13", 
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'], 
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
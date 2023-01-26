/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class", 

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        spacemono:  "Space Mono",
        poppins: "Poppins",
        sourcesanspro: "Source Sans Pro",
        worksans: "Work Sans",
      }
    },
  },
  plugins: [],
}
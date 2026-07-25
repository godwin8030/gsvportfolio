/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#E4E7EC",
        "paper-2": "#D8DCE3",
        paperwhite: "#F7F8FA",
        ink: "#1B2430",
        "ink-soft": "#4A5568",
        amber: "#D98A2B",
        teal: "#3E7C6B",
        line: "#AEB7C2",
        "line-soft": "#C7CDD5",
        darkbg: "#12151B",
        "darkbg-2": "#171B22",
      },
      fontFamily: {
        spacemono: "Space Mono",
        poppins: "Poppins",
        sourcesanspro: "Source Sans Pro",
        worksans: "Work Sans",
        sans: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        serif: ["'IBM Plex Serif'", "serif"],
      },
    },
  },
  plugins: [],
}
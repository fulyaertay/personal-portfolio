/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons",
      }
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require('@tailwindcss/aspect-ratio'), // Yeni eklenen eklenti
  ],
}

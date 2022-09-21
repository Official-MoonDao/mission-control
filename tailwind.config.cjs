/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "moon-blue": "#0B3B8E",
        "moon-orange": "#D7594F",
        "moon-gold": "#F9B95C",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

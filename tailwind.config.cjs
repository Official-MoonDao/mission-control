/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        rotation: "rotation 1s linear infinite",
        fadeIn: "fadeIn 0.25s linear",
      },
      colors: {
        "moon-blue": "#0B3B8E",
        "moon-orange": "#D7594F",
        "moon-gold": "#F9B95C",
        "moon-deepblue": "#132456",
        "moon-pink": "#ff03f8",
        "moon-salmon": "#e76e6b",
        "moon-lightblue": "#69e9f1",
        "calendar-deepblue": "#101829",
        "calendar-deepblue-hover": "#182133",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        GoodTimes: ["Good Times", "sans-serif"],
      },
      keyframes: {
        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      treasury: "1396px",
    },
  },
  darkMode: "class",
  plugins: [],
};

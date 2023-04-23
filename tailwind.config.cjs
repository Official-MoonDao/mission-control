/** @type {import('tailwindcss').Config} */

// Check below for Guidelines and recommendations.

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        rotation: "rotation 1s linear infinite",
        fadeIn: "fadeIn 0.25s linear",
      },
      colors: {
        "title-light": "#172554",
        "title-dark": "#fefce8",
        "light-text": "#374151",
        "dark-text": "#e5e7eb",
        "faded": "#6b7280",
        "moon-gold": "#F9B95C",
        "moon-blue": "#3b82f6",
        "detail-light": "#60a5fa",
        "detail-dark": "#fef9c3",
        "stronger-light" : "#1d4ed8",
        "stronger-dark" : "#d97706",
        "background-light" : "#f5f5f4",
        "background-dark" : "#111827",
        "dark-highlight" : "#f9fafb",
        "light-highlight" : "#030712",
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
    },
  },
  darkMode: "class",
  plugins: [],
};

/*

COLORS: 

1) DO NOT add new colors here unless you expect them to be re-used across many different components.

2) For one-off cases, prefer using one of tailwind's native color classes instead of adding a class here.

* HEADERS: The *Header Component* inside the "components" folder should be used for the header of each section/page.

* TITLES/HIGHLIGHTS: 'title-light' and 'title-dark' control titles of articles/sections or important pieces of data that should be highlighted. 

* TEXT: 'light-text' and 'dark-text' control the color of regular paragraphs.

* BACKGROUNDS: background-light and background-dark are used as background colors when we are not using the 'component-background' class.

* ACCENT COLORs: 'moon-gold' is the accent color for both modes, 'moon-blue' is also used on Light mode. The classes 'stronger-light' and 'stronger-dark' are more intense versions of these colors.

* FADED: faded is for secondary text or elements and it's the same for both modes (a grey color that looks faded on both light and dark mode). If this isn't subdued enough for your use-case, consider adding an extra class to LOWER THE OPACITY.

* DETAILS: detail-light and detail-dark are for aesthetic details, like the circle surrounding the Announcement component's avatars, component borders or the color of the link decorations.

* HIGHLIGHT: 'dark-highlight' is almost pure white for maximum contrast in Dark Mode, 'light-highlight" is almost pure black.

*/

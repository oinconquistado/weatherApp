const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        showDown: "slideDown 2s forwards;",
        showUP: "slideUp 2s forwards",
      },
      keyframes: {
        slideDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -30px, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 50px, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },

      fontFamily: {
        sans: "Robo",
      },
      colors: {
        mineshaft: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#313131",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

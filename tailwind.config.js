const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["avenir", "sans-serif"],
        serif: ["philosopher", "serif"],
        body: ["avenir", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        ShadowsIntoL: ["Shadows Into Light", "cursive"],
      },

      colors: {
        customYellow: "#fcfbc1",
        customBrown: "#7c2602",
        customBlue: "#0b78bd",
        lightGray: "#ededed",
      },
      textColor: {
        default: "#4a5568", // Custom gray color
      },
      animation: {
        "spin-slow-reverse": "spin-reverse 5s linear infinite",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(-360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        pulseOpacity: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        pulseOpacity: "pulseOpacity 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          color: theme("colors.gray.800"), // Change this to your desired default color
        },
        body: {
          color: theme("colors.gray.800"), // Ensures all text inherits this color
        },
      });
    }),
  ],
});

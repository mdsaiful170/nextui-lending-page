const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/cpmponent/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },

    extend: {
      colors: {
        primary: "#772ab3",
        secondary: "#3D3F54",
        foreground: "#ffffff",
        
      },
      fontFamily: {
        mplusone: ["M PLUS 1", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

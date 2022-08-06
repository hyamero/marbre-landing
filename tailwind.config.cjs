/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        fogtwo: ["FogtwoNo5", "sans-serif"],
      },
      colors: {
        gold: "#BBA14F",
        dark: "#383838",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};

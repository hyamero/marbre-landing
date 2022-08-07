/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        fogtwo: ["FogtwoNo5", "serif"],
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

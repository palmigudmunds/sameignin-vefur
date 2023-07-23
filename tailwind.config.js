/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maindarkblue: "#0E2635",
        teal: "#26B5B2",
        darkteal: "#187371"
      },
    },
    fontFamily: {
      sans: ['"Lora"', "sans-serif"],
    },
  },
  plugins: [],
};

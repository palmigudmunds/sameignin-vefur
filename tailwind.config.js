/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maindarkblue: "#0E2635",
        teal: "#509b9b",
        darkteal: "#187371",
        brown: "#9b7250",
        darkbrown: "#73543b"
      },
    },
    fontFamily: {
      sans: ['"Lora"', "sans-serif"],
    },
  },
  plugins: [],
};

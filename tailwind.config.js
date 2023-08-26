/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maindarkblue: "#509b9b",
        teal: "#509b9b",
        darkteal: "#187371"
      },
    },
    fontFamily: {
      sans: ['"Lora"', "sans-serif"],
    },
  },
  plugins: [],
};

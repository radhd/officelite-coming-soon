/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        custom: "0px 50px 50px -25px rgba(75, 92, 154, 0.25)",
        selectedShadow: "0px 50px 50px -25px rgba(75, 92, 154, 0.75)",
      },
    },
  },
  plugins: [],
};

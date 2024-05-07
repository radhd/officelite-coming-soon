/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 50px 50px -25px rgba(75, 92, 154, 0.25)",
      },
    },
  },
  plugins: [],
};

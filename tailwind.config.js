/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotate .1s infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) " },
          "25%": { transform: "rotate(10deg) " },
          // "50%": { transform: "rotate(0deg) " },
          "75%": { transform: "rotate(-10deg) " },
          "100%": { transform: "rotate(0deg) " },
        },
      },
    },
  },
  plugins: [],
};

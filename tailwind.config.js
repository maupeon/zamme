/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zamme: ["Oracle-normal"],
        zamme_bold: ["Oracle-bold"],
        zamme_light: ["Oracle-light"],
      },
      animation: {
        rotate: "rotate .1s infinite",
        "scroll-left": "scroll-left 10s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
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

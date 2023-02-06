/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        productsans: ["product_sans", "regular"],
        gobold: ["Gobold", "regular"],
      },

      backgroundImage: {
        hero: "url('../public/assets/grasspic.jpg')",
      },
      colors: {
        "bg": "#debda9",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("stars-rating", "& i:hover ~ i");
    },
    function ({ addVariant }) {
      addVariant("current-hover", "& i:hover");
    },
  ],
};

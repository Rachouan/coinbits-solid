/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        base: "Satoshi",
      },
      accentColor: "green",
      colors: {
        green: {
          50: "#E6F6F2",
          100: "#B3E4D7",
          200: "#9ADBC9",
          300: "#81D3BC",
          400: "#4FC1A1",
          500: "#35B893",
          600: "#03A678",
          700: "#03956C",
          800: "#027454",
          900: "#02533C",
        },
      },
    },
  },
  plugins: [],
};

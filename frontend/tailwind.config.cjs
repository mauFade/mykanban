/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stoneGray: "#2C3333",
        darkCyan: "#395B64",
        lightCyan: "#A5C9CA",
        whiteCyan: "#E7F6F2",
      },
    },
  },
  plugins: [],
};

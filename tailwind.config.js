/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#222831",
        "green-primary": "#00ADB5",
        "green-primary-hover": "#00D1DC",
        "yellow-primary": "#FFD52D",
        "yellow-primary-hover": "#FFEDA6",
        "gray-primary": "#E6E6E6",
        brown: {
          100: "#FFE3DB",
          200: "#F4B4A3",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#D2755C",
          600: "#BA664E",
          700: "#B05F48",
          800: "#9C5440",
          900: "#884A39",
        },
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    [require("daisyui")],
  ],
};

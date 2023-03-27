const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {

      center: true,

      padding: "1rem",
      
    },

    extend: {

      colors: {

        "primary": "#2F58CD",
        "dark": "#1d1f26",
        "light": "#CCCFDD",
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities}) {
      addUtilities({
        ".center-flex": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },

        ".center-grid": {
          display: "grid",
          "justify-content": "center",
          "align-items": "center",
        },
      });
    }),
  ],
};

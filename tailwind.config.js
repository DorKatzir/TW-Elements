/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/js/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./node_modules/tw-elements/plugin.cjs")
  ],

  darkMode: "class",
  
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      grey: "#26292b",
      "grey-dark": "#141616"
    },
    extend: {}
  },
  plugins: []
}

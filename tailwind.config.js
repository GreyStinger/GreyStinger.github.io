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
      grey: "#7C7A7A",
      snow: "#FDF7FA",
      sienna: "#8F250C",
      "grey-medium-dark": "#222425",
      "grey-medium": "#1d1f21",
      "grey-dark": "#141616"
    },
    extend: {}
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#036666",
        secondary: "#FBAF1E",
        tertiary: "#1B2A49",
      },
    },
  },
  plugins: [],
}

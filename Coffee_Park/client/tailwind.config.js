/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Properly define sans-serif
        anton: ["Anton", "sans-serif"],
        bokor: ["Bokor", "system-ui"],
      }
    },
  },
  plugins: [require('daisyui'),],
}
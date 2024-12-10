/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        bokor: ["Bokor", "system-ui"],
        rancho:["Rancho", "cursive"],
      },
      colors: {
        textPrimary: "#422006", // Brown text
        textSecondary: "#f8fafc", // Light text
        backgroundLight: "#ECEAE3", // Light background
        backgroundDark: "#1B1A1A", // Dark background
        backgroundAccent: "#422006", // Accent background (same as textPrimary)
        backgroundTransparent: "#eceae3a3",
        backgroundSecondary: "#D2B48C",
        backgroundDarkTransparent: "#e0d9bfa3",
      },
    },
  },
  plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand','sans-serif']
      },
      colors: {
        "gray-100":"#F2F5F5",
        "gray-200":"#B3BEBE",
        "gray-300":"#7A8484", 
        "gray-700":"#2E3333",
        "alpha-dark-50":"rgba(26, 26, 26, 0.08)",
        "alpha-dark-100":"rgba(26, 26, 26, 0.12)",
        "dark-primary":"#1A1A1A",
        "dark-secondary":"#1A1A1AB2",
        "brand-active":"#02B9B0",
      },
    },
  },
  plugins: [],
};

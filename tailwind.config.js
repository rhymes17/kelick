/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand','sans-serif']
      },
      colors: {
        "alpha-dark-50":"rgba(26, 26, 26, 0.08)",
        "alpha-dark-100":"rgba(26, 26, 26, 0.12)",
        "brand-active":"#02B9B0",
        "blue-gray-100":"#F1F5F9",
        "dark-primary":"#1A1A1A",
        "dark-secondary":"#1A1A1AB2",
        "gray-50":"#F9FCFC",
        "gray-100":"#F2F5F5",
        "gray-200":"#B3BEBE",
        "gray-300":"#7A8484",
        "gray-400":"#5F6969", 
        "gray-700":"#2E3333",
        "gray-900":"#181B1B",
        "primary-50":"#E2FFFD",
        "purple-100":"#F2E5FF",
        "purple-600":"#8318E7",
        "surface-2":"#F9FCFC",
      },
    },
  },
  plugins: [],
};

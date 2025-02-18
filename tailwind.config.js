/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0cc0df",
        secondary: "#334155",
      },
    },
  },
  plugins: [],
};

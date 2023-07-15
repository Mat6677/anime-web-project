/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors: {
        text: "#fafafa",
        bg: "#050505",
        primary: "#11b9ff",
        secondary: "#000f33",
        Accent: "#ed78ab",
      },
    }
  },
  plugins: [require("tailwindcss-animated")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "custom-blue": "#2D9CDB",
      },
      boxShadow: {
        "custom-shadow": "0 10px 30px 0 rgba(51,51,51,0.1)",
      },
    },
  },
  plugins: [],
};

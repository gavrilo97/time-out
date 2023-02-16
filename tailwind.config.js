/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blueBase: "#001e28",
      primary: "#000000",
      secondary: "#FFFFFF",
      grayBase: "#e0e2e4",
      grayDark: "#787878",
      redBase: "#e53935",
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1450px",
    },
    extend: {},
  },
  plugins: [],
};

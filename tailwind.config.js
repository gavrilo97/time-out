/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",

      ink: "#04141b",
      navy: {
        900: "#01161e",
        800: "#001e28",
        700: "#04303d",
        600: "#0a4455",
        500: "#12596e",
      },
      volt: {
        DEFAULT: "#d8f34b",
        soft: "#e8f9a0",
        deep: "#a8c62e",
      },
      paper: "#f6f7f4",
      paperDim: "#eceee8",

      primary: "#04141b",
      secondary: "#ffffff",
      grayBase: "#e0e2e4",
      grayDark: "#6b7780",
      grayMid: "#9aa4ac",
      redBase: "#e53935",
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1450px",
    },
    extend: {
      letterSpacing: {
        wider2: "0.14em",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgb(4 20 27 / 0.06), 0 8px 24px -12px rgb(4 20 27 / 0.18)",
        cardHover: "0 2px 4px rgb(4 20 27 / 0.08), 0 22px 44px -20px rgb(4 20 27 / 0.32)",
        chrome: "0 1px 0 rgb(255 255 255 / 0.06), 0 10px 30px -18px rgb(0 0 0 / 0.9)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    fontSize: {
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      xxl: "var(--text-xxl)",
    },
    extend: {
      textColor: {
        darklow: "var(--dark-low)",
        darkmedium: "var(--dark-medium)",
        darkhigh: "var(--dark-high)",
        magenta: "var(--magenta)",
        lightsolid: "var(--light-solid)",
        lighthigh: "var(--light-high)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Prompt", "sans-serif"],
      logo: ["Old Standard TT", "serif"],
    },
    container: {
      padding: {
        default: "16px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
      "2xl": "1560px",
    },
    extend: {
      colors: {
        // primary: "",
        // secondary: "",
      },
      // backgroundImage: {},
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "800px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
        main: "auto 1fr",
      },
      gridTemplateColumns: {
        main: "200px 1fr",
        mainMd: "300px 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

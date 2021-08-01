module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // 'hero-auth': "url(./img/hero-login.png)",
      }),
      width: {
        "1/7": "14.2857143%",
        "1085": "67.8125rem"
      },
    },
  },
  variants: {
    extend: {},
    plugins: [],
  },
};

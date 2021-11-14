module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: "fadeIn linear 2s",
      },

      keyframes: (theme) => ({
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

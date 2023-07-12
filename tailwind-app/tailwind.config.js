const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        deneme: "#32445a",
        aykut: {
          100: "#1fb6ff",
          200: "#1fb6e6",
        },
        twitter: "#1da1f2",
      },
      spacing: {
        15: "3.5rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "calc-h-full": (value) => ({
            height: `calc(100% - ${value})`,
          }),
          "calc-w-full": (value) => ({
            width: `calc(100% - ${value})`,
          }),
          "calc-max-h-screen": (value) => ({
            height: `calc(100vh - ${value})`,
          }),
        },
        { values: theme("spacing") }
      );
    }),
    // plugin(function ({ addUtilities, theme, e }) {
    //   const calcUtilities = _.map(theme("spacing"), (value, key) => {
    //     return {
    //       [`.${e(`calc-h-full-${key}`)}`]: {
    //         height: `calc(100% - ${value})`,
    //       },
    //       [`.${e(`calc-w-full-${key}`)}`]: {
    //         width: `calc(100% - ${value})`,
    //       },
    //     };
    //   });
    //   addUtilities(calcUtilities, {
    //     variants: ["responsive", "hover"],
    //   });
    // }),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#14161F",
          200: "#FF721B",
        },
        secondary: {
          100: "#F87A2C",
          200: "#FF8E48",
        },
        yellow: {
          100: "#E5BB39",
          200: "#DEAB0B",
        },
        green: "#167b20",
        gray: "#393b44",
        white: {
          100: "#dfdfdf",
          200: "#afafaf",
        },
        bgwhite: "#F1F2F8",
        red: "#D60000",
      },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff4d30",
        option: "rgb(171, 171, 171)",
        date: "rgb(135, 133, 133)",
        desc: "rgb(112, 111, 123)",
        carbg: "#e9e9e9",
        borderbg: "#706f7b",
      },
      backgroundImage: {
        bgbook:
          "url('/home/shashank/Web Dev Projs/carrental/src/Pictures/booknowbg.png')",
        optionbg: "rgb(239, 239, 239)",
      },
    },
  },
  plugins: [],
};

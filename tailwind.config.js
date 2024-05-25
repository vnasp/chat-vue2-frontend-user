/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        chat: "#f0f2f5",
        whatsapp: {
          950: "#00a884",
          500: "#e0fcd7"
      },
    },
  },
},
  plugins: [],
};

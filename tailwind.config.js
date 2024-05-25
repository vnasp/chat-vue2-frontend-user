/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        chat: "#f0f2f5",
        whatsapp: {
          950: "#00a884",
          500: "#e0fcd7",
        },
      },
    },
  },
  plugins: [],
};

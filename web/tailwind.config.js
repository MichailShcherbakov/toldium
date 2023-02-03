/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,vue}",
  ],
  theme: {
    extend: {
      spacing: {
        "18": "4.5rem",
        "114": "28rem",
        "120": "30rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
}

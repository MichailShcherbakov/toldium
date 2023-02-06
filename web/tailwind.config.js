/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': {
          100: '#36393f',
          200: '#33363c',
          300: '#303338',
          400: '#2d3035',
          500: '#2b2d32',
          600: '#282a2f',
          700: '#212223',
          800: '#25282b',
          900: '#202225',
        }
      },
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

const colors = require("tailwindcss/colors")
module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe']
    },
  },
  plugins: [],
}

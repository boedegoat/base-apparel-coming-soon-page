const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Josefin Sans', sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'very-light-red': 'hsl(0, 80%, 86%)',
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-grayish-red': 'hsl(0, 6%, 24%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

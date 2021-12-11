const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'very-light-red': 'hsl(0, 80%, 86%)',
        'light-red': 'hsl(0, 74%, 74%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'dark-grayish-red': 'hsl(0, 6%, 24%)',
      },
      boxShadow: {
        button: '0 10px 20px hsl(0, 80%, 86%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

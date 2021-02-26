const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Nunito Sans'],
      serif: ['sans-serif']
    },
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'darker-gray': 'hsl(0, 0%, 17%)',
      },
      container: {
        screens: {
          '2xl': "1280px",
        }
      },
      zIndex: {
        '5000': 5000,
        '9999': 9999
      },
      height: {
        '500': '500px',
      },
      minHeight: {
        '40': '10rem'
      },
      flex: {
        '40': '40%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

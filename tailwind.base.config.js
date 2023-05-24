/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          900: '#004d9f',
          800: '#016bbe',
          700: '#097cd0',
          600: '#158ee2',
          500: '#1d9bf0',
          400: '#42aaf2',
          300: '#65b9f3',
          200: '#91cdf7',
          100: '#bbe0fa',
          50: '#e3f3fc',
        },
        error: '#ff1d9c',
        success: '#1dffdb',
        warning: '#fd9021',
        info: '#1d32ff',
      },
    },
  },
  plugins: [],
};

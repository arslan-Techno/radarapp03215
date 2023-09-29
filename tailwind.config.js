/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx','./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        themeGreen :'#06BC7F ',
        themeBlue :'#2B81F6',
        themeBlack : '#303030',
        themeWhaite : '#FFFEFD',
        themeRed : '#EB5757',
        grey : '#AEAEAE',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#e5e7eb',
        secondary: '#14b8a6',
      },
      screens:{
        'xl' : '920px',
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
};

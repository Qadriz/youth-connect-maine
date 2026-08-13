/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B3A5C',
          navyDark: '#0F2540',
          navyDeep: '#071428',
          teal: '#5DBCB0',
          tealLight: '#8DD4CB',
          orange: '#F47B20',
          lime: '#8BC53F',
          magenta: '#C0399F',
          cyan: '#00B4D8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};

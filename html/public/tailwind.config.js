/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../**/*.html',
    '../**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165dff',
        secondary: '#36cfc9',
        accent: '#722ed1',
        dark: '#1d2129',
        light: '#f2f3f5',
        muted: '#86909c',
      },
      fontFamily: {
        'andale': ['Andale Mono', 'monospace'],
        'avenir': ['Avenir Next Cyr', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
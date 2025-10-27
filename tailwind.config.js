/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swagger-green': '#85ea2d',
        'swagger-dark': '#2b2b2b',
        'swagger-gray': '#f7f7f7',
        'method-get': '#61affe',
        'method-post': '#49cc90',
        'method-put': '#fca130',
        'method-delete': '#f93e3e',
        'method-patch': '#50e3c2',
      },
      fontFamily: {
        'mono': ['Monaco', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [newFunction()],
  theme: {
    extend: {},
  },
  plugins: [],
}

function newFunction() {
  return "./src/**/*.{html,js,ts,jsx,tsx}";
}


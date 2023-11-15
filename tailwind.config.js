/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        '390': {'max': '450px'}
      }
    },
  },
  plugins: [],
}


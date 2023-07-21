/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    colors: {
      primary: '#4BA586',
      'primary-light': '#69B99D',
      grey: "#8E8E8E",
      "grey-light": "#F5F5F5",
      white: "#FEFEFF",
    },
  },
  plugins: [],
}


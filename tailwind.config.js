/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3399FF',
        'secondary': '#1B1F23',
        'tree': '#FDFDFE',
        'for': '#1B4183'
      },
      fontFamily: {
        'open-sans': 'Open Sans'
      },
      animation: {
        'bounce-slow': 'bounce 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
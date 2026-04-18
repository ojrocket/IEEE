/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#edf4f9',
          100: '#d1e3f0',
          200: '#a7c6e0',
          300: '#7da8d1',
          400: '#5a8dc0',
          500: '#3c72b0',
          600: '#2e5a8f',
          700: '#264875',
          800: '#203c62',
          900: '#1d3455',
          950: '#12233b',
        },
        ieee: {
          deep: '#152C55',
          bright: '#3C72B0',
          cyan: '#40B2D6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

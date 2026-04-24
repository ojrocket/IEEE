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
          50: '#EAF3FB',
          100: '#C8DFF5',
          200: '#a7c6e0',
          300: '#7da8d1',
          400: '#5a8dc0',
          500: '#3C72B0',
          600: '#2e5a8f',
          700: '#264875',
          800: '#203c62',
          900: '#1d3455',
          950: '#12233b',
        },
        ieee: {
          deep: '#0a0f1d',
          bright: '#3C72B0',
          cyan: '#40B2D6',
          'void':     '#0D1117',   // deepest bg — darker than ieee-deep
          'depth':    '#1C3A5E',   // mid-layer surface
          'gold':     '#E8A838',   // achievement, CTA accent — warm contrast
          'electric': '#0ECAD4',   // brighter cyan for key interactive moments  
          'violet':   '#7B61FF',   // society/tech accent — cool purple
          'ice':      '#E2EEF9',   // cool near-white for text (NOT warm white)
          'mist':     'rgba(64,178,214,0.08)',  // ultra-subtle tint fills
        }
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}

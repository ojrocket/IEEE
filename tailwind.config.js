/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          darkest: 'var(--bg-darkest)',
          dark: 'var(--bg-dark)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
        },
        primary: 'var(--primary)',
        accent: {
          DEFAULT: 'var(--accent)',
          gold: 'var(--accent-gold)',
          violet: 'var(--accent-violet)',
          emerald: 'var(--accent-emerald)',
          rose: 'var(--accent-rose)',
        },
        neon: {
          cyan: 'var(--neon-cyan)',
        },
        text: {
          ice: 'var(--text-ice)',
          secondary: 'var(--text-secondary-c)',
          muted: 'var(--text-muted-c)',
          dim: 'var(--text-dim)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          mid: 'var(--border-mid)',
          gold: 'var(--border-gold)',
          primary: 'var(--border-primary)',
        },
        blue: {
          50: '#F5F5F7',
          100: '#EAEAEF',
          200: '#D5D5DD',
          300: '#B5B5C0',
          400: '#9090A0',
          500: '#6A6A78',
          600: '#525260',
          700: '#3D3D4B',
          800: '#2A2A35',
          900: '#1A1A22',
          955: '#0A0A0F', // helper mapping for ultra dark
          950: '#111116',
        },
        ieee: {
          deep: 'var(--bg-darkest)',
          bright: 'var(--primary)',
          cyan: 'var(--neon-cyan)',
          'void':     'var(--bg-darkest)',
          'depth':    'var(--bg-dark)',
          'gold':     'var(--accent-gold)',
          'electric': 'var(--neon-cyan)',
          'violet':   'var(--accent-violet)',
          'ice':      'var(--text-ice)',
          'mist':     'rgba(34, 211, 238, 0.08)',
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

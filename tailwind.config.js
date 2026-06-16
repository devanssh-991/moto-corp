/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#e5ff3d',
          foreground: '#020617',
        },
        accent: {
          DEFAULT: '#22d3ee',
        },
        surface: {
          DEFAULT: 'rgba(15,23,42,0.85)',
          light: 'rgba(15,23,42,0.6)',
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(96,165,250,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(14,165,233,0.18), transparent 60%)',
      },
      boxShadow: {
        glass: '0 18px 45px rgba(15,23,42,0.6)',
        soft: '0 10px 30px rgba(15,23,42,0.35)',
      },
    },
  },
  plugins: [],
}


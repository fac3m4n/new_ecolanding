const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-ghibli)', ...fontFamily.mono]
      },
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        updown: 'updown 2s ease-in-out infinite',
      },
      scale: {
        '-100': '-1',
      }

    },
  },
  plugins: [],
}

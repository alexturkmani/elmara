/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tiffany: {
          50: '#f0fdfb',
          100: '#ccfbf1',
          200: '#a5f3e4',
          300: '#81D8D0',
          400: '#5ec5bd',
          500: '#0ABAB5',
          600: '#0a9a96',
          700: '#0d7d7a',
          800: '#0f6362',
          900: '#115251',
        },
        ivory: {
          50: '#FFFEFA',
          100: '#FAF9F6',
          200: '#F5F0E8',
          300: '#EDE6D6',
          400: '#E0D5C1',
        },
        gold: {
          300: '#E8D5A3',
          400: '#D4B978',
          500: '#C9A96E',
          600: '#B8944A',
          700: '#9A7B3C',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

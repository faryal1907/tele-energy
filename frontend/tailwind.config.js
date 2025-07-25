/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        energy: {
          50: '#e3e7f6',   // lightest blue
          100: '#c2c9e6',
          200: '#8e9acb',
          300: '#5a6bb0',
          400: '#2d3e8a',
          500: '#051462', // main blue
          600: '#04104e',
          700: '#030c3a',
          800: '#020826',
          900: '#010413', // darkest blue
        },
        power: {
          50: '#fff3e1',   // lightest orange
          100: '#ffe0b8',
          200: '#ffd08c',
          300: '#ffc05f',
          400: '#ffb03d',
          500: '#F7941D', // main orange
          600: '#d97d13',
          700: '#b3640e',
          800: '#8c4b09',
          900: '#663305', // darkest orange
        },
        electric: {
          50: '#fff7ed',   // very light orange/cream
          100: '#ffefd6',
          200: '#ffe7be',
          300: '#ffdfa7',
          400: '#ffd790',
          500: '#F7941D', // accent orange
          600: '#d97d13',
          700: '#b3640e',
          800: '#8c4b09',
          900: '#663305',
        },
        cream: {
          50: '#fff9f1',
          100: '#fff4e3',
          200: '#ffefd6',
          300: '#ffe9c8',
          400: '#ffe4bb',
          500: '#FFEBD3', // main cream for text
          600: '#e6d4be',
          700: '#b3a68f',
          800: '#807961',
          900: '#4d4b32',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(34, 197, 94, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' },
        }
      },
      backgroundImage: {
        'energy-gradient': 'linear-gradient(135deg, #051462 0%, #5a6bb0 50%, #F7941D 100%)',
        'power-gradient': 'linear-gradient(135deg, #F7941D 0%, #ffe0b8 100%)',
        'electric-gradient': 'linear-gradient(135deg, #F7941D 0%, #FFEBD3 100%)',
      }
    },
  },
  plugins: [],
}




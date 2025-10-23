/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../apps/web/**/*.{js,ts,jsx,tsx}',
    '../../apps/extension/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          start: '#47E2C1',
          end: '#4CB4F9',
          DEFAULT: '#47E2C1',
          50: '#E6F7F6',
          100: '#CCF0ED',
          200: '#99E1DB',
          300: '#66D2C9',
          400: '#33C3B7',
          500: '#47E2C1',
          600: '#3AD0C5',
          700: '#2EB8A9',
          800: '#22A08D',
          900: '#168871',
        },
        background: {
          light: '#E6F7F6',
          dark: '#0B0C10',
          DEFAULT: '#E6F7F6',
        },
        accent: {
          yellow: '#FFD44F',
          DEFAULT: '#FFD44F',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#8E9CA9',
          DEFAULT: '#0A0A0A',
        },
        border: {
          DEFAULT: '#D8E8EC',
          light: '#D8E8EC',
          dark: '#2A2A2A',
        },
        button: {
          hover: '#3AD0C5',
          DEFAULT: '#47E2C1',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #47E2C1 0%, #4CB4F9 100%)',
        'gradient-duck': 'radial-gradient(circle at 20% 80%, #47E2C1 0%, #4CB4F9 50%, #FFD44F 100%)',
      },
      animation: {
        'duck-float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

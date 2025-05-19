/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'hsl(220, 70%, 60%)',
          500: 'hsl(220, 70%, 50%)',
          600: 'hsl(220, 70%, 40%)',
        },
        secondary: {
          400: 'hsl(280, 60%, 60%)',
          500: 'hsl(280, 60%, 50%)',
          600: 'hsl(280, 60%, 40%)',
        },
        gray: {
          100: 'hsl(0, 0%, 95%)',
          200: 'hsl(0, 0%, 85%)',
          300: 'hsl(0, 0%, 75%)',
          400: 'hsl(0, 0%, 65%)',
          500: 'hsl(0, 0%, 55%)',
          600: 'hsl(0, 0%, 45%)',
          700: 'hsl(0, 0%, 35%)',
          800: 'hsl(0, 0%, 25%)',
          900: 'hsl(0, 0%, 15%)',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Fira Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '2rem',
        'xl': '4rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
      },
    },
  },
  plugins: [],
} 
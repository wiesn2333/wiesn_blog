/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent-blue': {
          DEFAULT: 'hsl(219, 93%, 50%)',
          50: 'hsl(219, 93%, 97%)',
          100: 'hsl(219, 93%, 95%)',
          200: 'hsl(219, 93%, 90%)',
          300: 'hsl(219, 93%, 80%)',
          400: 'hsl(219, 93%, 70%)',
          500: 'hsl(219, 93%, 50%)',
          600: 'hsl(219, 93%, 40%)',
          700: 'hsl(219, 93%, 30%)',
          800: 'hsl(219, 93%, 20%)',
          900: 'hsl(219, 92%, 10%)',
          950: 'hsl(219, 92%, 2%)',
        },
        'offgray': {
          50: 'hsl(0, 0%, 98%)',
          100: 'hsl(0, 0%, 95%)',
          200: 'hsl(0, 0%, 90%)',
          300: 'hsl(0, 0%, 80%)',
          400: 'hsl(0, 0%, 60%)',
          500: 'hsl(0, 0%, 50%)',
          600: 'hsl(0, 0%, 40%)',
          700: 'hsl(0, 0%, 30%)',
          800: 'hsl(0, 0%, 20%)',
          900: 'hsl(0, 0%, 10%)',
          950: 'hsl(0, 0%, 5%)',
        },
        'cream': {
          50: 'hsl(40, 30%, 98%)',
          100: 'hsl(40, 20%, 95%)',
          200: 'hsl(40, 15%, 90%)',
          300: 'hsl(40, 10%, 85%)',
          900: 'hsl(40, 20%, 10%)',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif CJK SC"', '"Source Han Serif SC"', '"SimSun"', '"STSong"', '"宋体"', '"Noto Serif"', '"DejaVu Serif"', '"Liberation Serif"', 'serif'],
        'plex-serif': ['"IBM Plex Serif"', '"Noto Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
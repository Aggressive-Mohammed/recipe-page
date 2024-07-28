/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // Custom font families
      fontFamily: {
        custom: ['Young Serif', 'serif'],
        customOne: ['Outfit', 'sans-serif'],
      },
      // Custom breakpoints
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      // Custom font sizes
      fontSize: {
        'paragraph': '16px',
      },
      // Custom colors
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'stone-100': 'hsl(30, 54%, 90%)',
        'stone-150': 'hsl(30, 18%, 87%)',
        'stone-600': 'hsl(30, 10%, 34%)',
        'stone-900': 'hsl(24, 5%, 18%)',
        'brown-800': 'hsl(14, 45%, 36%)',
        'rose-800': 'hsl(332, 51%, 32%)',
        'rose-50': 'hsl(330, 100%, 98%)',
      },
      listStyleType:{
        decimalRed: 'decimal red'
      },
    },
  },
  variants: {
    extend: {
      listStyleType: ['before']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

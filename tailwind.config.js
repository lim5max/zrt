/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PFDinTextPro', 'sans-serif'],
        heading: ['Google Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        'dark-blue': '#00263b',
        'turquoise': '#009bab',
        'bg-light': '#f8faff',
        'text-main': '#00263b',
      },
      spacing: {
        '18': '4.5rem',   /* 72px */
        '30': '7.5rem',   /* 120px */
      },
      borderRadius: {
        '4xl': '1.25rem', /* 20px */
      },
    },
  },
  plugins: [],
}


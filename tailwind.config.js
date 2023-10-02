/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        brown: {
          'dark': 'rgb(98, 79, 29)',
          'normal':'rgb(142, 118, 62)',
          'light': 'rgb(186, 157, 96)',
          // Diğer tonları buraya ekleyebilirsiniz.
        },
      },
    },
  },
  
}
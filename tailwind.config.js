/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      playFair: ['Playfair Display', 'serif'],
      newRoma: ['Georgia', 'Times New Roman', 'Times', 'serif']
    },
    fontSize: {
      sm: '15px',
      md: '18px',
      lg: '20px',
      xl: '36px'
    },
    maxWidth: {
      sectionContainer: '1100px'
    }
  },
  plugins: []
}
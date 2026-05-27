/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'gold-primary': '#C4967A',
        'gold-dark': '#A87B63',
        'text-body': '#5A5252',
        'cream': '#FFF5F0',
        'yellow-light': '#FFE8DC',
        'yellow-pale': '#FFDDD0'
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

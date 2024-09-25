/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f9a03f',  // Example: primary is blue
        secondary: '#ffed4a', // Example: secondary is yellow
        accent: '#38b2ac',  // Example: accent is teal
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        patrick: ['Patrick Hand', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        caveat: ['Caveat', 'cursive'],
        shadows: ['Shadows Into Light', 'cursive'],
        lexend: ['Lexend', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        play: ['Play', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


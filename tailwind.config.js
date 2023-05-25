/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto : ['roboto', 'sans-serif']
      },
    },
    colors: {
      background: '#111010',
      input: '#212223',
      placeIcons: '#817D7D',
      button: '#1D58B1 ',
      check: '#14CA04',
      trash: '#B11D1D',
      text: '#FFFFFF',
    }
  },
  plugins: [],
}


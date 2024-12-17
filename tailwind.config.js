/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'background': '#F3E9D1',
      'blue': '#00ffff',
      'green': '#98FB98',
      'black': '#000',
      'white': '#fff',
      'border': '#e0ebeb'
    },
    
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    },
    
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(150px, 1fr))'
      }
    },
  },
  plugins: [],
}


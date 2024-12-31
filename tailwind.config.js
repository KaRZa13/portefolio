/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'gray': '#d3d3d3',
      'background': '#ccdcf8',
      'primary': '#2e2343',
      'secondary': '#3e27a5',
      'tertiary': '#816ddd',
      'quaternary': '#1b1427',
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


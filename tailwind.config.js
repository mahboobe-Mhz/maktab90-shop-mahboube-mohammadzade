/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
     
        'sans': ['nimkat'] 
     },
     textColor:{
      "secondary":"#fd6e54"
    },
    backgroundColor:{
      "secondary":"#fd6e54"
    },
    borderColor:{
      "secondary":"#fd6e54"
    },
    backgroundImage: {
      'char': "url('public/picture/صندلی.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
    keyframes :{
      showPhoto: {
      '0%': {
        opacity:' 10%'
      },
      '100%' :{
          opacity: '100%'
      }
    }},
    animation: {
      showPhoto: 'showPhoto  1s forwards',
    }
    },
  },
  plugins: [],
}
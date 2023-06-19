/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sans: ['nimkat'] 
     },
     textColor:{
      "secondary":"#fd6e54"
    },
    backgroundColor:{
      "secondary":"#fd6e54"
    },
    },
  },
  plugins: [],
}
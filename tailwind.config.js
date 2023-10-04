/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      poppins: {
        custom: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [require("daisyui")]
}

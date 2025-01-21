/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          anton: ['Anton', 'sans-serif']
        }
  },
  writingMode: {
    'vertical-lr': 'vertical-lr',
    'vertical-rl': 'vertical-rl',
  },
},
  plugins: [],
}


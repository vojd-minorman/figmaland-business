/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius : {"lg" : "1rem"},
      colors : {
        blueDark : "#252B42"},
  },
  plugins: [],
}
}


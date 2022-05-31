module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#E9322E',
        'custom-black': '#19171A',
        'custom-gray': '#45433E'
      },
      spacing: {
        '112': '28rem',
      }
    },
  },
  plugins: [],
}

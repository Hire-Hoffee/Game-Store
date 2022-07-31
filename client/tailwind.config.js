module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#E9322E",
        "custom-black": "#19171A",
        "custom-gray": "#211e22",
      },
      spacing: {
        112: "28rem",
      },
      boxShadow: {
        'custom-outer': '0px 4px 10px 5px rgba(0, 0, 0, 0.25)',
        'custom-inner': 'inset 2px 2px 4px 4px rgba(0, 0, 0, 0.25)',
      }
      
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bgSecondy: '#3E606F', 
        bgMain: '#193441',
        bgGreenMain: '#91AA9D'
      },
    },
  },
  plugins: [],
};

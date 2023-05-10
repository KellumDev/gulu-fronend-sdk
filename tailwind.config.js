// const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "pages",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // ...
  ],
};
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: colors.gray[300], // Define border-border as gray-300
        ring: colors.blue[500],
        background: colors.white,
        foreground: colors.black,
      },
    },
  },
  plugins: [],
};

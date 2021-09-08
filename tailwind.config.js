const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        // => @media print { ... }
      }
    }
  }
};

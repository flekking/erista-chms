const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.teal,
        dark: colors.zinc,
        light: colors.slate,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

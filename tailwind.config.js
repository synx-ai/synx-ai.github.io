module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray': {
          50: "#eeeeee",
          100: "#b9bbbb",
          200: "#8b8d8e",
          300: "#5d5f60",
          400: "#3a3d3e",
          500: "#171b1c",
          600: "#141819",
          700: "#111415",
          800: "#0d1011",
          900: "#070809"
        },
        'synx': {
          400: "#FF73B6",
          500: "#FFB5AD",
          600: "#F0FFC9",
          700: "#7AFDFF",
          800: "#5EC3FF",
          900: "#AD66FF"
        },
        'purple': {
          50: "#eae6f4",
          100: "#cac2e3",
          200: "#a79ad1",
          300: "#8572bf",
          400: "#6b55b2",
          500: "#503aa5",
          600: "#47359f",
          700: "#3a2e96",
          800: "#2e288e",
          900: "#161d80"
        },
        'purple-b': {
          50: "#e6f1fd",
          100: "#c3dcfb",
          200: "#a0c7f7",
          300: "#80b1f2",
          400: "#6da0ef",
          500: "#6291eb",
          600: "#5e83dc",
          700: "#5771c8",
          800: "#5060b5",
          900: "#454195"
        },
      }
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    filter: ['hover', 'focus'],
  },
  plugins: [],
}

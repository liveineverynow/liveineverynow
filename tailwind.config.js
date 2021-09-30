module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
      fontFamily: {
	  'sans': ['"Helvetica Neue"'],
      },
      extend: {},
  },
  variants: {
      extend: {
	  borderWidth: ['first'],
      }
  },
  plugins: [],
}

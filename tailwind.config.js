module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a7a8c',
        secondary: '#f2fcfe',
        tertiary: '#1c1212',
        quaterary: '#ed7c00',
        quinary: '#54494B',
      },
      screens: {
        xs: '360px',
        s: '400px',
      },
    },
  },
  plugins: [],
};

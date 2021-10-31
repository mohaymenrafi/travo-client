module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      semiBlack: '#2e2e2e',
      orange: '#ff6647',
      paste: '#25bdc1',
      white: '#fff',
      lightGray: '#ededed',
      lightBg: '#edf2f7',
      lightPaste: '#92DEE0',
      danger: '#C82333',
    },
    fontFamily: {
      yester: 'Yesteryear',
      work: 'Work Sans',
      abril: 'Abril Fatface',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

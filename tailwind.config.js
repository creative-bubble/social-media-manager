module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        '76': '20rem',
        '88': '22rem',
        '100': '25rem',
        '101': '28rem',
        '102': '30rem',
        '103': '35rem',
        '10vh': '10vh',
        '90vh': '90vh',
      },
      fontFamily: {
        Bebas: ['Bebas Neue']
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'active', 'hover','focus'],
    borderColor: ['responsive','active', 'hover','focus']
  },
  plugins: [],
}

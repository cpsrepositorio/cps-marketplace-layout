/* eslint-env node */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'layer-light': {
          DEFAULT: '#f3f3f3',
          secondary: '#eeeeee',
          tertiary: '#f9f9f9',
          quaternary: '#ffffff'
        },

        'layer-dark': {
          DEFAULT: '#202020',
          secondary: '#1c1c1c',
          tertiary: '#282828',
          quaternary: '#2c2c2c'
        },

        brand: {
          DEFAULT: '#b20000',
          'light-1': '#d8302f',
          'light-2': '#f46a5e',
          'light-3': '#ffa48c',
          'dark-1': '#930a09',
          'dark-2': '#76110f',
          'dark-3': '#5c1512'
        },

        accent: {
          DEFAULT: '#005c6e',
          'light-1': '#49d5f0',
          'light-2': '#7ee7fb',
          'light-3': '#b5edf8',
          'dark-1': '#064554',
          'dark-2': '#09323c',
          'dark-3': '#0a2128'
        }
      },

      fontFamily: {
        sans: ['Open Sans', 'Segoe UI', 'Verdana', 'Sans-serif']
      },

      fontSize: {
        '2xs': ['10px', '12px']
      },

      boxShadow: {
        layer: 'inset 0 0 1px rgba(0 0 0 / 6%), 0 2px 4px rgba(0 0 0 / 4%)',
        card: 'inset 0 0 1px rgba(0 0 0 / 6%), 0 2px 4px rgba(0 0 0 / 10%)',
        hover: 'inset 0 0 1px rgba(0 0 0 / 6%), 0 4px 8px rgba(0 0 0 / 14%)',
        tooltip: 'inset 0 0 1px rgba(0 0 0 / 6%), 0 8px 16px rgba(0 0 0 / 14%)',
        flyout: 'inset 0 0 1px rgba(0 0 0 / 6%), 0 8px 16px rgba(0 0 0 / 14%)',
        dialog:
          'inset 0 0 1px rgba(0 0 0 / 6%), 0 2px 21px rgba(0 0 0 / 14%), 0 32px 64px rgba(0 0 0 / 18%)'
      },

      opacity: {
        1: '.01',
        2: '.02',
        3: '.03',
        4: '.04',
        6: '.06',
        7: '.07',
        8: '.08',
        9: '.09'
      }
    }
  },
  plugins: []
}

module.exports = {
  prefix: 'tw-',
  theme: {
    extend: {
      letterSpacing: {
        tight: '-.05em',
        normal: '-.025em',
        wide: '0'
      },
      fontSize: {
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem'
      },
      colors: {
        gray: {
          100: '#EDEDED',
          200: '#D1D1D1',
          300: '#B5B5B5',
          400: '#7E7E7E',
          500: '#464646',
          600: '#3F3F3F',
          700: '#2A2A2A',
          800: '#202020',
          900: '#151515'
        },
        purple: {
          100: '#F6F3FF',
          200: '#E7E0FF',
          300: '#D9CDFF',
          400: '#BDA8FF',
          500: '#A083FF',
          600: '#9076E6',
          700: '#604F99',
          800: '#483B73',
          900: '#30274D'
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'first']
  },
  plugins: []
}

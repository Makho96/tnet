/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      borderColor: {
        'gray': {
          '100': 'var(--border-gray-100)',
          '200': 'var(--border-gray-200)',
        },
        'color-2': 'var(--border-2)'
      },
      colors: {
        'primary': {
          'black': {
            '500': 'var(--text-black-500)',
            '600': 'var(--text-black-600)',
            '700': 'var(--text-black-700)',
            '800': 'var(--text-black-800)',
            '900': 'var(--text-black-900)',
          },
          'orange': {
            '800': 'var(--primary-orange-800)',
          },
          'gray': {
            '50': 'var(--primary-gray-50)'
          },
          'white': 'var(--primary-white)'
        },
        'secondary': {
          'black': {
            '600': 'var(--secondary-black-600)',
            '500': 'var(--secondary-black-500)',
          },
          'yellow': {
            '500': 'var(--secondary-yellow-500)'
          },
          'violet': {
            '500': 'var(--secondary-voilet-500)'
          },
          'green': {
            '50': 'var(--secondary-green-50)',
            '200': 'var(--secondary-green-200)',
            '300': 'var(--secondary-green-300)'
          },
          gray: {
            '100': 'var(--secondary-gray-100)'
          }
        },
        'error': {
          'red': {
            '800': 'var(--error-red-800)'
          }
        },
      },
      maxWidth: {
        'container-width': '1050px'
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '16': '16px'
      },
      fontFamily: {
        'helvetica': ['', 'sans-serif'],
        'sailec': ''
      },
      borderRadius: {
        '11': '11px',
        '12': '12px',
        '14': '14px'
      },
      boxShadow: {
        "main": "0px 4px 20px 0px rgba(164, 174, 193, 0.40)"
      }
    },
    screens: {
      'lg': { 'max': '1023px' },
      'sm': { 'max': '900px' },
    }
  },
  plugins: [],
}
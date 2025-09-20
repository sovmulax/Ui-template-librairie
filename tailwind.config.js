/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          500: '#0B7C6B',
          50: '#E4FFFB'
        },
        // Secondary Colors
        secondary: {
          500: '#FF6320',
          50: '#FFECE3'
        },
        // Dark Colors
        dark: {
          900: '#101313',
          700: '#383A3A',
          500: '#848786',
          300: '#CCCCCC',
          200: '#E4E9E8',
          100: '#F4F9F8',
          50: '#F9FCFB'
        },
        // Status Colors
        blue: {
          500: '#219FFF',
          50: '#E4F4FF'
        },
        green: {
          500: '#17D8DD',
          50: '#DFFEF5'
        },
        orange: {
          500: '#FFA114',
          50: '#FFF1DC'
        },
        red: {
          500: '#FE4E3E',
          50: '#FFECEB'
        }
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif']
      },
      fontSize: {
        // Headings
        'h1': ['56px', { lineHeight: '66px', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '52px', fontWeight: '700' }],
        'h3': ['30px', { lineHeight: '40px', fontWeight: '700' }],
        'h4': ['24px', { lineHeight: '34px', fontWeight: '700' }],
        'h5': ['20px', { lineHeight: '30px', fontWeight: '700' }],
        'h6': ['16px', { lineHeight: '22px', fontWeight: '700' }],
        // Paragraphs
        'p1': ['20px', { lineHeight: '30px', fontWeight: '400' }],
        'p2': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'p3': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'p4': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'p5': ['12px', { lineHeight: '20px', fontWeight: '400' }],
        // Table Heads
        'table-head-1': ['11px', { fontWeight: '500' }],
        'table-head-2': ['10px', { fontWeight: '500' }],
        // Buttons
        'btn-lg': ['18px', { fontWeight: '600' }],
        'btn-md': ['14px', { fontWeight: '600' }],
        'btn-sm': ['13px', { fontWeight: '600' }],
        // Tags
        'tag-md': ['10px', { fontWeight: '600' }],
        'tag-sm': ['10px', { fontWeight: '600' }],
        // Inputs
        'input-lg': ['14px', { fontWeight: '500' }],
        'input-md': ['14px', { fontWeight: '500' }],
        'input-sm': ['13px', { fontWeight: '500' }]
      }
    }
  },
  plugins: [],
};

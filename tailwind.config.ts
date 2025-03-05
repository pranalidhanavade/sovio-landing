module.exports = {
  content: [ './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#F9FAEB',
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#FCD34D',
          400: '#FCE889',
          500: '#03A9F4',
          600: '#FFD302',
          700: '#026592',
          800: '#D8B40D',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          350: '#dddbd7',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#000000',
        }
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};

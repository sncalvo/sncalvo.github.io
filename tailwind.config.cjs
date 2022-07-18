module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  theme: {
    extend: {
      backgroundImage: {
        presentation: 'url(/assets/background.png)',
      },
      colors: {
        primary: {
          DEFAULT: '#0071CD',
          100: '#0071CD',
          200: '#005092',
          300: '#003561',
          400: '#002039',
          500: '#011627',
        },
        secondary: {
          DEFAULT: '#f0c0d6',
          100: '#f0c0d6',
          200: '#ed9ac0',
          300: '#f562a5',
          400: '#f53b90',
          500: '#F72585',
        },
        tertiary: {
          DEFAULT: '#41EAD4',
          100: '#41EAD4',
          200: '#2EBAA8',
          300: '#288C7F',
          400: '#185A52',
          500: '#0D3A34',
        },
        danger: {
          DEFAULT: '#E9C5CA',
          100: '#E9C5CA',
          200: '#E29C9E',
          300: '#E38591',
          400: '#E5495E',
          500: '#F71735',
        },
        white: {
          DEFAULT: '#FDFFFC',
          100: '#FDFFFC',
          200: '#CACBC9',
          300: '#9B9B9B',
          400: '#6F6F6F',
          500: '#434343',
        },
      },
    },
  },
};

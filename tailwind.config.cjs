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
          DEFAULT: '#FFF0DC',
          100: '#FFF0DC',
          200: '#FFE4BE',
          300: '#FFCF8E',
          400: '#FFB754',
          500: '#FF9F1C',
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

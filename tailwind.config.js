/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'color-dark-grey': '#383D5B',
        'color-dark-purple': '#1B2240',
        'color-dark-blue': '#566992',
        'color-dark-blue-hover': '#003D5B',
        'color-heading-border': '#DEE2E7',
        'color-documentation-primary': '#191C23',
        'color-documentation-secondary': '#5A6270',
      },
      fontFamily: {
        SourceSansPro: ['Source Sans Pro', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        SourceCodePro: ['Source Code Pro', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

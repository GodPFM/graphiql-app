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
        'color-purple': '#3F20BA',
        'color-purple-hover': '#311C87',
        'color-paper': '#F3F4F6',
        'color-border': '#CAD0D8',
        'color-border-hover': '#B2B9C3',
      },
      fontFamily: {
        SourceSansPro: ['Source Sans Pro', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

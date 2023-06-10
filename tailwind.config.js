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
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(226, 232, 240, 0.1) 0%, rgba(226, 232, 240, 0) 100%);',
      },
    },
  },
  plugins: [],
}

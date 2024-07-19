 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad-mini': '768px',
        'ipad': '820px',
        'ipad-pro': '1024px',
      },
    },
  },
  plugins: [],
};

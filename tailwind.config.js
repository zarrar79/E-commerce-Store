/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '280px',
        s:'410px',
      },
    },
    fontFamily: {
      'Poppins' : "Poppins, sans-serif"
    }

  },
  
  plugins: [],
};

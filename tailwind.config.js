/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as needed
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "custom-blue": "#2b347c", // You can name it whatever you prefer
        "custom-white": "f4f4f7",
        "custom-new": "#e7deff",
        "custom-color": "#2b347c",
        "custom-dark-blue": "#0c0e2b"
      },
      animation: {
        "move-left-right": "move-left-right 3s ease-in-out infinite",
      },
      keyframes: {
        'move-left-right': {
          '0%, 100%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
    },
  },
  plugins: [],
};

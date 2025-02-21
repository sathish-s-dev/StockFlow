/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F6F7F9",
      },
    },
  },
  darkMode: "class",
};

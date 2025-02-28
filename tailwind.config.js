/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-foreground": "#151515",
        "light-footer-background": "#0D0C2B",
      },
      fontFamily: {
        ibm_plex: ["ibm_plex", "System-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
};

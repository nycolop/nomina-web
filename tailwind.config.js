/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom--primary": "#4C58D6",
        "custom--tertiary": "#002959",
      },
      fontFamily: {
        "custom--roboto-primary": [
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe\\ UI",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira\\ Sans",
          "Droid\\ Sans",
          "Helvetica\\ Neue",
          "sans-serif",
        ],
        "custom--dm-sans-secondary": [
          "DM\\ Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe\\ UI",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira\\ Sans",
          "Droid\\ Sans",
          "Helvetica\\ Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

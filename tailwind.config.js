/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "color-main": "#1E1F4B",
      "color-primary": "#2D264B",
      "color-second": "#2E3E5C",
      "color-black": "#000000",
      "color-black-900": "#130F26",
      "color-white": "#ffffff",
      "color-white-100": "#F0FDF4",
      "color-white-500": "#F8FFF9",
      "color-white-900": "#F9F9F9",
      "color-gray-100": "#8B8B8B",
      "color-gray-500": "#333333",
      "color-blue": "#3686F7",
      "color-orange": "#F55F1D",
      "color-red": "#FF302F",
      "color-red-400": "#F62B54",
      "color-yellow-400": "#FFBA40",
      "color-yellow-500": "#FFCC00",
      "color-green": "#20B15A",
      "color-green-100": "#D7F5DC",
      "color-green-500": "#00CA72",
    },
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        avenir: ["var(--font-avenir)"],
      },
      boxShadow: {
        primary: "4px 9px 20px 0px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};

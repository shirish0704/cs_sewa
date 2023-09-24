/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkblue: "#37517e",
      light: "#31a9e1",
    },
    fontFamily: {
      sans: ["font"],
    },
  },
  plugins: [require("flowbite/plugin")],
};

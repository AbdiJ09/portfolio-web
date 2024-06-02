/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-infinite": "infinite 10s linear scrolling",
      },
    },
  },
  plugins: [],
};

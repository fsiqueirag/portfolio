/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe4242",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        titillium: ["Titillium", "sans-serif"],
      },
      animation: {
        "height-grow": "heightGrow 3s linear forwards",
      },
      keyframes: {
        heightGrow: {
          "0%": { height: 0 },
          "100%": { height: "100vh" },
        },
      },
    },
  },
  plugins: [],
};

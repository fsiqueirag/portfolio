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
    },
  },
  plugins: [],
};

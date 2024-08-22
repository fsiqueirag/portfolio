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
        "fade-in": "fadeIn 1s ease-in-out both",
        "fade-right": "fadeRight 1s ease-in-out both",
        "fade-left": "fadeLeft 1s ease-in-out both",
      },
      keyframes: {
        heightGrow: {
          "0%": { height: 0 },
          "100%": { height: "100vh" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

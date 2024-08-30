/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#CE6A85",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        titillium: ["Titillium", "sans-serif"],
      },
      animation: {
        "height-grow": "heightGrow 3s ease-in-out forwards",
        "width-grow": "widthGrow 3s ease-in-out both",
        "fade-in": "fadeIn 1s ease-in-out both",
        "fade-right": "fadeRight 1s ease-in-out both",
        "fade-left": "fadeLeft 1s ease-in-out both",
        "rotate-cube": "rotateCube 1.5s ease-in-out both",
        "circle-grow": "circleGrow 1s ease-out both",
        pop: "pop 1000ms ease-in-out both",
        "move-right": "moveRight 2s 800ms ease-in-out both",
      },
      keyframes: {
        heightGrow: {
          "0%": { height: 0 },
          "100%": { height: "100%" },
        },
        widthGrow: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
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
        rotateCube: {
          "0%": { opacity: 0, transform: "rotateZ(-45deg)" },
          "70%": { opacity: 1, transform: "rotateZ(50deg)" },
          "85%": { opacity: 1, transform: "rotateZ(42deg)" },
          "100%": { opacity: 1, transform: "rotateZ(45deg)" },
        },
        circleGrow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        pop: {
          "0%": { transform: "scale(0)" },
          "40%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

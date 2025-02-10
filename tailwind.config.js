// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slight-move": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(var(--x1, 3px), var(--y1, -2px))" },
          "50%": { transform: "translate(var(--x2, -3px), var(--y2, 2px))" },
          "75%": { transform: "translate(var(--x3, 2px), var(--y3, -3px))" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "slight-move": "slight-move var(--duration, 2s) infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

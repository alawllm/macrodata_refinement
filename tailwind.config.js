// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slight-move": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(3px, -2px)" },
          "50%": { transform: "translate(-3px, 2px)" },
          "75%": { transform: "translate(2px, -3px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "slight-move": "slight-move 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg) translateY(-15%)" },
          "50%": { transform: "rotate(6deg) translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

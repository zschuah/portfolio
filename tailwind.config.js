/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-lg":
          "radial-gradient(800px circle at var(--grad-x) var(--grad-y), var(--tw-gradient-to), transparent 40%)",
        "gradient-radial-sm":
          "radial-gradient(400px circle at var(--grad-x) var(--grad-y), var(--tw-gradient-to), transparent 40%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MontserratReg: ["montserrat"],
        jetbrainsmono: ["jetbrainsmono"],
      },
    },
    borderRadius: {
      30: "30px",
      20: "20px",
    },
  },
  plugins: [],
};

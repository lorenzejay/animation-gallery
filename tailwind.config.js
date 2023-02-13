/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "2000px",
      },
      maxHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        fifty: "50vh",
        threeFourths: "75vh",
        full: "100%",
      },
      minHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        full: "100%",
        screen: "100vh",
      },
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2000px",
        "4xl": "2250px",
        "5xl": "3000px",
        "6xl": "3200px",
      },
    },
  },
  plugins: [],
};

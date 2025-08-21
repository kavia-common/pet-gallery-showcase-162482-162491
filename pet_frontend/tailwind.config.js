/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#38BDF8",
        accent: "#F472B6",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '3rem'
        }
      }
    },
  },
  plugins: [],
}

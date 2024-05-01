/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.{html,php}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-001" : "url('../assets/img/bg/bg-001.jpg')",
        "image-002" : "url('../assets/img/bg/bg-002.jpg')",
        "image-003" : "url('../assets/img/bg/bg-003.jpg')",
        "s-001" : "url('../assets/img/services/s-001.jpg')",
        "s-002" : "url('../assets/img/services/s-002.jpg')",
        "s-003" : "url('../assets/img/services/s-003.jpg')"
      }
    },
  },
  plugins: [],
}


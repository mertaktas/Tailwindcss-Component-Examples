/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 12px 92px 0px rgba(25, 27, 74, 0.10)',
        'custom2': '0px 7px 20px 0px rgba(115, 116, 156, 0.08)'

      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:  ["Inter", "sans-serif" ],
        roboto: [ "Roboto", "sans-serif" ]
      },
      backgroundImage: {
        'grainy': "url('./src/assets/images/landing_page/grainy.jpg')",
        'layout': "url('./src/assets/images/login_page/wavy3.jpg')",
      },
      colors: {
        "gleja-100": "#ED820E",
        "gleja-200": "#ED7014",
        "gleja-300": "#FC6A03",
        "gleja-400": "#DD571C",
      }
    },
  },
  plugins: [],
}
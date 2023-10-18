/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens:{
          "other":{'min': '340px', 'max': '1200px'},
        },
        colors:{
          darkbg: "#76A9FA",
            gray:{
            850:  "#D1D5DB"
            } ,
        },
      },
    },
    plugins: [],
  }


  //TailwindCSS documentation is quite clear
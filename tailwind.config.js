/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily:{
        display:['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        'color1': 'hsl(252, 100%, 67%)',
        'color2': 'hsl(241, 81%, 54%)',
        'color3':'hsl(241, 100%, 89%)',
        'color4':'hsla(256, 72%, 46%, 1)',
        'color5':'hsla(241, 72%, 46%, 0)',
        'color6':'hsl(0, 100%, 97%)',
        'color61':'hsl(0, 100%, 67%)',
        'color7':'hsl(37, 100%, 97%)',
        'color71':'hsl(39, 100%, 56%)',
        'color8':'hsl(167, 100%, 95%)',
        'color81':'hsl(166, 100%, 37%)',
        'color9':'hsl(233, 80%, 96%)',
        'color91':'hsl(234, 85%, 45%)',
        'btncolor':'hsl(224, 30%, 27%)',

      },
    },
  },
  plugins: [],
}


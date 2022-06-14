module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: {
      colors: {
        utama: '#143F6B',
        kedua: 'rgba(254, 177, 57, 0.46)',
        ketiga: '#F55353',
        keempat: '#FEB139'
      },
    },
  },
  important: true,
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ]
}

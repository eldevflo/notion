/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contents/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '768px',
      lg: '1025px',
    },
    colors:{
      'purple': '#6A3EA1',
      'purple-dark': '#3A2258',
      'purple-light': '#EFE9F7',
      'background': '#FAF8FC',
      'yellow': '#DEDC52',
      'yellow-dark': '#565510',
      'yellow-light': '#F7F6D4',
      'black': '#180E25',
      'dark-gray' : '#827D89',
      'gray': '#C8C5CB',
      'light-gray' : '#EFEEF0',
      'green': '#60D889',
      'green-dark': '#1F7F40',
      'green-light': '#DAF6E4',
      'error': '#CE3A54',
      'error-strong' : '#5A1623',
      'red-light': '#F7DEE3',
      'warning': '#F8C715',
      'warning-strong':'#725A03',
      'warning-light': '#FDEBAB',
      'white' : '#FFFFFF',
      'transparent' : '#00000000'
    },
    fontWeight:{
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSize:{
      'xs': '10px',
      '2xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '32px',
      '3xl': '40px'
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
     screens: {
      sm: '768px',
      lg: '1025px',
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
    },
    extend: {
      colors: {
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
      'red': '#CE3A54',
      'red-strong' : '#5A1623',
      'red-light': '#F7DEE3',
      'warning': '#F8C715',
      'warning-strong':'#725A03',
      'warning-light': '#FDEBAB',
      'white' : '#FFFFFF',
      'transparent' : '#00000000',
      'error': '#FF5733',
      'info': '#19A7CE',
      'gray-bg' : '#E5E5E5',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate") , require('@shrutibalasa/tailwind-grid-auto-fit'),],
}
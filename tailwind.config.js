/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Josefin Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1110px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#388697',  // Updated primary color
          hover: '#2C6D6F',    // A slightly darker shade for hover state
        },
        cream: '#ebe3cc',
        teal: '#189cab',
        secondary: {
          DEFAULT: '#F79D5C',  // Updated secondary color
          hover: '#E28B52',    // A slightly darker shade for hover state
        },
        yellow: '#fbbd08',
      },

      backgroundImage: {
        hero: "url('/img/hero/hero-bg.png')",
        pets: "url('/img/pets/pets-bg.png')",
        services: "url('/img/services/bg.png')",
        adoption: "url('/img/adoption/bg.png')",
        newsletterYellow: "url('/img/newsletter/bg-yellow.svg')",
        newsletterOrange: "url('/img/newsletter/bg-orange.svg')",
        footer: "url('/img/footer/bg.svg')",
      },
    },
  },
  plugins: [require('daisyui')],
};

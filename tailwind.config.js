module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      '--dark-cyan': 'hsl(158, 36%, 37%)',
      '--very-dark-cyan': 'hsl(156, 42%, 18%)',
      '--Cream': 'hsl(30, 38%, 92%)',
      '--neutral-dark-blue': 'hsl(212, 21%, 14%)',
      '--neutral-grayish-blue': 'hsl(228, 12%, 48%)',
      '--white': 'hsl(0, 0%, 100%)',
    },
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
  },
  plugins: [],
}


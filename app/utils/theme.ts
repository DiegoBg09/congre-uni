'use client'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { Montserrat, Merriweather, Roboto } from 'next/font/google'
import { createTheme } from '@mui/material'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light', // solo modo claro
    primary: {
      main: '#0F2B5B' // Azul oscuro principal
    },
    secondary: {
      main: '#4AC4F4' // Celeste gota
    },
    success: {
      main: '#B3D23F' // Verde lima hojas
    },
    warning: {
      main: '#F7981C' // Naranja
    },
    info: {
      main: '#3C87D3' // Azul medio
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    text: {
      primary: '#0F2B5B',
      secondary: '#4AC4F4'
    }
  },
  typography: {
    fontFamily: merriweather.style.fontFamily,
    h1: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: '4rem',
      '@media (max-width: 900px)': {
        fontSize: '3rem'
      },
      '@media (max-width: 600px)': {
        fontSize: '2.5rem'
      }
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width: 600px)': {
        fontSize: '2rem'
      }
    },
    h4: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: '2rem',
      '@media (max-width: 600px)': {
        fontSize: '1.5rem'
      }
    },
    h5: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      fontSize: '1.5rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    },
    body1: {
      fontFamily: merriweather.style.fontFamily,
      fontSize: '1.5rem',
      fontWeight: 400,
      '@media (max-width: 900px)': {
        fontSize: '1.25rem'
      },
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    },
    body2: {
      fontFamily: merriweather.style.fontFamily,
      fontSize: '0.875rem',
      '@media (max-width: 600px)': {
        fontSize: '0.75rem'
      }
    },
    subtitle1: {
      fontFamily: roboto.style.fontFamily,
      fontSize: '1.125rem',
      '@media (max-width: 900px)': {
        fontSize: '0.875rem'
      }
    },
    subtitle2: {
      fontFamily: roboto.style.fontFamily,
      fontSize: '1rem',
      fontWeight: 300,
      '@media (max-width: 900px)': {
        fontSize: '0.825rem'
      },
      '@media (max-width: 600px)': {
        fontSize: '0.75rem'
      }
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: '2rem'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        rounded: {
          borderRadius: 4
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 2
        }
      }
    }
  }
})

export default theme

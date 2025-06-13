'use client'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { createTheme } from '@mui/material'
import { Montserrat, Merriweather, Roboto } from 'next/font/google'

const montserrat = Montserrat({
  weight : [ '400', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
})

const merriweather = Merriweather({
  weight : [ '400', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
})

const roboto = Roboto({
  weight : [ '400', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode   : 'light',
    primary: {
      main: '#0F2B5B'
    },
    secondary: {
      main: '#4AC4F4'
    },
    success: {
      main: '#B3D23F'
    },
    warning: {
      main: '#F7981C'
    },
    info: {
      main: '#3C87D3'
    },
    text: {
      primary: '#0F2B5B',
    }
  },
  typography: {
    fontFamily: merriweather.style.fontFamily,
    h1        : {
      fontFamily: montserrat.style.fontFamily,
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
    },
    h4: {
      fontFamily: montserrat.style.fontFamily,
    },
    h5: {
      fontFamily: montserrat.style.fontFamily,
    },
    body1: {
      fontFamily: merriweather.style.fontFamily,
    },
    body2: {
      fontFamily: merriweather.style.fontFamily,
    },
    subtitle1: {
      fontFamily: roboto.style.fontFamily,
    },
    subtitle2: {
      fontFamily: roboto.style.fontFamily,
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          height    : '100%',
          '&::after': {
            content      : 'url("/background.svg")',
            position     : 'absolute',
            left         : '-9999px',
            top          : '-9999px',
            width        : '1px',
            height       : '1px',
            opacity      : 0,
            pointerEvents: 'none',
            zIndex       : -9999,
          }
        },
        body: {
          height                     : '100%',
          margin                     : 0,
          padding                    : 0,
          backgroundImage            : 'url("/background.svg")',
          backgroundSize             : 'cover',
          backgroundPosition         : 'center center',
          backgroundRepeat           : 'no-repeat',
          backgroundAttachment       : 'fixed',
          minHeight                  : '100vh',
          '@media (max-width: 768px)': {
            backgroundAttachment: 'scroll',
          },
        },
        '#__next': {
          minHeight: '100vh',
          position : 'relative',
          zIndex   : 1,
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius : 12
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

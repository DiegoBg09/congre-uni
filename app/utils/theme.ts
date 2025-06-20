'use client'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { createTheme } from '@mui/material'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight : [ '400', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode   : 'light',
    primary: {
      main: '#8C5E3C'
    },
    secondary: {
      main: '#4CA1A3'
    },
    success: {
      main: '#7BAF4B'
    },
    warning: {
      main: '#E67E22'
    },
    info: {
      main: '#6C5CE7'
    },
    background: {
      default: '#F9F9F9',
      paper  : '#FFFFFF'
    },
    text: {
      primary  : '#7A3B1E',
      secondary: '#4A5A1C'
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1        : {
      fontSize                  : '4rem',
      '@media (max-width:900px)': { fontSize: '3rem' },
      '@media (max-width:600px)': { fontSize: '2.25rem' },
    },
    h2: {
      fontSize                  : '3rem',
      '@media (max-width:900px)': { fontSize: '2.5rem' },
      '@media (max-width:600px)': { fontSize: '2rem' },
    },
    h3: {
      fontSize                  : '2.25rem',
      '@media (max-width:600px)': { fontSize: '1.50rem' },
    },
    h4: {
      fontSize                  : '1.75rem',
      '@media (max-width:600px)': { fontSize: '1.25rem' },
    },
    h5: {
      fontSize                  : '1.5rem',
      '@media (max-width:600px)': { fontSize: '1.125rem' },
    },
    h6: {
      fontSize                  : '1.25rem',
      '@media (max-width:900px)': { fontSize: '1rem' },
      '@media (max-width:600px)': { fontSize: '1rem' },
    },
    subtitle1: {
      fontSize                  : '1.125rem',
      '@media (max-width:900px)': { fontSize: '1rem' },
      '@media (max-width:600px)': { fontSize: '0.9rem' },
    },
    subtitle2: {
      fontSize                  : '1rem',
      fontWeight                : 300,
      '@media (max-width:900px)': { fontSize: '0.875rem' },
      '@media (max-width:600px)': { fontSize: '0.75rem' },
    },
    body1: {
      fontSize                  : '1rem',
      '@media (max-width:900px)': { fontSize: '0.875rem' },
      '@media (max-width:600px)': { fontSize: '0.75rem' },
    },
    body2: {
      fontSize                  : '0.875rem',
      '@media (max-width:600px)': { fontSize: '0.75rem' },
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
          backgroundRepeat           : 'repeat',
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
          textTransform              : 'none',
          borderRadius               : 12,
          '@media (max-width: 600px)': {
            fontSize: '0.55rem',
          }
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
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
        shrink: {
          fontSize : '1rem',
          transform: 'translate(0, -1.5px) scale(0.85)',
        },
        outlined: {
          fontSize: '1rem',
        },
        standard: {
          fontSize: '1rem',
        }
      }
    }
  }
})

export default theme

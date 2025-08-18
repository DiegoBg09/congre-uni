import { styled } from '@mui/material'

const PREFIX = 'ChatWhats'

export const classes = {
  container      : `${PREFIX}-container`,
  chatWindow     : `${PREFIX}-chatWindow`,
  header         : `${PREFIX}-header`,
  headerContent  : `${PREFIX}-headerContent`,
  closeButton    : `${PREFIX}-closeButton`,
  chatContent    : `${PREFIX}-chatContent`,
  messagePaper   : `${PREFIX}-messagePaper`,
  buttonContainer: `${PREFIX}-buttonContainer`,
  actionButton   : `${PREFIX}-actionButton`,
  infoButton     : `${PREFIX}-infoButton`,
  ticketsButton  : `${PREFIX}-ticketsButton`,
  phoneButton    : `${PREFIX}-phoneButton`,
  backButton     : `${PREFIX}-backButton`,
  fab            : `${PREFIX}-fab`
}

export default styled('div', {
  name: PREFIX
})(({ theme }) => ({
  position: 'fixed',
  bottom  : 20,
  right   : 20,
  zIndex  : 9999,

  [`& .${classes.chatWindow}`]: {
    position                      : 'absolute',
    bottom                        : 80,
    right                         : 0,
    width                         : 400,
    borderRadius                  : '20px',
    overflow                      : 'hidden',
    transform                     : 'scale(1)',
    transformOrigin               : 'bottom right',
    transition                    : 'transform 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      width: 350,
      right: -10
    }
  },

  [`& .${classes.header}`]: {
    background    : 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    padding       : '16px',
    display       : 'flex',
    justifyContent: 'space-between',
    alignItems    : 'center'
  },

  [`& .${classes.headerContent}`]: {
    '& .MuiTypography-body2': {
      opacity : 0.9,
      fontSize: '12px'
    },
    '& .MuiTypography-h6': {
      fontWeight: 'bold',
      fontSize  : '16px'
    }
  },

  [`& .${classes.closeButton}`]: {
    color          : 'white',
    backgroundColor: 'rgba(255,255,255,0.2)',
    '&:hover'      : {
      backgroundColor: 'rgba(255,255,255,0.3)'
    }
  },

  [`& .${classes.chatContent}`]: {
    padding        : '24px',
    backgroundColor: '#f5f5f5',
    minHeight      : 300
  },

  [`& .${classes.messagePaper}`]: {
    padding        : theme.spacing(2),
    borderRadius   : '15px',
    marginBottom   : theme.spacing(2),
    backgroundColor: 'white'
  },

  [`& .${classes.buttonContainer}`]: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : '8px'
  },

  [`& .${classes.actionButton}`]: {
    borderRadius : '25px',
    paddingTop   : theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
    textTransform: 'none',
    borderColor  : theme.palette.primary.main,
    color        : theme.palette.primary.main,
    '&:hover'    : {
      borderColor    : theme.palette.primary.dark,
      backgroundColor: 'rgba(140, 94, 60, 0.1)'
    }
  },

  [`& .${classes.infoButton}`]: {
    borderRadius   : '25px',
    paddingTop     : theme.spacing(1.5),
    paddingBottom  : theme.spacing(1.5),
    fontWeight     : 'bold',
    marginBottom   : theme.spacing(1),
    backgroundColor: '#25D366',
    color          : 'white',
    '&:hover'      : {
      backgroundColor: '#128C7E'
    }
  },

  [`& .${classes.ticketsButton}`]: {
    color          : 'white',
    borderRadius   : '25px',
    paddingTop     : theme.spacing(1.5),
    paddingBottom  : theme.spacing(1.5),
    textTransform  : 'none',
    fontSize       : '14px',
    fontWeight     : 'bold',
    marginBottom   : theme.spacing(1),
    backgroundColor: '#25D366',
    '&:hover'      : {
      backgroundColor: '#128C7E'
    }
  },

  [`& .${classes.phoneButton}`]: {
    borderRadius : '25px',
    paddingTop   : theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    textTransform: 'none',
    borderColor  : '#25D366',
    color        : '#25D366',
    '&:hover'    : {
      borderColor    : '#128C7E',
      backgroundColor: 'rgba(37, 211, 102, 0.1)'
    }
  },

  [`& .${classes.backButton}`]: {
    color        : '#666',
    textTransform: 'none',
    fontSize     : '12px',
    '&:hover'    : {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
  },

  [`& .${classes.fab}`]: {
    backgroundColor: '#25D366',
    color          : 'white',
    width          : 60,
    height         : 60,
    boxShadow      : '0 4px 20px rgba(37, 211, 102, 0.4)',
    '&:hover'      : {
      backgroundColor: '#128C7E',
      transform      : 'scale(1.1)',
      transition     : 'all 0.3s ease'
    },
    '&:active': {
      transform: 'scale(0.95)'
    }
  }
}))

import { styled } from '@mui/material'

const PREFIX = 'Contact'

export const classes = {
  contactInformation    : `${PREFIX}-contactInformation`,
  contactOulineInput    : `${PREFIX}-contactOulineInput`,
  buttonContainer       : `${PREFIX}-buttonContainer`,
  buttonContactContainer: `${PREFIX}-buttonContactContainer`,
  containerImage        : `${PREFIX}-containerImage`,
  imageContact          : `${PREFIX}-imageContact`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing, breakpoints } }) => ({
  paddingTop                          : spacing(8),
  paddingBottom                       : spacing(5),
  display                             : 'flex',
  flexDirection                       : 'column',
  justifyContent                      : 'center',
  [`& .${classes.contactOulineInput}`]: {
    marginTop   : spacing(3),
    marginBottom: spacing(2)
  },
  [`& .${classes.buttonContainer}`]: {
    display       : 'flex',
    justifyContent: 'center'
  },
  [`& .${classes.buttonContactContainer}`]: {
    [breakpoints.down('sm')]: {
      display: 'none'
    },
    marginTop   : spacing(4),
    marginBottom: spacing(3)
  },
  [`& .${classes.contactInformation}`]: {
    [breakpoints.down('sm')]: {
      marginBottom: spacing(3),
      marginTop   : spacing(2)
    },
    marginTop: spacing(2)
  },
  [`& .${classes.containerImage}`]: {
    width    : '100%',
    height   : 'auto',
    position : 'relative',
    overflow : 'hidden',
    marginTop: spacing(4)
  },
  [`& .${classes.imageContact}`]: {
    objectFit: 'contain'
  }
}))

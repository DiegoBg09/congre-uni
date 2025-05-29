import { Container, styled } from '@mui/material'

const PREFIX = 'HeaderBody'

export const classes = {
  button       : `${PREFIX}-button`,
  dateText     : `${PREFIX}-dateText`,
  logoContainer: `${PREFIX}-logoContainer`,
}

export default styled(Container, {
  name: PREFIX
})(({ theme: { breakpoints, spacing } }) => ({
  [breakpoints.down('sm')]: {
    alignItems: 'flex-start'
  },
  display                   : 'flex',
  flexDirection             : 'column',
  justifyContent            : 'center',
  alignItems                : 'center',
  [`& .${classes.dateText}`]: {
    marginTop: spacing(4.5),
  },
  [`& .${classes.button}`]: {
    marginTop: spacing(6),
  },
  [`& .${classes.logoContainer}`]: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'center',
    gap           : spacing(3),
  }
}))

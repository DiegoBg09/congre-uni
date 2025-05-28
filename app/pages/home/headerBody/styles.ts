import { Container, styled } from '@mui/material'

const PREFIX = 'HeaderBody'

export const classes = {
  button: `${PREFIX}-button`,
  dateText: `${PREFIX}-dateText`
}

export default styled(Container, {
  name: PREFIX
})(({ theme: { breakpoints, spacing } }) => ({
  [breakpoints.down('sm')]: {
    alignItems: 'flex-start'
  },
  display                          : 'flex',
  flexDirection                    : 'column',
  justifyContent                   : 'center',
  alignItems                       : 'flex-start',
  [`& .${classes.dateText}`]: {
    marginTop: spacing(6),
  },
  [`& .${classes.button}`]: {
    marginTop: spacing(6),
  }
}))
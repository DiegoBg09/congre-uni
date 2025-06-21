import { Container, styled } from '@mui/material'

const PREFIX = 'Schedule'

export const classes = {
  containerImage: `${PREFIX}-containerImage`,
  imageSchedule : `${PREFIX}-imageSchedule`
}

export default styled(Container, {
  name: PREFIX
})(({ theme: {  breakpoints, spacing } }) => ({
  padding                 : spacing(4),
  [breakpoints.down('md')]: {
    padding: spacing(3),
  },
  [breakpoints.down('sm')]: {
    padding: spacing(2),
  },
  [`& .${classes.containerImage}`]: {
    width                   : '100%',
    height                  : 'auto',
    position                : 'relative',
    overflow                : 'hidden',
    marginTop               : spacing(4),
    [breakpoints.down('md')]: {
      marginTop: spacing(3),
    },
    [breakpoints.down('sm')]: {
      marginTop: spacing(2),
    },
  },
  [`& .${classes.imageSchedule}`]: {
    width    : '100%',
    height   : 'auto',
    objectFit: 'contain'
  }
}))

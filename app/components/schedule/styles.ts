import { Container, styled } from '@mui/material'

const PREFIX = 'Schedule'

export const classes = {
  containerImage: `${PREFIX}-containerImage`,
  imageSchedule : `${PREFIX}-imageSchedule`
}

export default styled(Container, {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  padding                         : spacing(4),
  [`& .${classes.containerImage}`]: {
    width    : '100%',
    height   : 'auto',
    position : 'relative',
    overflow : 'hidden',
    marginTop: spacing(4)
  },
  [`& .${classes.imageSchedule}`]: {
    width    : '100%',
    height   : 'auto',
    objectFit: 'contain'
  }
}))

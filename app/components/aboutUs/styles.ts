import { Container, styled } from '@mui/material'

const PREFIX = 'AboutUs'

export const classes = {
  infoContainer : `${PREFIX}-infoContainer`,
  imageContainer: `${PREFIX}-imageContainer`,
  image         : `${PREFIX}-image`
}

export default styled(Container, {
  name: PREFIX
})(({ theme: { breakpoints, spacing } }) => ({
  display                 : 'flex',
  padding                 : spacing(5,0),
  flexDirection           : 'column',
  alignItems              : 'center',
  gap                     : spacing(3),
  [breakpoints.down('md')]: {
    padding: spacing(3, 2),
  },
  [`& .${classes.infoContainer}`]: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : spacing(2)
  },
  [`& .${classes.imageContainer}`]: {
    display       : 'flex',
    justifyContent: 'center',
    width         : '100%',
    height        : 'auto',
    position      : 'relative',
    overflow      : 'hidden',
  },
  [`& .${classes.image}`]: {
    [breakpoints.down('md')]: {
      width    : '100%',
      height   : 'auto',
      objectFit: 'contain'
    },
  }
}))

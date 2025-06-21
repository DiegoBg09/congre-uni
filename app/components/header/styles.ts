import { styled } from '@mui/material'

const PREFIX = 'Header'

export const classes = {
  homeInfo: `${PREFIX}-homeInfo`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { breakpoints, spacing } }) => ({
  height                  : '100vh',
  display                 : 'flex',
  flexDirection           : 'column',
  position                : 'relative',
  overflow                : 'hidden',
  [breakpoints.down('md')]: {
    height: '40vh',
  },
  [breakpoints.down('sm')]: {
    height: '40vh',
  },
  [`& .${classes.homeInfo}`]: {
    display                 : 'grid',
    flex                    : 1,
    zIndex                  : 1,
    position                : 'relative',
    padding                 : spacing(1),
    [breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  }
}))

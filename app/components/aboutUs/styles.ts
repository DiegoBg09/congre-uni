import { Container, styled } from '@mui/material'

const PREFIX = 'AboutUs'

export const classes = {
  infoContainer: `${PREFIX}-infoContainer`
}

export default styled(Container, {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  display                        : 'flex',
  padding                        : spacing(5,0),
  flexDirection                  : 'column',
  alignItems                     : 'center',
  gap                            : spacing(3),
  [`& .${classes.infoContainer}`]: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : spacing(2)
  }
}))

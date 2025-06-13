import { Box, styled } from '@mui/material'

const PREFIX = 'HeaderVideo'

export const classes = {
  video: `${PREFIX}-video`
}

export default styled(Box, {
  name: PREFIX
})(() => ({
  position               : 'absolute',
  top                    : 0,
  left                   : 0,
  width                  : '100%',
  height                 : '100%',
  zIndex                 : -1,
  [`& .${classes.video}`]: {
    width    : '100%',
    height   : '100%',
    objectFit: 'cover',
  },
}))



import { alpha, styled } from '@mui/material'

const PREFIX = 'Footer'

export const classes = {
  toolbar   : `${PREFIX}-toolbar`,
  textFooter: `${PREFIX}-textFooter`
}

export default styled('footer', {
  name: PREFIX
})(({ theme: { palette, spacing } }) => ({
  backgroundColor          : alpha(palette.primary.main, palette.action.hoverOpacity),
  [`& .${classes.toolbar}`]: {
    justifyContent: 'center',
    display       : 'flex',
    flexDirection : 'column',
    paddingTop    : spacing(2),
    paddingBottom : spacing(2)
  },
  [`& .${classes.textFooter}`]: {
    display   : 'flex',
    alignItems: 'center',
    marginTop : spacing(1)
  }
}))

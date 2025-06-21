import { Grid, styled } from '@mui/material'

const PREFIX = 'HeaderBody'

export const classes = {
  content      : `${PREFIX}-content`,
  button       : `${PREFIX}-button`,
  dateText     : `${PREFIX}-dateText`,
  logoContainer: `${PREFIX}-logoContainer`,
  imageBody    : `${PREFIX}-imageBody`,
  hideOnMobile : `${PREFIX}-hideOnMobile`,
}

export default styled(Grid, {
  name: PREFIX,
})(({ theme: { breakpoints, spacing } }) => ({
  display            : 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows   : '1fr 1fr',
  alignItems         : 'center',
  justifyContent     : 'center',

  [breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows   : 'auto',
  },

  [`& .${classes.hideOnMobile}`]: {
    [breakpoints.down('md')]: {
      display: 'none',
    }
  },

  [`& .${classes.content}`]: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    justifyContent: 'center',
    textAlign     : 'center',

    [breakpoints.down('md')]: {
      gridColumn: '1',
    },

    [breakpoints.up('md')]: {
      gridColumn: '2',
      gridRow   : '1',
    },
  },

  [`& .${classes.dateText}`]: {
    marginTop               : spacing(4),
    marginLeft              : spacing(5),
    [breakpoints.down('md')]: {
      marginTop : spacing(2),
      marginLeft: spacing(2),
    },
  },

  [`& .${classes.button}`]: {
    marginTop               : spacing(4.5),
    marginLeft              : spacing(5),
    [breakpoints.down('md')]: {
      marginTop : spacing(2),
      marginLeft: spacing(2),
    },
  },

  [`& .${classes.logoContainer}`]: {
    width   : '100%',
    height  : 'auto',
    position: 'relative',
    overflow: 'hidden',
  },

  [`& .${classes.imageBody}`]: {
    width    : '100%',
    height   : 'auto',
    objectFit: 'contain',
  },
}))

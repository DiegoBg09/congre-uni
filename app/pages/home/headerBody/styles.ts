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
  backgroundImage    : 'url("/info-body-home.svg")',
  backgroundSize     : 'cover',
  backgroundPosition : 'center',
  backgroundRepeat   : 'no-repeat',
  zIndex             : 9999,

  [breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows   : 'auto',
    backgroundImage    : 'url("/bodyMobile.svg")',
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
    position      : 'relative',
    zIndex        : 2,

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
    marginTop               : spacing(11),
    marginLeft              : spacing(5),
    [breakpoints.down('md')]: {
      marginTop : spacing(28),
      marginLeft: spacing(1.5),
    },
  },

  [`& .${classes.logoContainer}`]: {
    position: 'absolute',
    top     : 0,
    left    : 0,
    width   : '100%',
    height  : '100%',
    zIndex  : 1,
  },

  [`& .${classes.imageBody}`]: {
    objectFit: 'cover',
  },
}))

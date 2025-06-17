import { styled } from '@mui/material'

import mancoraImage from '../../assets/mancora.svg'
const PREFIX = 'Mancora'

export const classes = {
  mancoraInfo   : `${PREFIX}-mancoraInfo`,
  infoContainer : `${PREFIX}-infoContainer`,
  statsCard     : `${PREFIX}-statsCard`,
  statsContainer: `${PREFIX}-statsContainer`,
  statItem      : `${PREFIX}-statItem`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing, palette, shadows, breakpoints } }) => ({
  display                        : 'flex',
  flexDirection                  : 'column',
  paddingTop                     : spacing(8),
  paddingBottom                  : spacing(35),
  backgroundImage                : `url(${mancoraImage.src})`,
  backgroundRepeat               : 'no-repeat',
  backgroundPosition             : 'center',
  backgroundSize                 : 'cover',
  [`& .${classes.infoContainer}`]: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : spacing(3.25)
  },
  [`& .${classes.statsCard}`]: {
    width          : '100%',
    backgroundColor: palette.success.main,
    borderRadius   : spacing(1),
    marginTop      : spacing(3),
    boxShadow      : shadows[4],
    '&:hover'      : {
      boxShadow : shadows[8],
      transition: 'box-shadow 0.3s ease-in-out'
    }
  },
  [`& .${classes.statsContainer}`]: {
    display                 : 'flex',
    justifyContent          : 'space-around',
    padding                 : spacing(3),
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap          : spacing(4)
    }
  },
  [`& .${classes.statItem}`]: {
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
    color        : '#fff',
    textAlign    : 'center',
    '& h3'       : {
      marginBottom: spacing(1)
    }
  }
}))

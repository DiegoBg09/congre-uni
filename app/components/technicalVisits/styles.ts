import { Container, styled } from '@mui/material'

const PREFIX = 'TechnicalVisits'

export const classes = {
  titleContainer: `${PREFIX}-titleContainer`,
  card          : `${PREFIX}-card`,
  cardContent   : `${PREFIX}-cardContent`,
  imageCard     : `${PREFIX}-imageCard`,
  infoCard      : `${PREFIX}-infoCard`,
  scrollTrack   : `${PREFIX}-scrollTrack`,
  cardWrapper   : `${PREFIX}-cardWrapper`,
  button        : `${PREFIX}-button`
}

export default styled(Container)(({ theme: { breakpoints, spacing } }) => ({
  [`& .${classes.titleContainer}`]: {
    display                 : 'flex',
    alignItems              : 'center',
    marginTop               : spacing(4),
    gap                     : spacing(3),
    [breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
    [breakpoints.down('sm')]: {
      gap: spacing(0),
    }
  },
  [`& .${classes.scrollTrack}`]: {
    display                : 'flex',
    overflowX              : 'auto',
    scrollSnapType         : 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    gap                    : spacing(3),
    paddingBottom          : spacing(3),
    scrollbarWidth         : 'none',
    msOverflowStyle        : 'none',
    '&::-webkit-scrollbar' : {
      display: 'none'
    }
  },
  [`& .${classes.cardWrapper}`]: {
    flex           : '0 0 100%',
    scrollSnapAlign: 'start',
    minWidth       : 260,
    boxSizing      : 'border-box',
  },

  [`& .${classes.card}`]: {
    height: '100%'
  },
  [`& .${classes.cardContent}`]: {
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
    height       : '100%'
  },
  [`& .${classes.imageCard}`]: {
    borderRadius: spacing(1),
    marginBottom: spacing(2),
    width       : '100%',
    objectFit   : 'cover'
  },
  [`& .${classes.infoCard}`]: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : spacing(2),
    padding      : spacing(1, 2)
  },
  [`& .${classes.button}`]: {
    [breakpoints.down('sm')]: {
      width  : '170px',
      padding: spacing(1)
    }
  }
}))

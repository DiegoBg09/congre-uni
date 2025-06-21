import { Container, styled } from '@mui/material'

const PREFIX = 'EventActivities'

export const classes = {
  card        : `${PREFIX}-card`,
  imageWrapper: `${PREFIX}-imageWrapper`,
  icon        : `${PREFIX}-icon`,
  title       : `${PREFIX}-title`,
  description : `${PREFIX}-description`,
  image       : `${PREFIX}-image`,
  scrollTrack : `${PREFIX}-scrollTrack`,
}

export default styled(Container)(({ theme: { spacing, palette, breakpoints } }) => ({
  [`& .${classes.scrollTrack}`]: {
    display                : 'flex',
    overflowX              : 'auto',
    scrollSnapType         : 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    gap                    : spacing(3),
    paddingBottom          : spacing(3),
    scrollbarWidth         : 'none',
    msOverflowStyle        : 'none',
    alignItems             : 'stretch',
    '&::-webkit-scrollbar' : {
      display: 'none',
    },
    [breakpoints.between('sm', 'md')]: {
      '& > *': {
        flex     : `0 0 calc(50% - ${spacing(1.5)}px)`,
        maxWidth : `calc(50% - ${spacing(1.5)}px)`,
        height   : 'auto',
        boxSizing: 'border-box',
      },
    },
    [breakpoints.down('sm')]: {
      '& > *': {
        flex: '0 0 100%',
      },
    },
  },

  [`& .${classes.card}`]: {
    textAlign               : 'center',
    borderRadius            : spacing(2),
    overflow                : 'hidden',
    position                : 'relative',
    paddingBottom           : spacing(2),
    backgroundColor         : palette.background.paper,
    display                 : 'flex',
    flexDirection           : 'column',
    height                  : '100%',
    [breakpoints.down('md')]: {
      scrollSnapAlign: 'start',
      minWidth       : 260,
      minHeight      : 380,
      boxSizing      : 'border-box',
    },
    [breakpoints.down('sm')]: {
      scrollSnapAlign: 'start',
      minWidth       : 250,
      minHeight      : 340,
      boxSizing      : 'border-box',
    },
  },

  [`& .${classes.imageWrapper}`]: {
    width   : '100%',
    height  : 140,
    position: 'relative',
    overflow: 'hidden',
  },

  [`& .${classes.icon}`]: {
    width          : 56,
    height         : 56,
    margin         : '-28px auto 8px auto',
    backgroundColor: palette.primary.main,
    color          : '#fff',
    zIndex         : 2,
  },

  [`& .${classes.title}`]: {
    fontWeight   : 'bold',
    textTransform: 'uppercase',
    marginBottom : spacing(1),
  },

  [`& .${classes.description}`]: {
    padding  : `0 ${spacing(2)}`,
    fontSize : 14,
    textAlign: 'justify',
    flexGrow : 1,
  },

  [`& .${classes.image}`]: {
    width    : '100%',
    height   : '100%',
    objectFit: 'cover',
  },
}))

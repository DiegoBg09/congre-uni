import { Container, styled } from '@mui/material'

const PREFIX = 'EventActivities'

export const classes = {
  card        : `${PREFIX}-card`,
  imageWrapper: `${PREFIX}-imageWrapper`,
  icon        : `${PREFIX}-icon`,
  title       : `${PREFIX}-title`,
  description : `${PREFIX}-description`
}

export default styled(Container)(({ theme: { spacing , palette, shadows } }) => ({
  [`& .${classes.card}`]: {
    textAlign      : 'center',
    borderRadius   : spacing(2),
    overflow       : 'hidden',
    position       : 'relative',
    paddingBottom  : spacing(2),
    backgroundColor: palette.background.paper,
    display        : 'flex',
    flexDirection  : 'column',
    height         : '100%'
  },
  [`& .${classes.imageWrapper}`]: {
    position: 'relative',
    width   : '100%',
    height  : 160
  },
  [`& .${classes.icon}`]: {
    width          : 56,
    height         : 56,
    margin         : '-28px auto 8px auto',
    backgroundColor: palette.primary.main,
    color          : '#fff',
    boxShadow      : shadows[2],
    zIndex         : 2
  },
  [`& .${classes.title}`]: {
    fontWeight   : 'bold',
    textTransform: 'uppercase',
    marginBottom : spacing(1)
  },
  [`& .${classes.description}`]: {
    padding  : `0 ${spacing(2)}`,
    fontSize : 14,
    textAlign: 'justify'
  }
}))

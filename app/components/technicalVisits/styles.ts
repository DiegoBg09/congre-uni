import { Container, styled } from '@mui/material'

const PREFIX = 'TechnicalVisits'

export const classes = {
  titleContainer: `${PREFIX}-titleContainer`,
  cardContent   : `${PREFIX}-cardContent`,
  imageCard     : `${PREFIX}-imageCard`,
  infoCard      : `${PREFIX}-infoCard`
}

export default styled(Container, {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  [`& .${classes.cardContent}`]: {
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center'
  },
  [`& .${classes.imageCard}`]: {
    borderRadius: spacing(1),
    marginBottom: spacing(2)
  },
  [`& .${classes.infoCard}`]: {
    display      : 'flex',
    flexDirection: 'column',
    gap          : spacing(2)
  },
  [`& .${classes.titleContainer}`]: {
    display   : 'flex',
    alignItems: 'center',
    marginTop : spacing(4),
    gap       : spacing(3)
  }
}))

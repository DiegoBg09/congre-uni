import { styled } from '@mui/material'

const PREFIX = 'CountDown'

export const classes = {
  number              : `${PREFIX}-number`,
  descriptionContainer: `${PREFIX}-descriptionContainer`,
  containerCertificate: `${PREFIX}-containerCertificate`,
  imageCertificate    : `${PREFIX}-imageCertificate`,
  textCertificate     : `${PREFIX}-textCertificate`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { breakpoints, spacing } }) => ({
  background            : '#7A3B1E',
  padding               : spacing(6, 0),
  marginTop             : spacing(5),
  [`.${classes.number}`]: {
    marginBottom: spacing(1),
  },
  [`.${classes.descriptionContainer}`]: {
    display                 : 'flex',
    flexDirection           : 'column',
    alignItems              : 'center',
    marginTop               : spacing(4),
    gap                     : spacing(3),
    [breakpoints.down('sm')]: {
      gap: spacing(2)
    }
  },
  [`.${classes.containerCertificate}`]: {
    background              : '#76a124',
    borderRadius            : spacing(2),
    [breakpoints.down('sm')]: {
      display      : 'flex',
      flexDirection: 'column',
      alignItems   : 'center'
    }
  },
  [`.${classes.imageCertificate}`]: {
    borderRadius            : spacing(2, 0, 0, 2),
    [breakpoints.down('sm')]: {
      margin      : spacing(2, 2, 0, 2),
      borderRadius: spacing(2),
      width       : '100%',
      height      : 'auto',
      objectFit   : 'contain'
    }
  },
  [`.${classes.textCertificate}`]: {
    display                 : 'flex',
    flexDirection           : 'column',
    justifyContent          : 'center',
    paddingRight            : spacing(2),
    [breakpoints.down('md')]: {
      paddingRight: spacing(1),
    },
    [breakpoints.down('sm')]: {
      padding     : spacing(1),
      marginBottom: spacing(1),
      textAlign   : 'center'
    }
  }
}))

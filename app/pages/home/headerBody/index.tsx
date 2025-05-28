'use client'
import { Button, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import logoDesktop from '../../../assets/logo-body.svg'

import Root, { classes } from './styles'

const HeaderBody = () => (
  <Root>
    <img src={logoDesktop.src} alt="logo" />
    <Typography className={classes.dateText}>DEL XX DE XXXXX AL XX DE XXXXX</Typography>
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      startIcon={<WhatsAppIcon />}
    >
      ¿Cómo adquiero mi entrada?
    </Button>
  </Root>
)

export default HeaderBody

'use client'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'

import logoCleia from '../../../assets/cleia-body.svg'
import logoConeia from '../../../assets/logo-coneia.svg'


import Root, { classes } from './styles'

const HeaderBody = () => (
  <Root>
    <div className={classes.logoContainer}>
      <Image src={logoCleia} alt='logo cleia'/>
      <Image src={logoConeia} alt='logo coneia' />
    </div>
    <Typography variant='h4' fontWeight='bold' className={classes.dateText}>DEL 20 AL 24 DE OCTUBRE</Typography>
    <Button
      className={classes.button}
      variant='contained'
      color='primary'
      startIcon={<WhatsAppIcon />}
    >
      ¿Cómo adquiero mi entrada?
    </Button>
  </Root>
)

export default HeaderBody

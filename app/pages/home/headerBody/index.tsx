'use client'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'

import imageBody from '../../../assets/cleia-body.svg'

import Root, { classes } from './styles'

const HeaderBody = () => (
  <Root>
    <div className={classes.hideOnMobile}></div>
    <div className={classes.content}>
      <div className={classes.logoContainer}>
        <Image src={imageBody} alt='logo cleia' className={classes.imageBody} />
      </div>
      <Typography variant='h4' fontWeight='bold' color='white' className={classes.dateText}>
        DEL 20 AL 24 DE OCTUBRE
      </Typography>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        startIcon={<WhatsAppIcon />}
      >
        ¿Cómo adquiero mi entrada?
      </Button>
    </div>
    <div className={classes.hideOnMobile}></div>
    <div className={classes.hideOnMobile}></div>
  </Root>
)

export default HeaderBody

'use client'
import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material'
import {
  Button, Container, Fade, FormControl, Grid, IconButton, InputLabel, OutlinedInput,
  Stack, Typography, useMediaQuery, useTheme, CircularProgress
} from '@mui/material'
import Image from 'next/image'

import contactImage from '../../assets/contact.svg'

import Root, { classes } from './styles'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

  const [ loading, setLoading ] = useState(false)
  const [ sent, setSent ] = useState(false)

  const _handleClickSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if(!formRef.current) return

    setLoading(true)
    setSent(false)

    emailjs.sendForm(
      'service_ufvm19m',
      'template_0l598cb',
      formRef.current,
      'dMN0mUxjbooydPbQv'
    )
      .then(() => {
        setSent(true)
        formRef.current?.reset()
        setTimeout(() => setSent(false), 7000)
      })
      .catch((error) => {
        console.error('Error al enviar:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Root>
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h3' fontWeight='bold'>¡Contáctanos!</Typography>
            <Typography className={classes.contactInformation} variant='body1'>
              Estas son nuestras redes sociales <strong>¡tienes diferentes formas de contactarnos!</strong>
            </Typography>
            <Stack direction='row' spacing={0.5} className={classes.buttonContactContainer}>
              <IconButton href='https://www.facebook.com/' target='_blank'>
                <FacebookIcon fontSize='large' color='primary' />
              </IconButton>
              <IconButton href='https://www.instagram.com/' target='_blank'>
                <InstagramIcon fontSize='large' color='primary' />
              </IconButton>
              <IconButton>
                <WhatsAppIcon fontSize='large' color='primary' />
              </IconButton>
            </Stack>
            <div className={classes.containerImage}>
              <Image
                height={isSmUp ? 200 : undefined}
                className={classes.imageContact}
                src={contactImage}
                alt='contact'
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 1 }}>
            <form ref={formRef} onSubmit={_handleClickSendMessage}>
              <FormControl fullWidth variant='standard'>
                <InputLabel shrink htmlFor='name'>Nombre</InputLabel>
                <OutlinedInput
                  name='name'
                  required
                  className={classes.contactOulineInput}
                  size='small'
                />
              </FormControl>
              <FormControl fullWidth variant='standard'>
                <InputLabel shrink htmlFor='email'>Correo</InputLabel>
                <OutlinedInput
                  name='email'
                  type='email'
                  required
                  className={classes.contactOulineInput}
                  size='small'
                />
              </FormControl>
              <FormControl fullWidth variant='standard'>
                <InputLabel shrink htmlFor='subject'>Asunto</InputLabel>
                <OutlinedInput
                  name='subject'
                  required
                  className={classes.contactOulineInput}
                  size='small'
                />
              </FormControl>
              <FormControl fullWidth sx={{ my: 2 }} variant='standard'>
                <InputLabel shrink htmlFor='message'>Mensaje</InputLabel>
                <OutlinedInput
                  name='message'
                  required
                  multiline
                  rows={4}
                  className={classes.contactOulineInput}
                  size='small'
                />
              </FormControl>
              <Fade in={sent} timeout={300}>
                <Stack direction='row' spacing={1} alignItems='center' sx={{ mb: 2 }} justifyContent='center'>
                  <CheckCircleIcon color='success' />
                  <Typography variant='body2' color='success.main'>
                    Se envió el correo correctamente
                  </Typography>
                </Stack>
              </Fade>
              <div className={classes.buttonContainer}>
                <Button type='submit' variant='contained' size='large' disabled={loading}>
                  {loading ? <CircularProgress size={22} color='inherit' /> : 'ENVIAR'}
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Root>
  )
}

export default Contact

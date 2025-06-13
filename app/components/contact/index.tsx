'use client'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material'
import {
  Button, Container, FormControl, Grid, IconButton, InputLabel, OutlinedInput, Stack, Typography
} from '@mui/material'


import Root, { classes } from './styles'

const Contact = () =>  {

  const _handleClickSendMessage = () => {
    console.log('_handleClickSendMessage')
  }

  return (
    <Root>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight='bold' variant='h3'>¡Contactanos!</Typography>
            <Typography className={classes.contactInformation} variant='body1'>
              Estan son nuestras redes socieales <strong>tienes diferentes formas de contactarnos!</strong>
            </Typography>
            <Stack className={classes.buttonContactContainer} direction='row' spacing={0.5}>
              <IconButton component='a' href='https://www.facebook.com/share/1B4yrBS2kg/?mibextid=wwXIfr' target='_blank' rel='noopener noreferrer'>
                <FacebookIcon fontSize='large' color='primary'/>
              </IconButton>
              <IconButton component='a' href='https://www.instagram.com/coneiaxiv?igsh=MTR6ZGJrZjF3azlxdQ==' target='_blank' rel='noopener noreferrer'>
                <InstagramIcon fontSize='large' color='primary'/>
              </IconButton>
              <IconButton>
                <WhatsAppIcon fontSize='large' color='primary'/>
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 1 }}>
            <form>
              <FormControl fullWidth variant='standard'>
                <InputLabel shrink htmlFor='name'>Nombre</InputLabel>
                <OutlinedInput className={classes.contactOulineInput} size='small' id='name' />
              </FormControl>
              <FormControl fullWidth variant='standard'>
                <InputLabel shrink htmlFor='correo'>Correo</InputLabel>
                <OutlinedInput className={classes.contactOulineInput} size='small' id='correo' />
              </FormControl>
              <FormControl fullWidth variant='standard'>
                <InputLabel shrink htmlFor='asunto'>Asunto</InputLabel>
                <OutlinedInput className={classes.contactOulineInput} size='small' id='asunto' />
              </FormControl>
              <FormControl sx={{ my: 2 }} fullWidth variant='standard'>
                <InputLabel shrink htmlFor='message'>Mensaje</InputLabel>
                <OutlinedInput
                  className={classes.contactOulineInput}
                  id='message'
                  multiline
                  size='small'
                  rows={4}
                />
              </FormControl>
              <div className={classes.buttonContainer}>
                <Button onClick={_handleClickSendMessage} variant='contained' size='large'>ENVIAR</Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Root>
  )
}

export default Contact

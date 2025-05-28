'use client'
import {
  Button, Container, FormControl, Grid, IconButton, InputLabel, OutlinedInput, Stack, Typography
} from '@mui/material'

import {
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material'

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
            <Typography className={classes.contactInformation} variant='subtitle1'>
              Escribeme al Correo: <strong>coneia@gmail.com</strong>
            </Typography>
            <Typography className={classes.contactInformation} variant='subtitle1'>
              Celular: <strong>+51 999999999</strong>
            </Typography>
            <Stack className={classes.buttonContactContainer} direction='row' spacing={1}>
              <Button variant='outlined'>
                Contactanos
              </Button>
              <IconButton>
                <FacebookIcon fontSize='large' color='primary'/>
              </IconButton>
              <IconButton>
                <WhatsAppIcon fontSize='large' color='primary'/>
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
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
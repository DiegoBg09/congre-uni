'use client'
import { Box, Link, Toolbar, Typography } from '@mui/material'

import Root, { classes } from './styles'

const Footer = () => (
  <Root>
    <Toolbar className={classes.toolbar} variant='dense'>
      <Typography textAlign='center' variant='body2'>© Todos los derechos reservados a CLEIA & CONEIA 2025 - Congreso Nacional de Estudiantes de Ingeniería Agrícola</Typography>
      <Box className={classes.textFooter}>
        <Typography textAlign='center' variant='body2'>
          Desarrollado por  <Link
            fontWeight='bold'
            href='#'>
            Diego Benites
          </Link>
        </Typography>
        <Typography sx={{ mx: 1 }}> |</Typography>
        <Typography textAlign='center' variant='body2'>
          <Link
            fontWeight='bold'
            href='https://blanni.com/'
            target='_blank'>
            BLANNI
          </Link>
        </Typography>
      </Box>
    </Toolbar>
  </Root>
)

export default Footer

'use client'

import { useEffect, useState } from 'react'

import { Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

import certificado from '../../assets/certificado.svg'

import Root, { classes } from './styles'

const TARGET_DATE = new Date('2025-10-20T00:00:00')

function useHasMounted() {
  const [ hasMounted, setHasMounted ] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

const CountDown = () => {
  const hasMounted = useHasMounted()
  const [ timeLeft, setTimeLeft ] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if(!hasMounted) return

    const update = () => setTimeLeft(getTimeLeft())
    update()

    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [ hasMounted ])

  if(!hasMounted) return null

  return (
    <Root>
      <Container >
        <Grid container justifyContent='center' spacing={21}>
          <Grid textAlign='center'>
            <Typography className={classes.number} color='white' fontWeight='bold' variant='h2'>
              {String(timeLeft.days).padStart(2, '0')}
            </Typography>
            <Typography color='white' fontWeight='bold'>Días</Typography>
          </Grid>
          <Grid textAlign='center'>
            <Typography className={classes.number} color='white' fontWeight='bold' variant='h2'>
              {String(timeLeft.hours).padStart(2, '0')}
            </Typography>
            <Typography color='white' fontWeight='bold'>Horas</Typography>
          </Grid>
          <Grid textAlign='center'>
            <Typography className={classes.number} color='white' fontWeight='bold' variant='h2'>
              {String(timeLeft.minutes).padStart(2, '0')}
            </Typography>
            <Typography color='white' fontWeight='bold'>Minutos</Typography>
          </Grid>
          <Grid textAlign='center'>
            <Typography className={classes.number} color='white' fontWeight='bold' variant='h2'>
              {String(timeLeft.seconds).padStart(2, '0')}
            </Typography>
            <Typography color='white' fontWeight='bold'>Segundos</Typography>
          </Grid>
        </Grid>
        <div className={classes.descriptionContainer}>
          <Typography variant='h5' color='white' fontWeight='bold'>¿Piensas perderte este congreso?</Typography>
          <Typography variant='subtitle1' color='white'>
            Esta es tu oportunidad de aumentar tu red de contactos y <b>ser un mejor perfil profesional</b>
          </Typography>
          <div className={classes.containerCertificate}>
            <Grid container alignItems='center' spacing={2}>
              <Grid size={{ xs: 12, md: 3 }} style={{ display: 'flex' }}>
                <Image src={certificado} alt='Certificado' className={classes.imageCertificate}/>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }} className={classes.textCertificate}>
                <Typography color='white' variant='h6' fontWeight='bold'>
                  ¡CERTIFÍCATE CON NOSOTROS!
                </Typography>
                <Typography color='white' variant='body1'>
                  Enriquece tu currículum y destaca tu dedicación a la excelencia académica y profesional participando en nuestro congreso conjunto de CLEIA & CONEIA 2025 - UNP Piura.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </Root>
  )
}

export default CountDown

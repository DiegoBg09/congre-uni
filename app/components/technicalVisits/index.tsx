'use client'

import { useMemo, useRef } from 'react'

import {
  ArrowBack, ArrowForward, SlowMotionVideo
} from '@mui/icons-material'
import {
  Card, CardContent, Typography, Button, Link, Grid, useMediaQuery,
  useTheme, IconButton, Box
} from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import chira from '../../assets/chira.svg'
import ejidos from '../../assets/ejidos.svg'
import sanLorenzo from '../../assets/sanlorenzo.svg'

import ListVisits from './listVisits'
import Root, { classes } from './styles'

const technicalVisitsData = [
  {
    image      : chira,
    alt        : 'Proyecto Especial Chira Piura (PECHP)',
    title      : 'PROYECTO ESPECIAL CHIRA',
    description: 'Infraestructura vital para el riego agrícola y la prevención de inundaciones. Su operación es clave para el desarrollo regional, aunque enfrenta desafíos por la variabilidad climática y la gestión del recurso hídrico.'
  },
  {
    image      : ejidos,
    alt        : 'Represa Los Ejidos',
    title      : 'REPRESA LOS EJIDOS',
    description: 'Sistema de captación y distribución de agua que fortalece la agricultura, reduce el impacto de las sequías y asegura el abastecimiento para consumo humano y uso productivo, impulsando el desarrollo sostenible.'
  },
  {
    image      : sanLorenzo,
    alt        : 'Irrigación San Lorenzo',
    title      : 'IRRIGACIÓN SAN LORENZO',
    description: 'Obras de ingeniería hidráulica que garantizan el abastecimiento de agua para la población y el desarrollo agrícola, protegiendo contra inundaciones y asegurando la sostenibilidad del recurso hídrico.'
  }
]

const TechnicalVisits = () => {
  const pathName = usePathname()
  const isShowAll = useMemo(() => pathName === '/visitas-tecnicas', [ pathName ])

  const theme = useTheme()
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'))

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if(scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.9
      scrollRef.current.scrollBy({
        left    : direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Root>
      <div className={classes.titleContainer}>
        <Typography variant='h3' fontWeight='bold'>Visitas Técnicas</Typography>
        <Button
          component={Link}
          href={isShowAll ? '/' : '/visitas-tecnicas'}
          startIcon={isShowAll ? <ArrowBack /> : <SlowMotionVideo />}
          variant='contained'
          color='primary'
          size='large'
          className={classes.button}
        >
          {isShowAll ? 'Regresar al inicio' : 'Visitas técnicas'}
        </Button>
      </div>

      <Typography variant='body1' my={3}>
        {isShowAll
          ? 'Aquí les podemos mostrar los hermosos lugares que visitaremos en este congreso'
          : 'Visitas técnicas a infraestructuras clave del sistema hídrico y de desarrollo regional, donde los participantes exploran de cerca el funcionamiento de obras de ingeniería, la gestión del recurso agua y su impacto en el desarrollo agrícola y social. Estas experiencias permiten aplicar conocimientos teóricos en contextos reales y estratégicos para la región.'}
      </Typography>

      {isShowAll ? (
        <ListVisits />
      ) : isSmDown ? (
        <Box display='flex' alignItems='center'>
          <IconButton color='primary' onClick={() => handleScroll('left')}>
            <ArrowBack />
          </IconButton>

          <div className={classes.scrollTrack} ref={scrollRef}>
            {technicalVisitsData.map((visit, i) => (
              <div key={i} className={classes.cardWrapper}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent} sx={{ p: 0 }}>
                    <Image src={visit.image} alt={visit.alt} className={classes.imageCard} />
                    <div className={classes.infoCard}>
                      <Typography variant='h6' fontWeight='bold' textAlign='center'>{visit.title}</Typography>
                      <Typography variant='body2' textAlign='center'>{visit.description}</Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <IconButton color='primary' onClick={() => handleScroll('right')}>
            <ArrowForward />
          </IconButton>
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent='center'>
          {technicalVisitsData.map((visit, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4
              }}
              sx={{
                display: 'flex',
                justifyContent:
                  technicalVisitsData.length % 2 !== 0 && index === technicalVisitsData.length - 1
                    ? 'center'
                    : 'flex-start',
              }}
            >
              <Card className={classes.card}>
                <CardContent className={classes.cardContent} sx={{ p: 0 }}>
                  <Image src={visit.image} alt={visit.alt} className={classes.imageCard} />
                  <div className={classes.infoCard}>
                    <Typography variant='h6' fontWeight='bold' textAlign='center'>{visit.title}</Typography>
                    <Typography variant='body2' textAlign='center'>{visit.description}</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Root>
  )
}

export default TechnicalVisits

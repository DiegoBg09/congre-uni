'use client'
import { useMemo } from 'react'

import { ArrowBack, SlowMotionVideo } from '@mui/icons-material'
import { Card, CardContent, Typography, Stack, Button, Link } from '@mui/material'
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
    alt        : 'Represa San Lorenzo',
    title      : 'REPRESA SAN LORENZO',
    description: 'Obras de ingeniería hidráulica que garantizan el abastecimiento de agua para la población y el desarrollo agrícola, protegiendo contra inundaciones y asegurando la sostenibilidad del recurso hídrico.'
  }
]

const TechnicalVisits = () => {
  const pathName = usePathname()

  const isShowAll = useMemo(() => pathName === '/visitas-tecnicas', [ pathName ])
  // const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <Root>
      <div className={classes.titleContainer}>
        <Typography variant='h3' fontWeight='bold'>
          Visitas Técnicas
        </Typography>
        {
          isShowAll ?
            <Button
              component={Link}
              href='/'
              startIcon={<ArrowBack />}
              variant='contained'
              color='primary'
              size='large'
            >
              Regresar al inicio
            </Button>
            :
            <Button
              component={Link}
              href='/visitas-tecnicas'
              startIcon={<SlowMotionVideo />}
              variant='contained'
              color='primary'
              size='large'
            >
              Ver Visitas Técnicas
            </Button>
        }
      </div>
      {
        isShowAll ?
          <Typography variant='body1' my={3}>
            Aqui les podemos mostrar los hermosos lugares que visitaremos en este congreso
          </Typography> :
          <Typography variant='body1' my={3}>
            Visitas técnicas a infraestructuras clave del sistema hídrico y de desarrollo regional, donde los participantes exploran de cerca el funcionamiento de obras de ingeniería, la gestión del recurso agua y su impacto en el desarrollo agrícola y social. Estas experiencias permiten aplicar conocimientos teóricos en contextos reales y estratégicos para la región.
          </Typography>
      }
      {
        isShowAll ?
          <ListVisits />
          :
          <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={3}>
            {technicalVisitsData.map((visit, index) => (
              <Card key={index} sx={{ width: 368 }}>
                <CardContent className={classes.cardContent}>
                  <Image
                    src={visit.image}
                    alt={visit.alt}
                    width={336}
                    className={classes.imageCard}
                  />
                  <div className={classes.infoCard}>
                    <Typography variant='h6' fontWeight='bold' textAlign='center'>
                      {visit.title}
                    </Typography>
                    <Typography variant='body2' textAlign='center'>
                      {visit.description}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Stack>
      }
    </Root>
  )
}

export default TechnicalVisits

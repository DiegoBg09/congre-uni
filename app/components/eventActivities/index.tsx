'use client'

import {
  SpeakerNotes as SpeakerNotesIcon,
  Factory as FactoryIcon,
  BusinessCenter as BusinessCenterIcon,
  Group as GroupIcon,
  SportsSoccer as SportsSoccerIcon,
} from '@mui/icons-material'
import { Avatar, Grid, Paper, Typography, useTheme, useMediaQuery } from '@mui/material'
import Image from 'next/image'

import olimpiadas from '../../assets/olimpiadas.svg'
import visitasTecnicas from '../../assets/visitastecnicas.svg'

import Root, { classes } from './styles'

const activities = [
  {
    title      : 'PONENCIAS',
    description: 'Conferencias impartidas por expertos en ingeniería agrícola que exploran tendencias y desafíos actuales, proporcionando conocimientos valiosos.',
    icon       : <SpeakerNotesIcon />,
    image      : visitasTecnicas,
  },
  {
    title      : 'VISITAS TECNICAS',
    description: 'Recorridos guiados por las instalaciones de empresas para que los participantes observen los procesos de producción y apliquen estos conceptos en entornos reales.',
    icon       : <FactoryIcon />,
    image      : visitasTecnicas,
  },
  {
    title      : 'FERIA AGRÍCOLA',
    description: 'Espacio donde empresas presentan oportunidades laborales, permitiendo a los participantes establecer conexiones profesionales con las empresas en un futuro.',
    icon       : <BusinessCenterIcon />,
    image      : visitasTecnicas,
  },
  {
    title      : 'NETWORKING',
    description: 'Espacio diseñado para que los asistentes establezcan conexiones profesionales, compartan experiencias y generen oportunidades de colaboración en el ámbito de la ingeniería agrícola.',
    icon       : <GroupIcon />,
    image      : visitasTecnicas,
  },
  {
    title      : 'OLIMPIADAS',
    description: 'Competencias deportivas y recreativas que fomentan el trabajo en equipo, la integración y la sana competencia entre los participantes del congreso.',
    icon       : <SportsSoccerIcon />,
    image      : olimpiadas,
  },
]

const EventActivities = () => {
  const theme = useTheme()
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Root>
      {isMdDown ? (
        <div className={classes.scrollTrack}>
          {activities.map((activity, i) => (
            <Paper key={i} className={classes.card} elevation={4}>
              <div className={classes.imageWrapper}>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  className={classes.image}
                  priority
                />
              </div>
              <Avatar className={classes.icon}>{activity.icon}</Avatar>
              <Typography className={classes.title} variant='h6'>
                {activity.title}
              </Typography>
              <Typography className={classes.description}>{activity.description}</Typography>
            </Paper>
          ))}
        </div>
      ) : (
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={1} rowSpacing={4} mt={4}>
          {activities.map((activity, i) => (
            <Grid key={i} size={{ xs: 4, sm: 4, md: 2.4 }}>
              <Paper className={classes.card} elevation={4}>
                <div className={classes.imageWrapper}>
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    className={classes.image}
                    priority
                  />
                </div>
                <Avatar className={classes.icon}>{activity.icon}</Avatar>
                <Typography className={classes.title} variant='h6'>
                  {activity.title}
                </Typography>
                <Typography className={classes.description}>{activity.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Root>
  )
}

export default EventActivities

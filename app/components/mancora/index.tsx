'use client'

import { Card, CardContent, Container, Typography } from '@mui/material'

import Root, { classes } from './styles'

const statsData = [
  {
    title      : '+500',
    description: 'PROFESIONALES JUNTOS'
  },
  {
    title      : 'NIVEL',
    description: 'NACIONAL E INTERNACIONAL'
  },
  {
    title      : 'VIVE',
    description: 'LA MEJOR EXPERIENCIA DE TU VIDA'
  }
]

const Mancora = () => (
  <Root>
    <Container className={classes.infoContainer}>
      <Typography variant='h4' fontWeight='bold' color='white'>CLEAIA & CONEIA 2025 - UNP PIURA </Typography>
      <Typography variant='body1' color='white'>
        El congreso se realizará en Piura debido a su importancia como uno de los centros más dinámicos del norte del país y
        por su estratégica ubicación que facilita la conectividad. Además, Piura ofrece una rica diversidad cultural y turística,
        incluyendo las reconocidas playas de Máncora, que deslumbra como un atractivo internacional.
      </Typography>
      <Typography variant='body1' color='white'>
        Estas características hacen de Piura un lugar ideal en un entorno propicio para el intercambio de conocimientos y experiencias,
        mientras disfrutan de la hospitalidad local que ofrece la región.
      </Typography>
      <Card className={classes.statsCard}>
        <CardContent className={classes.statsContainer}>
          {statsData.map((stat, index) => (
            <div key={index} className={classes.statItem}>
              <Typography variant='h4' fontWeight='bold'>
                {stat.title}
              </Typography>
              <Typography>
                {stat.description}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </Container>
  </Root>
)

export default Mancora



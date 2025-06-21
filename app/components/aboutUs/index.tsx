'use client'

import { Typography } from '@mui/material'
import Image from 'next/image'

import aboutUsImage from '../../assets/about-us.svg'

import Root, { classes } from './styles'

const AboutUs = () => (
  <Root>
    <div className={classes.infoContainer}>
      <Typography variant='h3' fontWeight='bold'>¿Quienes somos?</Typography>
      <Typography variant='body1'>
        <b>CLEIA (Congreso Latinoamericano y del Caribe de Estudiantes
          de Ingeniería Agrícola) y CONEIA (Congreso Nacional de
          Estudiantes de Ingeniería Agrícola)</b> son espacios clave, donde la
        pasión por la ingeniería se transforma en acción. El CLEIA conecta
        a jóvenes líderes de toda América Latina para compartir
        soluciones innovadoras frente a los retos del agro y el cambio
        climático, mientras que el CONEIA fortalece el talento nacional,
        integrando a estudiantes de Ingeniería Agrícola, Agrónoma, Civil,
        Ambiental y carreras afines en un ambiente de aprendizaje,
        cultura y colaboración. Juntos, construyen una red continental de
        ingenieros comprometidos con el desarrollo sostenible.
      </Typography>
    </div>
    <div className={classes.imageContainer}>
      <Image
        src={aboutUsImage}
        alt='about us'
        className={classes.image}
        priority
      />
    </div>
  </Root>
)

export default AboutUs

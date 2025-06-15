'use client'

import { Typography } from '@mui/material'
import Image from 'next/image'

import schedule from '../../../public/schedule.svg'

import Root, { classes } from './styles'

const Schedule = () => (
  <Root>
    <Typography variant='h4' fontWeight='bold'>Cronograma</Typography>
    <div className={classes.containerImage}>
      <Image
        src={schedule}
        alt='schedule'
        className={classes.imageSchedule}
        priority
      />
    </div>
  </Root>
)

export default Schedule

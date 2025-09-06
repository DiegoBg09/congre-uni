'use client'
import { Box, Typography, Card, Grid } from '@mui/material'
import Image from 'next/image'

import gerardo from '../../assets/Gerardo-Santana.svg'
import luis from '../../assets/Luis-Valdiviezo.svg'
import nestor from '../../assets/Nestor-Montalvo.svg'
import peru from '../../assets/peru.svg'

interface Speaker {
  id     : number;
  name   : string;
  image  : string;
  country: string;
}

const speakersData: Speaker[] = [
  {
    id     : 1,
    name   : 'Dr. Gerardo Santana',
    image  : gerardo,
    country: peru
  },
  {
    id     : 2,
    name   : 'Dr. Nestor Montalvo',
    image  : nestor,
    country: peru
  },
  {
    id     : 3,
    name   : 'Ing. Luis Valdiviezo',
    image  : luis,
    country: peru
  }
]

const Speakers = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #5B2C06 0%, #2A1602 100%)',
        py        : 8
      }}
    >
      <Box maxWidth='1200px' mx='auto'>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          sx={{
            color     : '#A6CE39',
            fontWeight: 800,
            mb        : 6,
            textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
          }}
        >
          PONENTES OFICIALES
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
          {speakersData.map((speaker) => (
            <Grid size={{ xs: 12, sm: 6, md: 3.5 }} key={speaker.id}>
              <Card
                sx={{
                  height      : '100%',
                  borderRadius: 3,
                  boxShadow   : '0 8px 24px rgba(0,0,0,0.25)',
                  overflow    : 'hidden'
                }}
              >
                <Box
                  sx={{
                    width         : '100%',
                    height        : 240,
                    position      : 'relative',
                    background    : 'linear-gradient(180deg, #1565C0 0%, #062447 100%)', // degradado verde claro
                    display       : 'flex',
                    alignItems    : 'flex-end',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={220}
                    height={220}
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, background: '#fff' }}>
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 700, color: '#2A1602' }}
                  >
                    {speaker.name}
                  </Typography>
                  <Image src={speaker.country} alt={speaker.name} width={50} height={50} />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Speakers

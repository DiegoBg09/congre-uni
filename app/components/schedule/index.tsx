'use client'

import { Typography, Card, CardContent } from '@mui/material'

import Root, { classes } from './styles'

const Schedule = () => {
  const scheduleData = [
    {
      day       : 'INICIO',
      date      : '20 OCT',
      activities: [
        'INAUGURACIÓN',
        'INTEGRACIÓN',
        'PONENCIA CENTRAL',
        'VISITA TÉCNICA'
      ]
    },
    {
      day       : 'DÍA 2',
      date      : '21 OCT',
      activities: [
        'PONENCIAS',
        'TARDE CIENTÍFICA',
        'INAUGURACIÓN',
        'ACTIVIDADES DEPORTIVAS'
      ]
    },
    {
      day       : 'DÍA 3',
      date      : '22 OCT',
      activities: [
        'PONENCIAS',
        'TARDE DEPORTIVA'
      ]
    },
    {
      day       : 'DÍA 4',
      date      : '23 OCT',
      activities: [
        'VISITAS TÉCNICAS'
      ]
    },
    {
      day       : 'FINAL',
      date      : '24 OCT',
      activities: [
        'FINALIZACIÓN DE',
        'ACTIVIDADES DEPORTIVAS',
        'ENTREGA DE',
        'CERTIFICADOS',
        'FIESTA DE',
        'CONFRATERNIDAD'
      ]
    }
  ]

  return (
    <Root>
      <Typography variant='h4' fontWeight='bold' sx={{ mb: 4 }}>
        Cronograma
      </Typography>
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            position       : 'absolute',
            top            : '50%',
            left           : 0,
            right          : 0,
            height         : '4px',
            backgroundColor: '#9e9e9e',
            transform      : 'translateY(-50%)',
            zIndex         : 0,
          }}
        />
        <div
          style={{
            display       : 'flex',
            flexDirection : 'row',
            justifyContent: 'space-between',
            alignItems    : 'flex-start',
            gap           : '16px',
            position      : 'relative',
            zIndex        : 1
          }}
        >
          {scheduleData.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '220px' }}>
              <div
                style={{
                  width          : '24px',
                  height         : '24px',
                  backgroundColor: '#424242',
                  borderRadius   : '50%',
                  border         : '4px solid white',
                  boxShadow      : '0 2px 4px rgba(0,0,0,0.2)',
                  marginBottom   : '16px',
                  display        : 'block'
                }}
              />
              <Card
                sx={{
                  minHeight  : 300,
                  width      : '100%',
                  boxShadow  : 3,
                  border     : '2px solid',
                  borderColor: 'grey.300'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <Typography
                      variant='h5'
                      fontWeight='bold'
                      sx={{
                        mb   : 1,
                        color: 'text.primary'
                      }}
                    >
                      {item.day}
                    </Typography>
                    <Typography variant='h6' fontWeight='600' color='text.secondary'>
                      {item.date}
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.activities.map((activity, actIndex) => (
                      <Typography
                        key={actIndex}
                        variant='body2'
                        fontWeight='500'
                        color='text.primary'
                        sx={{ lineHeight: 1.4 }}
                      >
                        {activity}
                      </Typography>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Root>
  )
}

export default Schedule

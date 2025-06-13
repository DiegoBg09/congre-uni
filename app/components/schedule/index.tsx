'use client'

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

import Root from './styles'

const Schedule = () => {
  const scheduleData = [
    {
      day       : 'LUNES',
      date      : '20 OCT',
      activities: [
        'ACREDITACIÓN',
        'INAUGURACIÓN E INTEGRACIÓN',
        'PONENCIA CENTRAL',
        'RECESO',
        'VISITA TÉCNICA IILA',
        'CENA INSTITUCIONAL',
        'GALA CULTURAL',
        '', '',
      ]
    },
    {
      day       : 'MARTES',
      date      : '21 OCT',
      activities: [
        '',
        'PONENCIAS MAGISTRALES',
        '', '', '', '', '',
        'RECESO',
        'ACTIVIDADES DEPORTIVAS',
        '', '', '',
      ]
    },
    {
      day       : 'MIÉRCOLES',
      date      : '22 OCT',
      activities: [
        '',
        'FERIA Y TALLERES TÉCNICOS',
        '', '', '', '', '',
        'RECESO',
        'TARDE CIENTÍFICA',
        'ASAMBLEA GENERAL',
        '',
        '',
      ]
    },
    {
      day       : 'JUEVES',
      date      : '23 OCT',
      activities: [
        'VISITA TÉCNICA: SAN LORENZO',
        '', '', '', '', '', '',
        'RECESO',
        'DIÁLOGO SECTOR HÍDRICO',
        '', '', '',
      ]
    },
    {
      day       : 'VIERNES',
      date      : '24 OCT',
      activities: [
        'PRESENTACIÓN DE CASOS',
        '', '', '', '', '', '',
        'RECESO',
        'FINAL JUEGOS DEPORTIVOS',
        'CLAUSURA Y CERTIFICADOS',
        'FOTO CONMEMORATIVA',
        '',
        '',
        'FIESTA DE CONFRATERNIDAD',
      ]
    }
  ]


  const timeSlots = [
    '9:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
    '21:00 A MÁS'
  ]

  const getActivityForTimeSlot = (dayIndex: number, timeIndex: number) => {
    const day = scheduleData[dayIndex]
    if(!day || !day.activities[timeIndex]) return { activity: 'Libre', color: '#E91E63' }

    const activity = day.activities[timeIndex]

    if(activity.includes('INAUGURACIÓN')) return { activity, color: '#FF9800' }
    if(activity.includes('PONENCIA') || activity.includes('PONENCIAS')) return { activity, color: '#00BCD4' }
    if(activity.includes('VISITA')) return { activity, color: '#FFC107' }
    if(activity.includes('INTEGRACIÓN')) return { activity, color: '#2196F3' }
    if(activity.includes('DEPORTIVA') || activity.includes('DEPORTIVAS')) return { activity, color: '#8BC34A' }
    if(activity.includes('CIENTÍFICA')) return { activity, color: '#9C27B0' }
    if(activity.includes('FINALIZACIÓN') || activity.includes('CERTIFICADOS')) return { activity, color: '#FF5722' }
    if(activity.includes('FIESTA') || activity.includes('CONFRATERNIDAD')) return { activity, color: '#E91E63' }

    return { activity, color: '#607D8B' }
  }

  return (
    <Root>
      <Box
        sx={{
          backgroundColor: '#8B4513',
          color          : 'white',
          padding        : '16px 32px',
          borderRadius   : '25px',
          display        : 'inline-block',
          mb             : 4,
          fontWeight     : 'bold',
          fontSize       : '24px'
        }}
      >
        CRONOGRAMA:
      </Box>

      <TableContainer component={Paper} sx={{ maxWidth: '100%', boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: '#757575',
                  color          : 'white',
                  fontWeight     : 'bold',
                  fontSize       : '14px',
                  textAlign      : 'center'
                }}
              >
                HORA
              </TableCell>
              {scheduleData.map((day, index) => (
                <TableCell
                  key={index}
                  sx={{
                    backgroundColor: '#FF9800',
                    color          : 'white',
                    fontWeight     : 'bold',
                    fontSize       : '14px',
                    textAlign      : 'center',
                    minWidth       : '120px'
                  }}
                >
                  <div>{day.day}</div>
                  <div style={{ fontSize: '12px', marginTop: '4px' }}>{day.date}</div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((timeSlot, timeIndex) => (
              <TableRow key={timeIndex}>
                <TableCell
                  sx={{
                    backgroundColor: '#757575',
                    color          : 'white',
                    fontWeight     : 'bold',
                    fontSize       : '12px',
                    textAlign      : 'center',
                    padding        : '8px'
                  }}
                >
                  {timeSlot}
                </TableCell>
                {scheduleData.map((_, dayIndex) => {
                  const { activity, color } = getActivityForTimeSlot(dayIndex, timeIndex)
                  return (
                    <TableCell
                      key={dayIndex}
                      sx={{
                        backgroundColor: color,
                        color          : 'white',
                        fontWeight     : '500',
                        fontSize       : '11px',
                        textAlign      : 'center',
                        padding        : '8px',
                        border         : '1px solid #fff',
                        lineHeight     : 1.2
                      }}
                    >
                      {activity}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Root>
  )
}

export default Schedule

import React from 'react'

import { Box, Typography, Paper, Grid } from '@mui/material'

const scheduleData = [
  { day: 'Lunes', time: '07:00 – 09:00', activity: 'Inscripción y acreditación de participantes. Entrega de kits oficiales del congreso' },
  { day: 'Lunes', time: '09:00 – 11:00', activity: 'Ceremonia de inauguración institucional y jornada de integración estudiantil' },
  { day: 'Lunes', time: '11:00 – 14:00', activity: 'Ponencia central inaugural y ciclo de ponencias magistrales de expertos nacionales e internacionales' },
  { day: 'Lunes', time: '14:00 – 15:00', activity: 'Receso. Almuerzo libre' },
  { day: 'Lunes', time: '15:00 – 18:00', activity: 'Visita técnica guiada al Proyecto IILA – Universidad Nacional de Piura' },
  { day: 'Lunes', time: '18:00 – 19:00', activity: 'Cena de confraternidad Institucional' },
  { day: 'Lunes', time: '19:00 – 21:00', activity: 'Gala cultural y Noche de gala y cultural. Bienvenida regional' },
  { day: 'Martes', time: '08:00 – 14:00', activity: 'Segundo bloque de ponencias magistrales a cargo de expertos nacionales e internacionales' },
  { day: 'Martes', time: '14:00 – 15:00', activity: 'Receso. Almuerzo libre' },
  { day: 'Martes', time: '15:00 – 19:00', activity: 'Ceremonia e inicio de los Juegos Deportivos Interuniversitarios del CONEIA' },
  { day: 'Miércoles', time: '08:00 – 14:00', activity: 'Feria empresarial y rueda de talleres técnicos simultáneos' },
  { day: 'Miércoles', time: '14:00 – 15:00', activity: 'Receso. Almuerzo libre' },
  { day: 'Miércoles', time: '15:00 – 18:00', activity: 'Tarde científica: exposición de investigaciones y avances tecnológicos en Ingeniería Agrícola' },
  { day: 'Miércoles', time: '19:00 – 20:00', activity: 'Asamblea general: Elección oficial de la nueva sede del próximo Congreso Nacional CLEIA - CONEIA' },
  { day: 'Jueves', time: '06:00 – 14:00', activity: 'Visita técnica especializada: Irrigación San Lorenzo y Proyecto Especial Chira-Piura' },
  { day: 'Jueves', time: '14:00 – 15:00', activity: 'Receso. Almuerzo libre' },
  { day: 'Jueves', time: '15:00 – 18:00', activity: 'Continuación de visita técnica y diálogo abierto con especialistas de los sectores hidráulicos e hídricos' },
  { day: 'Viernes', time: '08:00 – 14:00', activity: 'Presentación de casos de éxito: experiencias empresariales en ingeniería agrícola aplicada' },
  { day: 'Viernes', time: '14:00 – 15:00', activity: 'Receso para almuerzo libre' },
  { day: 'Viernes', time: '15:00 – 16:00', activity: 'Gran final. Premiación de los Juegos Deportivos' },
  { day: 'Viernes', time: '16:00 – 17:00', activity: 'Ceremonia de clausura oficial y entrega de certificados físicos a los participantes a los Congresos' },
  { day: 'Viernes', time: '17:00 – 18:00', activity: 'Sesión fotográfica conmemorativa con delegaciones, ingenieros invitados y empresarios' },
  { day: 'Viernes', time: '21:00 en adelante', activity: 'Gran fiesta de confraternidad. Despedida oficial del congreso' },
]

const days = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes' ]
const times = [ ...new Set(scheduleData.map(item => item.time)) ]

const getActivity = (day, time) => {
  const item = scheduleData.find(entry => entry.day === day && entry.time === time)
  return item ? item.activity : ''
}

const Schedule = () => {
  return (
    <Box p={2}>
      <Grid container spacing={1}>
        <Grid size={2}>
          <Paper sx={{ height: '100%', bgcolor: '#9E9E9E', p: 1 }}>
            <Typography variant='h6' color='white' align='center'>Horario</Typography>
          </Paper>
        </Grid>
        {days.map((day, index) => (
          <Grid key={index}>
            <Paper sx={{ bgcolor: '#FFA000', p: 1 }}>
              <Typography variant='body1' align='center' color='white'>{day}</Typography>
            </Paper>
          </Grid>
        ))}

        {times.map((time, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Grid size={2}>
              <Paper sx={{ bgcolor: '#E0E0E0', height: '100%', p: 1 }}>
                <Typography variant='body2' align='center'>{time}</Typography>
              </Paper>
            </Grid>
            {days.map((day, colIndex) => (
              <Grid key={`${rowIndex}-${colIndex}`}>
                <Paper sx={{ minHeight: 70, bgcolor: '#4FC3F7', p: 1, color: 'white' }}>
                  <Typography variant='caption'>{getActivity(day, time)}</Typography>
                </Paper>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  )
}

export default Schedule

import { Typography } from '@mui/material'

import Root from './styles'

const ListVisits = () => {
  return (
    <Root>
      <div>
        <Typography variant='h6'>Los Ejidos Represa</Typography>
        <Typography variant='body1'>Descripcion: </Typography>
        <video
          controls
          preload='none'
          width='100%'
          height='auto'
          poster='/thumbnail.jpg'
        >
          <source src='/video-ejidos.webm' type='video/webm' />
          <source src='/video-ejidos.mp4' type='video/mp4' />
          Tu navegador no soporta el video.
        </video>

      </div>
    </Root>
  )
}

export default ListVisits

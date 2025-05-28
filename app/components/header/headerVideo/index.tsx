'use client'
import { Box } from '@mui/material'

const HeaderVideo = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: '#eaf5ff',
    }}
  >
    {/* 
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/PPG.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>
    */}
  </Box>
)

export default HeaderVideo

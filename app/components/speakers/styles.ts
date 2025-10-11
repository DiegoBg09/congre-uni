import { SxProps, Theme } from '@mui/material'

export const containerStyles: SxProps<Theme> = {
  background: 'linear-gradient(135deg, #5B2C06 0%, #2A1602 100%)',
  py: 8
}

export const innerContainerStyles: SxProps<Theme> = {}

export const titleStyles: SxProps<Theme> = {
  color: '#A6CE39',
  fontWeight: 800,
  mb: 6,
  textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
}

export const scrollContainerStyles: SxProps<Theme> = {
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  gap: 3,
  pb: 2,
  cursor: 'grab',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&.dragging': {
    cursor: 'grabbing',
    scrollBehavior: 'auto'
  }
}

export const speakerCardStyles: SxProps<Theme> = {
  minWidth: 280,
  height: 380,
  borderRadius: 3,
  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
  overflow: 'hidden',
  flexShrink: 0,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0,0,0,0.35)'
  }
}

export const imageContainerStyles: SxProps<Theme> = {
  width: '100%',
  height: 280,
  position: 'relative',
  background: 'linear-gradient(180deg, #64B5F6 0%, #1976D2 100%)',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center'
}

export const imageStyles: SxProps<Theme> = {
  objectFit: 'contain'
}

export const nameContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 3,
  background: '#fff',
  minHeight: 100
}

export const nameStyles: SxProps<Theme> = {
  fontWeight: 700,
  color: '#2A1602',
  fontSize: '1.1rem'
}

export const autoScrollKeyframes = `
  @keyframes autoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`

export const autoScrollStyles: SxProps<Theme> = {
  animation: 'autoScroll 30s linear infinite',
  '&:hover': {
    animationPlayState: 'paused'
  }
}

'use client'

import { useState } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Fab, Box, Paper, Typography, Button, IconButton } from '@mui/material'
import { keyframes } from '@mui/system'

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`

type ChatStep = 'initial' | 'info' | 'tickets'

const ChatWhats = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ currentStep, setCurrentStep ] = useState<ChatStep>('initial')

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if(!isOpen) {
      setCurrentStep('initial')
    }
  }

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/51900536082?text=${encodedMessage}`, '_blank')
  }

  const handleInfoClick = () => {
    setCurrentStep('info')
  }

  const handleTicketsClick = () => {
    setCurrentStep('tickets')
  }

  const handleBackClick = () => {
    setCurrentStep('initial')
  }

  const renderContent = () => {
    switch (currentStep) {
      case 'initial':
        return (
          <>
            <Paper elevation={1} sx={{ p: 2, borderRadius: '15px', mb: 2 }}>
              <Typography variant='body2'>
                ¡Hola! 👋
                <br />
                Soy tu asistente virtual de CLEIA - CONEIA.
                <br />
                ¿En qué puedo ayudarte?
              </Typography>
            </Paper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Button
                fullWidth
                variant='outlined'
                onClick={handleInfoClick}
                sx={{
                  borderRadius : '25px',
                  py           : 1.2,
                  textTransform: 'none',
                }}
              >
                📋 Información del congreso
              </Button>
              <Button
                fullWidth
                variant='outlined'
                onClick={handleTicketsClick}
                sx={{
                  borderRadius : '25px',
                  py           : 1.2,
                  textTransform: 'none',
                }}
              >
                🎫 Comprar entrada
              </Button>
            </div>
          </>
        )
      case 'info':
        return (
          <>
            <Paper
              elevation={1}
              sx={{
                p           : 2,
                borderRadius: '15px',
                mb          : 2,
              }}
            >
              <Typography variant='body2' sx={{ color: '#333', lineHeight: 1.5, mb: 1 }}>
                <strong>📋 Información del Congreso</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: '#555', lineHeight: 1.5 }}>
                🗓️ <strong>Fecha:</strong> Del 20 al 24 de Agosto
                <br />
                📍 <strong>Lugar:</strong> Piura, Perú
                <br />
                👥 <strong>Dirigido a:</strong> Estudiantes y profesionales de Ingeniería Agrícola y carreras afines
                <br />
                🎯 <strong>Mision:</strong> Impulsar el desarrollo y tecnología en agricultura sostenible
              </Typography>
            </Paper>
            <Button
              fullWidth
              variant='contained'
              onClick={() => openWhatsApp('Hola! Me interesa obtener más información detallada sobre el Congreso Nacional de Ingeniería Agrícola. ¿Podrían enviarme el programa completo y detalles adicionales?')}
              sx={{
                borderRadius: '25px',
                py          : 1.5,
                fontWeight  : 'bold',
                mb          : 1,
              }}
            >
              💬 Solicitar más información
            </Button>
            <Button
              fullWidth
              variant='text'
              onClick={handleBackClick}
              startIcon={<ArrowBackIcon />}
            >
              Volver al menú
            </Button>
          </>
        )
      case 'tickets':
        return (
          <>
            <Paper
              elevation={1}
              sx={{
                p              : 2,
                borderRadius   : '15px',
                backgroundColor: 'white',
                mb             : 2,
              }}
            >
              <Typography variant='body2' sx={{ color: '#333', lineHeight: 1.5, mb: 1 }}>
                <strong>🎫 Información de Entradas</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: '#555', lineHeight: 1.5 }}>
                💰 <strong>Estudiantes:</strong> S/. 140.00
                <br />
                👔 <strong>Egresados y/o Profesionales:</strong> S/. 180.00
                <br />
                💳 <strong>Métodos de pago:</strong> Transferencia, Yape, Plin
              </Typography>
            </Paper>

            <Button
              fullWidth
              variant='contained'
              onClick={() => openWhatsApp('¡Hola! Quiero comprar una entrada para el Congreso Nacional de Ingeniería Agrícola. ¿Podrían enviarme información sobre los costos, métodos de pago y el proceso de inscripción? Gracias.')}
              sx={{
                color        : 'white',
                borderRadius : '25px',
                py           : 1.5,
                textTransform: 'none',
                fontSize     : '14px',
                fontWeight   : 'bold',
                mb           : 1,
                '&:hover'    : {
                  backgroundColor: '#128C7E',
                },
              }}
            >
              🛒 Comprar entrada
            </Button>

            <Button
              fullWidth
              variant='text'
              onClick={handleBackClick}
              startIcon={<ArrowBackIcon />}
              sx={{
                color        : '#666',
                textTransform: 'none',
                fontSize     : '12px',
              }}
            >
              Volver al menú
            </Button>
          </>
        )
      default:
        return null
    }
  }
  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      {isOpen && (
        <Paper
          elevation={8}
          sx={{
            position       : 'absolute',
            bottom         : 80,
            right          : 0,
            width          : 400,
            borderRadius   : '20px',
            overflow       : 'hidden',
            transform      : isOpen ? 'scale(1)' : 'scale(0)',
            transformOrigin: 'bottom right',
            transition     : 'transform 0.3s ease',
          }}
        >
          <div
            style={{
              background    : 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              padding       : '16px',
              display       : 'flex',
              justifyContent: 'space-between',
              alignItems    : 'center',
            }}
          >
            <div>
              <Typography variant='body2' sx={{ opacity: 0.9, fontSize: '12px' }}>
                Asistente Virtual
              </Typography>
              <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                CLEIA - CONEIA
              </Typography>
            </div>
            <IconButton
              size='small'
              onClick={toggleChat}
              sx={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </div>
          <div style={{ padding: '24px', backgroundColor: '#f5f5f5' }}>
            {renderContent()}
          </div>
        </Paper>
      )}

      <Fab
        color='success'
        aria-label='whatsapp'
        onClick={toggleChat}
        sx={{
          backgroundColor: '#25D366',
          color          : 'white',
          width          : 60,
          height         : 60,
          boxShadow      : '0 4px 20px rgba(37, 211, 102, 0.4)',
          animation      : !isOpen ? `${pulse} 2s infinite` : 'none',
          '&:hover'      : {
            backgroundColor: '#128C7E',
            transform      : 'scale(1.1)',
            transition     : 'all 0.3s ease',
          },
          '&:active': {
            transform: 'scale(0.95)',
          }
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Fab>
    </Box>
  )
}

export default ChatWhats

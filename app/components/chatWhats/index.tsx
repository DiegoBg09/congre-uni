'use client'

import { useState } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Fab, Paper, Typography, Button, IconButton } from '@mui/material'
import { keyframes } from '@mui/system'

import Root, { classes } from './styles'

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

type ChatStep = 'initial' | 'info' | 'tickets' | 'phone'

const ChatWhats = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ currentStep, setCurrentStep ] = useState<ChatStep>('initial')
  const [ selectedPhone, setSelectedPhone ] = useState<string>('')
  const [ previousStep, setPreviousStep ] = useState<ChatStep>('initial') // 👈 nuevo estado

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if(!isOpen) {
      setCurrentStep('initial')
      setSelectedPhone('')
      setPreviousStep('initial')
    }
  }

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = selectedPhone || '51900536082' // número por defecto si no se ha seleccionado
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
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

  const handlePhoneSelection = (phone: string) => {
    setSelectedPhone(phone)

    if(previousStep === 'info') {
      openWhatsApp('Hola! Me interesa obtener más información detallada sobre el Congreso Nacional de Ingeniería Agrícola. ¿Podrían enviarme el programa completo y detalles adicionales?')
    } else if(previousStep === 'tickets') {
      openWhatsApp('¡Hola! Quiero comprar una entrada para el Congreso Nacional de Ingeniería Agrícola. ¿Podrían enviarme información sobre los costos, métodos de pago y el proceso de inscripción? Gracias.')
    }

    setCurrentStep('initial')
    setPreviousStep('initial')
  }

  const handleContactClick = (step: 'info' | 'tickets') => {
    setPreviousStep(step)
    setCurrentStep('phone')
  }

  const renderContent = () => {
    switch (currentStep) {
      case 'initial':
        return (
          <>
            <Paper elevation={1} className={classes.messagePaper}>
              <Typography variant='body2'>
                ¡Hola! 👋
                <br />
                Soy tu asistente virtual de CLEIA - CONEIA.
                <br />
                ¿En qué puedo ayudarte?
              </Typography>
            </Paper>
            <div className={classes.buttonContainer}>
              <Button
                fullWidth
                variant='outlined'
                onClick={handleInfoClick}
                className={classes.actionButton}
              >
                📋 Información del congreso
              </Button>
              <Button
                fullWidth
                variant='outlined'
                onClick={handleTicketsClick}
                className={classes.actionButton}
              >
                🎫 Comprar entrada
              </Button>
            </div>
          </>
        )
      case 'info':
        return (
          <>
            <Paper elevation={1} className={classes.messagePaper}>
              <Typography variant='body2' sx={{ color: '#333', lineHeight: 1.5, mb: 1 }}>
                <strong>📋 Información del Congreso</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: '#555', lineHeight: 1.5 }}>
                🗓️ <strong>Fecha:</strong> Del 20 al 24 de Octubre
                <br />
                📍 <strong>Lugar:</strong> Piura, Perú
                <br />
                👥 <strong>Dirigido a:</strong> Estudiantes y profesionales de Ingeniería Agrícola y carreras afines
                <br />
                🎯 <strong>Misión:</strong> Impulsar el desarrollo y tecnología en agricultura sostenible
              </Typography>
            </Paper>
            <Button
              fullWidth
              variant='contained'
              onClick={() => handleContactClick('info')}
              className={classes.infoButton}
            >
              💬 Solicitar más información
            </Button>
            <Button
              fullWidth
              variant='text'
              onClick={handleBackClick}
              startIcon={<ArrowBackIcon />}
              className={classes.backButton}
            >
              Volver al menú
            </Button>
          </>
        )
      case 'tickets':
        return (
          <>
            <Paper elevation={1} className={classes.messagePaper}>
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
              onClick={() => handleContactClick('tickets')}
              className={classes.ticketsButton}
            >
              🛒 Comprar entrada
            </Button>

            <Button
              fullWidth
              variant='text'
              onClick={handleBackClick}
              startIcon={<ArrowBackIcon />}
              className={classes.backButton}
            >
              Volver al menú
            </Button>
          </>
        )
      case 'phone':
        return (
          <>
            <Paper elevation={1} className={classes.messagePaper}>
              <Typography variant='body2' sx={{ color: '#333', lineHeight: 1.5, mb: 2 }}>
                <strong>📞 Selecciona un número de contacto:</strong>
              </Typography>
              <div className={classes.buttonContainer}>
                <Button
                  fullWidth
                  variant='outlined'
                  onClick={() => handlePhoneSelection('51925038058')}
                  className={classes.phoneButton}
                >
                  📱 925 038 058
                </Button>
                <Button
                  fullWidth
                  variant='outlined'
                  onClick={() => handlePhoneSelection('51955230045')}
                  className={classes.phoneButton}
                >
                  📱 955 230 045
                </Button>
              </div>
            </Paper>
            <Button
              fullWidth
              variant='text'
              onClick={handleBackClick}
              startIcon={<ArrowBackIcon />}
              className={classes.backButton}
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
    <Root>
      {isOpen && (
        <Paper elevation={8} className={classes.chatWindow}>
          <div className={classes.header}>
            <div className={classes.headerContent}>
              <Typography variant='body2'>
                Asistente Virtual
              </Typography>
              <Typography variant='h6'>
                CLEIA - CONEIA
              </Typography>
            </div>
            <IconButton
              size='small'
              onClick={toggleChat}
              className={classes.closeButton}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </div>
          <div className={classes.chatContent}>
            {renderContent()}
          </div>
        </Paper>
      )}

      <Fab
        color='success'
        aria-label='whatsapp'
        onClick={toggleChat}
        className={classes.fab}
        sx={{
          animation: !isOpen ? `${pulse} 2s infinite` : 'none'
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Fab>
    </Root>
  )
}

export default ChatWhats

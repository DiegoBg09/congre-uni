'use client'
import { useState } from 'react'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Button, Menu, MenuItem } from '@mui/material'

import Root, { classes } from './styles'

const HeaderBody = () => {
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message =
      '¡Hola! Quiero comprar una entrada para el Congreso Nacional de Ingeniería Agrícola.'
    const encodedMessage = encodeURIComponent(message)

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
    handleCloseMenu()
  }

  return (
    <Root>
      <div className={classes.content}>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          startIcon={<WhatsAppIcon />}
          onClick={handleOpenMenu}
        >
          ¿Cómo adquiero mi entrada?
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              width: anchorEl ? anchorEl.offsetWidth : undefined
            }
          }}
        >
          <MenuItem
            onClick={() => handleWhatsAppClick('51925038058')}
            sx={{ justifyContent: 'center' }}
          >
            📱 925 038 058
          </MenuItem>
          <MenuItem
            onClick={() => handleWhatsAppClick('51955230045')}
            sx={{ justifyContent: 'center' }}
          >
            📱 955 230 045
          </MenuItem>
        </Menu>
      </div>
    </Root>
  )
}

export default HeaderBody

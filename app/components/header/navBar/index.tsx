import Link from 'next/link'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import logoNavBar from '../../../assets/icon-navbar.svg'

const navItems = [
  { label: 'HOME', href: '/home' },
  { label: 'CONGRESOS PASADOS', href: '/congresos-pasados' },
  { label: 'CRONOGRAMA', href: '#cronograma' },
  { label: 'PONENTES', href: '#ponentes' },
  { label: 'VISITAS TÉCNICAS', href: '/visitas-tecnicas' },
  { label: 'SOBRE NOSOTROS', href: '#sobre-nosotros' },
  { label: 'COMPRA TU ENTRADA', href: '#compra-tu-entrada' }
]

const NavBar = () => (
  <AppBar elevation={0} position='relative' color='transparent'>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Typography component='div' sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '10px' }}>
        <img src={logoNavBar.src} alt="Logo" />
      </Typography>
      <div>
        {navItems.map(({ label, href }) => (
          <Button
            key={label}
            LinkComponent={Link}
            color='inherit'
            href={href}
            sx={{ fontWeight: 'bold', textTransform: 'none' }}
          >
            {label}
          </Button>
        ))}
      </div>
    </Toolbar>
  </AppBar>
)

export default NavBar

import { AppBar, Button, Toolbar } from '@mui/material'
import Link from 'next/link'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'CONGRESOS PASADOS', href: '/congresos-pasados' },
  { label: 'VISITAS TÉCNICAS', href: '/visitas-tecnicas' },
  { label: 'COMPRA TU ENTRADA', href: '/#compra-tu-entrada' }
]

const NavBar = () => (
  <AppBar elevation={0} position='relative' color='transparent'>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
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

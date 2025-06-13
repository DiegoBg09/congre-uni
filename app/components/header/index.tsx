'use client'
import { ReactElement } from 'react'

import HeaderVideo from './headerVideo'
// import NavBar from './navBar'
import Root, { classes } from './styles'

interface HeaderProps {
  body: ReactElement;
}

const Header = ({ body }: HeaderProps) => (
  <Root>
    <HeaderVideo />
    <div className={classes.homeInfo}>
      {body}
    </div>
  </Root>
)

export default Header

'use client'

import Root, { classes } from './styles'

const HeaderVideo = () => (
  <Root>
    <video
      autoPlay
      loop
      muted
      playsInline
      preload='metadata'
      className={classes.video}
    >
      <source src='/coneia-background.webm' type='video/webm' />
      Tu navegador no soporta el video HTML5.
    </video>
  </Root>
)

export default HeaderVideo

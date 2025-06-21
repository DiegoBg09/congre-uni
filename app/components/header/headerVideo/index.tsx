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
      <source src='/coneia-cleia-background.webm' type='video/webm' />
      <source src='/coneia-cleia-background.mp4' type='video/mp4' />
      Tu navegador no soporta el video HTML5.
    </video>
  </Root>
)

export default HeaderVideo

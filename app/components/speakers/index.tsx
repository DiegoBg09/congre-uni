'use client'

import { useState, useRef, useEffect } from 'react'

import { Box, Typography, Card, Container } from '@mui/material'
import Image from 'next/image'

import bueno from '../../assets/bueno.svg'
import calvo from '../../assets/calvo.svg'
import costaRica from '../../assets/costa-rica.svg'
import gerardo from '../../assets/Gerardo-Santana.svg'
import luis from '../../assets/Luis-Valdiviezo.svg'
import mexico from '../../assets/mexico.svg'
import nestor from '../../assets/Nestor-Montalvo.svg'
import parrado from '../../assets/parrado.svg'
import peru from '../../assets/peru.svg'
import zegarra from '../../assets/zegarra.svg'

import {
  containerStyles,
  innerContainerStyles,
  titleStyles,
  scrollContainerStyles,
  speakerCardStyles,
  imageContainerStyles,
  nameContainerStyles,
  nameStyles,
  autoScrollKeyframes
} from './styles'

interface Speaker {
  id     : number;
  name   : string;
  image  : string;
  country: string;
}

const speakersData: Speaker[] = [
  {
    id     : 1,
    name   : 'Dr. Gerardo Santana',
    image  : gerardo,
    country: peru
  },
  {
    id     : 2,
    name   : 'Dr. Nestor Montalvo',
    image  : nestor,
    country: peru
  },
  {
    id     : 3,
    name   : 'Ing. Luis Valdiviezo',
    image  : luis,
    country: peru
  },
  {
    id     : 4,
    name   : 'Nancy Calvo',
    image  : calvo,
    country: costaRica
  },
  {
    id     : 5,
    name   : 'Ing. Edgardo Guerra',
    image  : bueno,
    country: peru
  },
  {
    id     : 6,
    name   : 'Ing. Lina Parrado',
    image  : parrado,
    country: mexico
  },
  {
    id     : 7,
    name   : 'Ing. David Zegarra',
    image  : zegarra,
    country: peru
  }
]

const Speakers = () => {
  const [ isDragging, setIsDragging ] = useState(false)
  const [ startX, setStartX ] = useState(0)
  const [ scrollLeft, setScrollLeft ] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Usar los datos originales sin duplicar
  const speakers = speakersData

  const handleMouseDown = (e: React.MouseEvent) => {
    if(!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if(!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Scroll automático
  useEffect(() => {
    const interval = setInterval(() => {
      if(!scrollContainerRef.current || isDragging) return

      const container = scrollContainerRef.current
      const maxScroll = container.scrollWidth - container.clientWidth
      const currentScroll = container.scrollLeft

      if(currentScroll >= maxScroll) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }, 30)

    return () => clearInterval(interval)
  }, [ isDragging ])

  return (
    <>
      <style>{autoScrollKeyframes}</style>
      <Box sx={containerStyles}>
        <Container sx={innerContainerStyles}>
          <Typography
            variant='h2'
            component='h1'
            align='center'
            sx={titleStyles}
          >
            PONENTES OFICIALES
          </Typography>

          <Box
            ref={scrollContainerRef}
            sx={{
              ...scrollContainerStyles,
              ...(isDragging ? { cursor: 'grabbing' } : {}),
              padding: 2
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {speakers.map((speaker) => (
              <Card
                key={speaker.id}
                sx={speakerCardStyles}
              >
                <Box sx={imageContainerStyles}>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={220}
                    height={220}
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Box sx={nameContainerStyles}>
                  <Typography
                    variant='h6'
                    sx={nameStyles}
                  >
                    {speaker.name}
                  </Typography>
                  <Image src={speaker.country} alt={speaker.name} width={50} height={50} />
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Speakers

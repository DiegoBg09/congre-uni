'use client'
import { Box, Typography, Card, Grid, CardContent, Avatar, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface Speaker {
  id         : number;
  name       : string;
  title      : string;
  country    : string;
  countryFlag: string;
  image      : string;
  companies  : string[];
}

const speakersData: Speaker[] = [
  {
    id         : 1,
    name       : 'Giancarlo Torres',
    title      : 'Supply Chain Planning Manager',
    country    : 'Perú',
    countryFlag: '🇵🇪',
    image      : '/api/placeholder/300/300',
    companies  : [ 'Komatsu', 'Mitsui' ]
  },
  {
    id         : 2,
    name       : 'Arturo Montalvan',
    title      : 'Gerente General de Lácteos Toni',
    country    : 'Perú',
    countryFlag: '🇵🇪',
    image      : '/api/placeholder/300/300',
    companies  : [ 'LAY' ]
  },
  {
    id         : 3,
    name       : 'Frank Cano',
    title      : 'FMBA - MSC - PMC - CSP Industrial Engineer',
    country    : 'Perú',
    countryFlag: '🇵🇪',
    image      : '/api/placeholder/300/300',
    companies  : [ 'Mondelez', 'Kraft' ]
  },
  {
    id         : 4,
    name       : 'André Chávez',
    title      : 'Consultor Senior en Inteligencia Artificial',
    country    : 'Perú',
    countryFlag: '🇵🇪',
    image      : '/api/placeholder/300/300',
    companies  : [ 'Baccus' ]
  },
  {
    id         : 5,
    name       : 'Santiago Moscoso',
    title      : 'Decano en la Universidad Católica de Cuenca',
    country    : 'Ecuador',
    countryFlag: '🇪🇨',
    image      : '/api/placeholder/300/300',
    companies  : [ 'UC', 'R&D' ]
  },
  {
    id         : 6,
    name       : 'Pablo Vega',
    title      : 'Gerente General de CIVE',
    country    : 'Chile',
    countryFlag: '🇨🇱',
    image      : '/api/placeholder/300/300',
    companies  : [ 'CIVE' ]
  }
]

const Speakers = () => {
  const theme = useTheme()

  return (
    <Box>
      <Box maxWidth='1200px' mx='auto'>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          sx={{
            color     : 'white',
            fontWeight: 700,
            mb        : 6,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          PONENTES OFICIALES
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
          {speakersData.map((speaker) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={speaker.id}>
              <Card
                sx={{
                  height        : '100%',
                  background    : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius  : 3,
                  border        : '1px solid rgba(255,255,255,0.2)',
                  boxShadow     : '0 8px 32px rgba(0,0,0,0.1)',
                  transition    : 'all 0.3s ease',
                  '&:hover'     : {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Avatar
                    src={speaker.image}
                    alt={speaker.name}
                    sx={{
                      width    : 120,
                      height   : 120,
                      mx       : 'auto',
                      mb       : 2,
                      border   : `3px solid ${theme.palette.secondary.main}`,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                    }}
                  />

                  <Typography
                    variant='h5'
                    component='h3'
                    sx={{
                      color     : theme.palette.primary.main,
                      fontWeight: 700,
                      mb        : 1
                    }}
                  >
                    {speaker.name}
                  </Typography>

                  <Chip
                    label={speaker.country}
                    size='small'
                    sx={{
                      backgroundColor: theme.palette.warning.main,
                      color          : 'white',
                      fontWeight     : 600,
                      mb             : 2
                    }}
                  />

                  <Typography
                    variant='subtitle1'
                    sx={{
                      color         : theme.palette.text.primary,
                      mb            : 3,
                      minHeight     : '3em',
                      display       : 'flex',
                      alignItems    : 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {speaker.title}
                  </Typography>

                  <Box
                    sx={{
                      display       : 'flex',
                      flexWrap      : 'wrap',
                      gap           : 1,
                      justifyContent: 'center',
                      mt            : 'auto'
                    }}
                  >
                    {speaker.companies.map((company, index) => (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color          : 'white',
                          px             : 2,
                          py             : 0.5,
                          borderRadius   : 2,
                          fontSize       : '0.75rem',
                          fontWeight     : 600
                        }}
                      >
                        {company}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Speakers

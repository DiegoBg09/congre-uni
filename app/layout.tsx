'use client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import WhatsAppFab from './components/chatWhats'
import Footer from './components/footer'
import theme from './utils/theme'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute='class' />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <WhatsAppFab />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

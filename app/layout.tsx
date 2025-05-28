import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import theme from './utils/theme'
import WhatsAppFab from './components/chatWhats'

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
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
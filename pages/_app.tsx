import '../styles/globals.css'

import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default App

import '../styles/globals.css'

import { MantineProvider } from '@mantine/core'
import { Navbar } from 'components/Navbar'
import { TopSection } from 'components/TopSection'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar />
      <TopSection />
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default App

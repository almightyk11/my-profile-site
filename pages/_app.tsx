import '../styles/globals.css'

import { MantineProvider } from '@mantine/core'
import { Navbar } from 'components/Navbar'
import { TopSection } from 'components/TopSection'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>オールマイティ・kのサイト（仮）</title>
        <meta
          name='description'
          content='自分のピアノ演奏動画、見たアニメリスト、弾いた・弾いてみたい曲リストetcなどを載せた簡易プロフィールサイトを新しく使う技術の勉強・練習も兼ねて作成します。'
        />

        {/* twitter card link */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='オールマイティ・Kのプロフィールサイト（作成中）' />
        <meta
          name='twitter:description'
          content='自分のピアノ演奏動画、見たアニメリスト、弾いた・弾いてみたい曲リストetcなどを載せた簡易プロフィールサイトを新しく使う技術の勉強・練習も兼ねて作成します。'
        />
        <meta
          name='twitter:image'
          content='https://my-profile-site-khaki.vercel.app/twitter_card.jpg'
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar />
        <TopSection />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default App

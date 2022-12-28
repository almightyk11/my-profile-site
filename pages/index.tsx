import { Container } from '@mantine/core'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>オールマイティ・kのサイト（仮）</title>
        <meta name='description' content='オールマイティ・kのサイト（仮）' />
      </Head>
      <div className='p-3 bg-cyan-800'>
        <h1 className='my-3.5 text-2xl font-bold text-center text-amber-300'>
          オールマイティー・K
        </h1>
        <p className='my-1.5 text-sm text-slate-300'>
          自分の演奏動画、見たアニメリスト、弾いた・弾いてみたい曲リストetcなどを載せた簡易プロフィールサイトを作成します。（今度新しく使用する技術の練習も兼ねてます）
        </p>
        <p className='my-1.5 text-sm text-slate-300'>現状の実装：タイトル表示、スマホ版のみ</p>
      </div>
      <Container></Container>
    </>
  )
}

export default Home

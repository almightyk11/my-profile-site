import { Badge, Card, Container } from '@mantine/core'
import Head from 'next/head'
import ReactPlayer from 'react-player'

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
          自分の演奏動画、見たアニメリスト、弾いた・弾いてみたい曲リストetcなどを載せた簡易プロフィールサイトを作成します。（今度のWeb開発で新しく使用する技術の練習も兼ねてます。基本的には他の勉強もあるので、こちらはゆっくりの更新です。）
        </p>
        <p className='my-1.5 text-sm text-slate-300'>現状の実装：タイトル表示、スマホ版のみ</p>
      </div>
      <Container className='py-3 bg-slate-200'>
        <h2 className='text-xl text-center text-cyan-800'>演奏動画一覧</h2>
        <Card shadow='sm' radius='md' withBorder className='mb-5'>
          <Card.Section>
            <ReactPlayer
              url='https://www.youtube.com/shorts/Mxg8LfkHSBo?feature=share'
              width='100%'
            />
          </Card.Section>
          <p className='mt-4 mb-0 font-semibold'>熱情3楽章(練習中)</p>
          <div className='flex justify-between mt-2 mb-1'>
            <p className='my-0 text-sm text-slate-600'>ベートーヴェン</p>
            <Badge color='pink' variant='light'>
              クラシック
            </Badge>
          </div>
        </Card>
      </Container>
    </>
  )
}

export default Home

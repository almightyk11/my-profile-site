import { Container } from '@mantine/core'
import { MovieCardList } from 'components/Movie'
import Movie from 'interfaces/movie'
import { mockMovies } from 'mock/movies'
import Head from 'next/head'

const movies: Movie[] = mockMovies

const Home = () => {
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
        <meta name='twitter:title' content='オールマイティ・Kのプロフィールサイト（仮）' />
        <meta
          name='twitter:description'
          content='自分のピアノ演奏動画、見たアニメリスト、弾いた・弾いてみたい曲リストetcなどを載せた簡易プロフィールサイトを新しく使う技術の勉強・練習も兼ねて作成します。'
        />
        <meta
          name='twitter:image'
          content='https://my-profile-site-khaki.vercel.app/twitter_card_link.jpg'
        />
      </Head>
      <div className='p-3 bg-cyan-800'>
        <h1 className='my-3.5 text-2xl font-bold text-center text-amber-300'>
          オールマイティー・K
        </h1>
        <p className='my-1.5 text-sm text-slate-300'>
          自分の演奏動画、見たアニメリスト、弾いた・弾いてみたい曲リストetcなどを載せた簡易プロフィールサイトを作成します。（今度のWeb開発で新しく使用する技術の練習も兼ねてます。基本的には他の勉強もあるので、こちらはゆっくりの更新です。）
        </p>
        <p className='my-1.5 text-sm text-slate-300'>
          現状の実装：演奏動画3件ほど表示、スマホ版のみ
        </p>
      </div>
      <Container className='py-3 bg-slate-200'>
        <h2 className='text-xl text-center text-cyan-800'>演奏動画一覧</h2>
        <MovieCardList movies={movies} />
      </Container>
    </>
  )
}

// getStaticPropsでAPIから取得するようにする
export default Home

import { Container } from '@mantine/core'
import { MovieCardList } from 'components/Movie'
import Movie from 'interfaces/movie'
import { mockMovies } from 'mock/movies'
import Head from 'next/head'

const movies: Movie[] | undefined = mockMovies

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

      {/* 演奏動画一覧 */}
      <section className='py-3 bg-slate-200'>
        <Container>
          <h2 className='text-xl text-center text-cyan-800'>演奏動画一覧</h2>
          <MovieCardList movies={movies} />
        </Container>
      </section>
    </>
  )
}

// getStaticPropsでAPIから取得するようにする
export default Home

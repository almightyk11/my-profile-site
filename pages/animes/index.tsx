import { Container } from '@mantine/core'
import { AnimeListByYearsComponent } from 'components/AnimeList'
import { AnimeListByYears } from 'interfaces/anime'
import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import { getAnimeListByYears } from 'services/anime/getAnimeListByYears'

export const getStaticProps: GetStaticProps<{ animeListByYears: AnimeListByYears }> = async () => {
  const animeListByYears: AnimeListByYears = (await getAnimeListByYears()) || []
  return {
    props: {
      animeListByYears,
    },
  }
}

const Animes = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <section className='min-h-screen py-3 bg-slate-200'>
      <Container>
        <h2 className='text-xl text-center text-cyan-800'>見たアニメ一覧</h2>
        <p className='text-[0.9rem]'>※放送年については放送開始された年を基準にしてます。</p>
        <p className='text-[0.9rem]'>
          ※星つけてるのは特に好きということであって、
          <span className='text-pink-500'>星ないから嫌いというわけではないです。</span>
          アニメ全般が好きです。
        </p>
        <AnimeListByYearsComponent animeListByYears={props.animeListByYears} />
        <p className='text-center text-slate-600'>随時更新予定です。</p>
      </Container>
    </section>
  )
}

export default Animes

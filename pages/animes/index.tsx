import { Button, Container } from '@mantine/core'
import { AnimeListByYearsComponent, SortedAnimeListComponent } from 'components/AnimeList'
import Anime, { AnimeListByYears } from 'interfaces/anime'
import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import { useCallback, useState } from 'react'
import { getAnimeListByYears } from 'services/anime/getAnimeListByYears'
import { getSortedAnimeList } from 'services/anime/getSortedAnimeList'

export const getStaticProps: GetStaticProps<{
  animeListByYears: AnimeListByYears
  sortedAnimeList: Anime[]
}> = async () => {
  const animeList: Anime[] = (await getSortedAnimeList()) || []
  const animeListByYears: AnimeListByYears = (await getAnimeListByYears()) || []
  const sortedAnimeList = [...animeList].sort((a, b) => {
    if (a.rating > b.rating) return -1
    if (a.rating < b.rating) return 1

    if (a.year > b.year) return -1
    if (a.year < b.year) return 1

    return 0
  })

  return {
    props: {
      animeListByYears,
      sortedAnimeList,
    },
  }
}

const Animes = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [isByStartsOpened, setIsByStartsOpened] = useState(false)
  const handleSetIsByStartsOpened = useCallback(() => setIsByStartsOpened((o) => !o), [])

  return (
    <section className='min-h-screen py-3 bg-slate-200'>
      <Container>
        <h2 className='text-xl text-center text-cyan-800'>見たアニメ一覧</h2>
        <p className='text-[0.9rem]'>※年代については放送開始された年を基準にしてます。</p>
        <p className='text-[0.9rem]'>
          ※星つけてるのは特に好きということであって、
          <span className='font-semibold text-pink-500'>
            星ないから嫌いというわけではないです。
          </span>
          アニメ全般が好きです。
        </p>

        <Button.Group className='mb-5 '>
          <Button
            fullWidth
            variant={!isByStartsOpened ? 'filled' : 'default'}
            disabled={!isByStartsOpened}
            classNames={{ root: 'disabled:bg-cyan-600 disabled:text-white' }}
            onClick={handleSetIsByStartsOpened}
          >
            星2以上
          </Button>
          <Button
            variant={isByStartsOpened ? 'filled' : 'default'}
            fullWidth
            classNames={{ root: 'disabled:bg-cyan-600 disabled:text-white' }}
            disabled={isByStartsOpened}
            onClick={handleSetIsByStartsOpened}
          >
            年代別
          </Button>
        </Button.Group>

        {isByStartsOpened ? (
          <AnimeListByYearsComponent animeListByYears={props.animeListByYears} />
        ) : (
          <SortedAnimeListComponent sortedAnimeList={props.sortedAnimeList} />
        )}

        <p className='text-center text-slate-600'>随時更新予定です。</p>
      </Container>
    </section>
  )
}

export default Animes

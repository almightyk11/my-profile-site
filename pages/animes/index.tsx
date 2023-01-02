import { Accordion, Container, Rating } from '@mantine/core'
import { mockAnimeListByYear } from 'mock/animes'

const Animes = () => {
  return (
    <section className='min-h-screen py-3 bg-slate-200'>
      <Container>
        <h2 className='text-xl text-center text-cyan-800'>見たアニメ一覧</h2>
        <p className='text-[0.9rem]'>※放送年については放送開始された年を基準にしてます。</p>
        <p className='text-[0.9rem]'>
          ※星つけてるのは特に好きということであって、星ないから嫌いというわけではないです。アニメ全般が好きです。
        </p>
        <Accordion variant='separated' disableChevronRotation>
          {mockAnimeListByYear.map((animeList) => (
            <Accordion.Item key={animeList.year} value={animeList.year}>
              <Accordion.Control>
                <p className='m-0 font-semibold text-[1rem]'>{animeList.year}</p>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='text-slate-600'>
                  {animeList.animes.map((anime) => (
                    <li key={anime.title} className='flex justify-between'>
                      <span>{anime.title}</span>
                      {anime.rating ? <Rating count={3} value={anime.rating} /> : ''}
                    </li>
                  ))}
                </ul>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export default Animes

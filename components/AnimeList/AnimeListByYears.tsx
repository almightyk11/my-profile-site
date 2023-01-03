import { Accordion, Divider, Rating } from '@mantine/core'
import { AnimeListByYears } from 'interfaces/anime'
import React from 'react'

type AnimeListByYearsComponentProps = {
  animeListByYears: AnimeListByYears
}

export const AnimeListByYearsComponent = (props: AnimeListByYearsComponentProps) => {
  return (
    <Accordion variant='separated' disableChevronRotation>
      {props.animeListByYears.map((animeList) => (
        <Accordion.Item key={animeList.id} value={animeList.year}>
          <Accordion.Control>
            <p className='m-0 font-semibold text-[1rem]'>{animeList.year}</p>
          </Accordion.Control>
          <Accordion.Panel>
            <ul className='text-slate-600 '>
              {animeList.animes.map((anime, index) => (
                <div key={anime.id}>
                  <li className='flex justify-between my-1.5'>
                    <span className='w-3/4'>{anime.title}</span>
                    {anime.rating ? <Rating count={3} value={anime.rating} className='1/4' /> : ''}
                  </li>
                  {index === animeList.animes.length - 1 ? (
                    ''
                  ) : (
                    <Divider my='sm' variant='dashed' />
                  )}
                </div>
              ))}
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

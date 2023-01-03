import { Divider, Paper, Rating } from '@mantine/core'
import Anime from 'interfaces/anime'
import React from 'react'

type SortedAnimeListComponentProps = {
  sortedAnimeList: Anime[]
}

export const SortedAnimeListComponent = (props: SortedAnimeListComponentProps) => {
  return (
    <Paper shadow='xs' p='md'>
      <ul className='text-slate-600 '>
        {props.sortedAnimeList.map((anime, index) => (
          <div key={anime.id}>
            <li className='flex justify-between my-1.5'>
              <span className='w-3/4'>{`${anime.title}（${anime.year}年）`}</span>
              <Rating count={3} value={anime.rating} className='1/4' />
            </li>
            {index === props.sortedAnimeList.length - 1 ? '' : <Divider my='sm' variant='dashed' />}
          </div>
        ))}
      </ul>
    </Paper>
  )
}

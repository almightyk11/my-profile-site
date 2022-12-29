import { Select } from '@mantine/core'
import Movie from 'interfaces/movie'
import { useMemo, useState } from 'react'

import { MovieCard } from './MovieCard'

type MovieCardListProps = {
  movies: Movie[]
}

export const MovieCardList = (props: MovieCardListProps) => {
  const [searchValue, onSearchChange] = useState('全て')

  const filteredMovies = useMemo(
    () =>
      searchValue === '全て'
        ? props.movies
        : props.movies.filter((movie) => movie.category === searchValue),
    [props.movies, searchValue],
  )

  return (
    <div>
      <div className='flex justify-center'>
        <Select
          searchable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          defaultValue='全て'
          data={['全て', 'クラシック', 'アニメ', 'その他']}
          className='w-4/5 mb-5'
        />
      </div>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

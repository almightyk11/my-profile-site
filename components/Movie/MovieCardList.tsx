import { Select } from '@mantine/core'
import Movie from 'interfaces/movie'
import { useMemo, useState } from 'react'

import { MovieCard } from './MovieCard'

type MovieCardListProps = {
  movies: Movie[] | undefined
}

export const MovieCardList = (props: MovieCardListProps) => {
  const [searchValue, onSearchChange] = useState('全て')

  const filteredMovies = useMemo(() => {
    if (!props.movies) return []
    return searchValue === '全て'
      ? props.movies
      : props.movies.filter((movie) => movie.category === searchValue)
  }, [props.movies, searchValue])

  return (
    <div>
      <Select
        searchable
        onSearchChange={onSearchChange}
        searchValue={searchValue}
        defaultValue='全て'
        data={['全て', 'クラシック', 'アニメ', 'その他']}
        className='mb-5'
        classNames={{ input: 'text-[1rem]' }}
      />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

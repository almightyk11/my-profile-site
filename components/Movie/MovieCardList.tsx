import Movie from 'interfaces/movie'

import { MovieCard } from './MovieCard'

type MovieCardListProps = {
  movies: Movie[]
}

export const MovieCardList = (props: MovieCardListProps) => {
  return (
    <>
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  )
}

import { Badge, Card } from '@mantine/core'
import Movie from 'interfaces/movie'
import { useMemo } from 'react'
import ReactPlayer from 'react-player'

type MovieCardProps = {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const badgeColor = useMemo(() => {
    if (props.movie.category === 'クラシック') return 'pink'
    if (props.movie.category === 'アニメ') return 'green'
    return 'blue'
  }, [props.movie.category])
  return (
    <Card shadow='sm' radius='md' withBorder className='mb-5'>
      <Card.Section>
        <ReactPlayer url={props.movie.url} width='100%' controls />
      </Card.Section>
      <p className='mt-4 mb-0 font-semibold'>{props.movie.title}</p>
      <div className='flex justify-between mt-2 mb-1'>
        <p className='my-0 text-sm text-slate-600'>{props.movie.creator}</p>
        <Badge color={badgeColor} variant='light'>
          {props.movie.category}
        </Badge>
      </div>
    </Card>
  )
}

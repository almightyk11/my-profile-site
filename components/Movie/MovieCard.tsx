import { Badge, Card } from '@mantine/core'
import Movie from 'interfaces/movie'
import ReactPlayer from 'react-player'

type MovieCardProps = {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <Card shadow='sm' radius='md' withBorder className='mb-5'>
      <Card.Section>
        <ReactPlayer url={props.movie.url} width='100%' controls />
      </Card.Section>
      <p className='mt-4 mb-0 font-semibold'>{props.movie.title}</p>
      <div className='flex justify-between mt-2 mb-1'>
        <p className='my-0 text-sm text-slate-600'>{props.movie.creator}</p>
        <Badge color={props.movie.category === 'クラシック' ? 'pink' : 'green'} variant='light'>
          {props.movie.category}
        </Badge>
      </div>
    </Card>
  )
}

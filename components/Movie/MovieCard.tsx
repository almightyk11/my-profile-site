import { Badge, Card, Modal } from '@mantine/core'
import Movie from 'interfaces/movie'
import { useMemo, useState } from 'react'
import { IconContext } from 'react-icons'
import { AiFillPlayCircle } from 'react-icons/ai'
import ReactPlayer from 'react-player'

type MovieCardProps = {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const [opened, setOpened] = useState(false)

  const badgeColor = useMemo(() => {
    if (props.movie.category === 'クラシック') return 'pink'
    if (props.movie.category === 'アニメ') return 'green'
    return 'blue'
  }, [props.movie.category])
  return (
    <Card
      shadow='sm'
      radius='md'
      withBorder
      className='mb-5 cursor-pointer hover:bg-slate-100 '
      onClick={() => setOpened(true)}
    >
      <div className='flex content-center justify-between '>
        <div className='w-5/6'>
          <p className='my-0 font-semibold '>{props.movie.title}</p>
          <div className='flex items-center justify-between mt-2'>
            <p className='my-0 text-sm text-slate-600'>{props.movie.creator}</p>
            <Badge color={badgeColor} variant='light'>
              {props.movie.category}
            </Badge>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <IconContext.Provider value={{ color: '#f97316', size: '2rem' }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        title={props.movie.title}
        classNames={{ title: 'font-semibold' }}
      >
        <ReactPlayer url={props.movie.url} width='100%' controls />
      </Modal>
    </Card>
  )
}

import { Container } from '@mantine/core'
import { MovieCardList } from 'components/Movie'
import { mockMovies } from 'mock/movies'

// SG（動画取得処理で止まってするので一旦保留）
// export const getStaticProps: GetStaticProps<{ movies: Movie[] }> = async () => {
//   const movies: Movie[] = (await getMovies()) || []
//   return {
//     props: {
//       movies,
//     },
//   }
// }

// const Home = ({ movies }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Home = () => {
  return (
    <>
      {/* 演奏動画一覧 */}
      <section className='min-h-screen py-3 bg-slate-200'>
        <Container>
          <h2 className='text-xl text-center text-cyan-800'>演奏動画一覧</h2>
          <MovieCardList movies={mockMovies} />
        </Container>
      </section>
    </>
  )
}

// getStaticPropsでAPIから取得するようにする
export default Home

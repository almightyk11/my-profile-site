import request, { gql } from 'graphql-request'
import Movie from 'interfaces/movie'

const graphqlAPI = 'https://api-ap-northeast-1.hygraph.com/v2/clcebayic4q8w01uh5rzq3ho1/master'

export const getMovies = async () => {
  const query = gql`
    query Movies {
      movies(orderBy: publishedAt_DESC, first: 100) {
        id
        category
        creator
        title
        url
      }
    }
  `
  const result: { movies: Movie[] } = await request(graphqlAPI, query)
  return result.movies
}

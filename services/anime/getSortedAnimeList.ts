import request, { gql } from 'graphql-request'
import Anime from 'interfaces/anime'

const graphqlAPI = 'https://api-ap-northeast-1.hygraph.com/v2/clcebayic4q8w01uh5rzq3ho1/master'

export const getSortedAnimeList = async () => {
  const query = gql`
    query Anime {
      animes(where: { rating_gte: 2 }, first: 50) {
        id
        rating
        title
        year
      }
    }
  `
  const result: { animes: Anime[] } = await request(graphqlAPI, query)

  return result.animes
}

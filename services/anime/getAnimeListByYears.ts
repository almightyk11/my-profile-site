import request, { gql } from 'graphql-request'
import { AnimeListByYears } from 'interfaces/anime'

const graphqlAPI = 'https://api-ap-northeast-1.hygraph.com/v2/clcebayic4q8w01uh5rzq3ho1/master'

export const getAnimeListByYears = async () => {
  const query = gql`
    query AnimeListByYears {
      animeListByYears {
        id
        year
        animes {
          id
          title
          rating
        }
      }
    }
  `
  const result: { animeListByYears: AnimeListByYears } = await request(graphqlAPI, query)
  return result.animeListByYears
}

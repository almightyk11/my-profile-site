type Anime = {
  id: number
  rating: number
  title: string
  year: number
}

export type AnimeListByYears = {
  id: number
  animes: Anime[]
  year: string
}[]

export default Anime

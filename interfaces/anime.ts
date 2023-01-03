type Anime = {
  id: number
  rating: number
  title: string
}

export type AnimeListByYears = {
  id: number
  animes: Anime[]
  year: string
}[]

export default Anime

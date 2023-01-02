type Anime = {
  rating: number
  title: string
}

export type AnimeListByYears = {
  animes: Anime[]
  year: string
}[]

export default Anime

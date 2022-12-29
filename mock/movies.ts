import Movie from 'interfaces/movie'

// api作成までの間直書きで対応
export const movies: Movie[] = [
  {
    id: 1,
    category: 'クラシック',
    creator: 'ショパン',
    title: 'スケルツォ2番（冒頭）',
    url: 'https://youtu.be/G-837Uh9ZrY',
  },
  {
    id: 2,
    category: 'アニメ',
    creator: 'さユりさん',
    title: 'リコリス・リコイルED「花の塔」',
    url: 'https://youtube.com/shorts/lh7tpusy_Y8',
  },
  {
    id: 3,
    category: 'アニメ',
    creator: 'Official髭男dismさん',
    title: 'SPYxFAMILYのOP「ミックスナッツ」',
    url: 'https://youtube.com/shorts/kxOlq1ggmEw',
  },
  {
    id: 4,
    category: 'アニメ',
    creator: 'シェリル・ノーム',
    title: 'マクロスF「ダイアモンドクレバス」',
    url: 'https://youtu.be/LygA1VjQlBA',
  },
  {
    id: 5,
    category: 'クラシック',
    creator: 'ドビュッシー',
    title: '亜麻色の髪の乙女',
    url: 'https://youtu.be/9-F-1IOmHjQ',
  },
  {
    id: 6,
    category: 'その他',
    creator: 'ネオトウキョウクラブさん',
    title: '良質アップデート',
    url: 'https://youtu.be/FZm1tRu-E10',
  },
  {
    id: 7,
    category: 'クラシック',
    creator: 'ベートーヴェン',
    title: '熱情1楽章（冒頭）',
    url: 'https://youtu.be/2RzRt51hudI',
  },
  {
    id: 8,
    category: 'クラシック',
    creator: 'ドビュッシー',
    title: '月の光',
    url: 'https://youtu.be/-l_uHPp6OZ4',
  },
  {
    id: 9,
    category: 'クラシック',
    creator: 'ショパン',
    title: '幻想ポロネーズ',
    url: 'https://youtu.be/JjgXLsORnOQ',
  },
  {
    id: 10,
    category: 'その他',
    creator: '倖田來未さん',
    title: 'Moon Crying',
    url: 'https://youtu.be/GxqqHhIloxI',
  },
  {
    id: 11,
    category: 'アニメ',
    creator: 'YOASOBIさん',
    title: '機動戦士ガンダム水星の魔女op「祝福」',
    url: 'https://youtube.com/shorts/PkvyFmv2GRc?feature=share',
  },
  {
    id: 12,
    category: 'クラシック',
    creator: 'ベートーヴェン',
    title: '熱情3楽章(練習中)',
    url: 'https://youtube.com/shorts/Mxg8LfkHSBo',
  },
]

export const mockMovies: Movie[] = movies.sort((a, b) => b.id - a.id)

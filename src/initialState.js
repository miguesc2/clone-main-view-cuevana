const initialState = {
  firstCarousel: [
    {
      id: 1,
      image: "https://image.tmdb.org/t/p/w1280/egtcnLhyj2A56uLmmfYX2p73Eky.jpg",
      movieTitle: "La Liga de la Justicia de Zack Snyder",
      movieDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!"
    },
    {
      id: 2,
      image: "https://image.tmdb.org/t/p/w1280/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
      movieTitle: "Raya y el último Dragón",
      movieDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!"
    },
    {
      id: 3,
      image: "https://image.tmdb.org/t/p/w1280/fAJuZDEkrqmYQUUDrro8wRqb2Tn.jpg",
      movieTitle: "A todos los chicos: Para siempre",
      movieDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!"
    },
    {
      id: 4,
      image: "https://image.tmdb.org/t/p/w1280/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
      movieTitle: "Wonder Woman 1984 (La mujer maravilla 2)",
      movieDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!"
    },
    {
      id: 5,
      image: "https://image.tmdb.org/t/p/w1280/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
      movieTitle: "Godzilla vs Kong",
      movieDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!"
    }
  ],
  popucategory: [
    {
      id: 6,
      image: "https://cuevana3.io/wp-content/uploads/2021/04/the-walking-dead-71119-episode-22-season-10.jpg",
      movieTitle: "The Walking Dead",
      classNamesItem: "float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset"
    },
    {
      id: 7,
      image: "https://cuevana3.io/wp-content/uploads/2021/04/el-joven-sheldon-71104-episode-12-season-4.jpg",
      movieTitle: "El joven Sheldon",
      classNamesItem: "float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset"
    },
    {
      id: 8,
      image: "https://cuevana3.io/wp-content/uploads/2021/04/tell-me-your-secrets-71100-episode-7-season-1.jpg",
      movieTitle: "Tell Me Your Secrets",
      classNamesItem: "float-left d-none d-sm-block col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset"
    },
    {
      id: 9,
      image: "https://cuevana3.io/wp-content/uploads/2021/04/tell-me-your-secrets-71099-episode-6-season-1.jpg",
      movieTitle: "Tell Me Your Secrets II",
      classNamesItem: "float-left d-none d-lg-block col-lg-3 col-xl-3 text-reset"
    }
  ],
  onlineMovies: [
    {
      id: 10,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/love-under-the-olive-tree-40736-poster-200x300.jpg",
      movieTitleOnline: "Love Under the Oliver Tree"
    },
    {
      id: 11,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/girl-cops-40732-poster-210x300.jpg",
      movieTitleOnline: "Girl Cops"
    },
    {
      id: 12,
      classNamesOnline: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/el-verano-que-vivimos-40728-poster-200x300.jpg",
      movieTitleOnline: "El verano que  vivimos"
    },
    {
      id: 13,
      classNamesOnline: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/embrion-40725-poster-200x300.jpg",
      movieTitleOnline: "Embrión"
    },
  ],
  onlineMoviesRowTwo: [
    {
      id: 14,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2020/07/impetigore-31295-poster-202x300.jpg",
      movieTitleOnline: "Impetigore"
    },
    {
      id: 15,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/los-octonautas-y-el-cinturon-de-fuego-40717-poster-214x300.jpg",
      movieTitleOnline: "Los Octonautas y el Cinturon de Fuego"
    },
    {
      id: 16,
      classNamesOnline: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/bleed-40713-poster-203x300.jpg",
      movieTitleOnline: "Bleed"
    },
    {
      id: 17,
      classNamesOnline: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/free-byrd-40710-poster-200x300.jpg",
      movieTitleOnline: "Free Byrd"
    },
  ],
  onlineMoviesRowThree: [
    {
      id: 18,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/un-angel-en-nuestras-vidas-40707-poster-204x300.jpg",
      movieTitleOnline: "Un Angel en Nuestras Vidas"
    },
    {
      id: 19,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/dawn-of-the-beast-40704-poster-200x300.jpg",
      movieTitleOnline: "Dawn of the Beast"
    },
    {
      id: 20,
      classNamesOnline: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/miedo-a-volar-40700-poster-200x300.jpg",
      movieTitleOnline: "Miedo a Volar"
    },
    {
      id: 21,
      classNamesOnline: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/enfant-terrible-40696-poster-200x300.jpg",
      movieTitleOnline: "Enfant Terrible"
    },
  ],
  asideFlags: [
    {
      id: 22,
      classNamesItem: 'mr-4',
      image: "https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/latino.svg",
      nameFlag: 'FlagNotFound'
    },
    {
      id: 23,
      classNamesItem: 'mr-4',
      image: "https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/espana.svg",
      nameFlag: 'FlagNotFound'
    },
    {
      id: 24,
      classNamesItem: '',
      image: "https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/subti.svg",
      nameFlag: 'FlagNotFound'
    }
  ],
  asidePremieres: [
    {
      id: 25,
      image: "https://cuevana3.io/wp-content/uploads/2019/04/vengadores-endgame-13310-poster-100x100.jpg",
      namePremieres: "Avengers:Endgame / Vengadores 4"
    },
    {
      id: 26,
      image: "https://cuevana3.io/wp-content/uploads/2019/10/joker-21711-poster-100x100.jpg",
      namePremieres: "Joker"
    },
    {
      id: 27,
      image: "https://cuevana3.io/wp-content/uploads/2021/03/la-liga-de-la-justicia-de-zack-snyder-39793-poster-100x100.jpg",
      namePremieres: "Liga de la Justicia de Zack Snyder"
    },
  ],
  onlineSeries: [
    {
      id: 28,
      classNamesOnlineS: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/earth-at-night-in-color-41035-poster-200x300.jpg",
      movieTitle: "Earth at Night in Color"
    },
    {
      id: 29,
      classNamesOnlineS: "float-left d-none d-sm-block col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/big-shot-40978-poster-200x300.jpg",
      movieTitle: "Big Shoot"
    },
    {
      id: 30,
      classNamesOnlineS: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/kung-fu-40963-poster-200x300.jpg",
      movieTitle: "Kung Fu"
    },
    {
      id: 31,
      classNamesOnlineS: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://cuevana3.io/wp-content/uploads/2021/04/atlantic-crossing-40948-poster-200x300.jpg",
      movieTitle: "Atlantic Crossing"
    },

  ]
}

export default initialState
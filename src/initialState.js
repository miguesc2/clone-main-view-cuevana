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
      image: "https://ww3.cuevana.pro/resize/200/storage/24926/sVDzVWEnjWgGlHEUrYxvfu7Vz8WTcTvlNyoiU3QJ.jpg",
      movieTitle: "Doctor Strange en el multiverso de la locura",
      classNamesItem: "float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset"
    },
    {
      id: 7,
      image: "https://ww3.cuevana.pro/resize/200/storage/36713/tjhuspxvcQr9XpRVXh6sxyHS4qdbZFsh0YUMunb3.jpg",
      movieTitle: "Lightyear",
      classNamesItem: "float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset"
    },
    {
      id: 8,
      image: "https://ww3.cuevana.pro/resize/200/storage/33380/92D77KV0QPr10oVaKV3ncZuNCOYYXJYzhALfmIW2.jpg",
      movieTitle: "Jurassic World: Dominion",
      classNamesItem: "float-left d-none d-sm-block col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset"
    },
    {
      id: 9,
      image: "https://ww3.cuevana.pro/resize/200/storage/28977/r242bW0C88WY9ocUxZT13xdA4X5Cx5YzvfpGfSRI.jpg",
      movieTitle: "El milagro del padre Stu",
      classNamesItem: "float-left d-none d-lg-block col-lg-3 col-xl-3 text-reset"
    }
  ],
  onlineMovies: [
    {
      id: 10,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38034/fVyZ9Th4sOxLLLFtJBdzwhiVL45F1OG8sbrg3Z2y.jpg",
      movieTitleOnline: "Doula"
    },
    {
      id: 11,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38032/gNzzjFW5altf5BceyN04mLh09wKSROXoZRxBAHiV.jpg",
      movieTitleOnline: "A Olivia"
    },
    {
      id: 12,
      classNamesOnline: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38013/TB3KffpjCEXlOFfJ7d7BcY3OUQhzLV26iXvtF8Ce.jpg",
      movieTitleOnline: "Ben Crump: El abogado de los afroamericanos"
    },
    {
      id: 13,
      classNamesOnline: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38011/WvFxwCmeDXtEvC5LVAAX7CEFdoqFSmP22UrpWbML.jpg",
      movieTitleOnline: "Directamente para video"
    },
  ],
  onlineMoviesRowTwo: [
    {
      id: 14,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38008/i6vIbGemZh47RetzDna63gvDkKTEhdkUUyNEejhz.jpg",
      movieTitleOnline: "Condena de amor"
    },
    {
      id: 15,
      classNamesOnline: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38006/V7Zjb4sWV0CjcBMkPBnYDW3lT9slp4EsiMUNuxQK.jpg",
      movieTitleOnline: "First Love"
    },
    {
      id: 16,
      classNamesOnline: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38004/TfRVVJkdorozS5B6MdXGHFzpfs5xoEKsXl5GYhFN.jpg",
      movieTitleOnline: "Gracia y coraje"
    },
    {
      id: 17,
      classNamesOnline: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38002/cinLNRnEK28CfD8RT01u1LrKSXifcRJjbYyF7ZYK.jpg",
      movieTitleOnline: "La Vida en el Silencio"
    },
  ],
  asidePremieres: [
    {
      id: 25,
      image: "https://ww3.cuevana.pro/resize/200/storage/24926/sVDzVWEnjWgGlHEUrYxvfu7Vz8WTcTvlNyoiU3QJ.jpg",
      namePremieres: "Doctor Strange en el multiverso de la locura",
    },
    {
      id: 26,
      image: "https://ww3.cuevana.pro/resize/200/storage/36713/tjhuspxvcQr9XpRVXh6sxyHS4qdbZFsh0YUMunb3.jpg",
      namePremieres: "Lightyear",
    },
    {
      id: 27,
      image: "https://ww3.cuevana.pro/resize/200/storage/33380/92D77KV0QPr10oVaKV3ncZuNCOYYXJYzhALfmIW2.jpg",
      namePremieres: "Jurassic World: Dominion",
    },
  ],
  onlineSeries: [
    {
      id: 28,
      classNamesOnlineS: "float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38090/gZ7vcEKeFfRLFxuBr2tPyBotPaowymnof8zQL82R.jpg",
      movieTitle: "La Casa de Papel: Corea"
    },
    {
      id: 29,
      classNamesOnlineS: "float-left d-none d-sm-block col-12 col-sm-6 col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/33376/mxzG0OR4jK1XhdTgxzV5vesvjYyp2OCOgd8iWPIS.jpg",
      movieTitle: "The Boys"
    },
    {
      id: 30,
      classNamesOnlineS: "float-left d-none d-md-block col-md-4 col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/38021/sPPkotNMaLXhSMXrEDZXhaskRU8utY4UO1rc7rfV.jpg",
      movieTitle: "Siempre fui yo"
    },
    {
      id: 31,
      classNamesOnlineS: "float-left d-none d-lg-block col-lg-3 text-reset",
      image: "https://ww3.cuevana.pro/resize/200/storage/37960/LQwNnEVQaXUUtDEuajBnXADCVzVyqjffAKo9w8Nz.jpg",
      movieTitle: "Motherland: Fort Salem"
    },

  ]
}

export default initialState
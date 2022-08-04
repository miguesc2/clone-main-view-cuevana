import React from 'react'
import '../../assets/styless/CarouselPopular.scss'

const PeliculasOnlineOne = ({ onlineMovies }) => (
  <div className='pOnline text-center'>
    { onlineMovies.map( item => 
      <a key={ item.id } href='#x' className={ item.classNamesOnline }>
        <img src={ item.image } alt={ item.movieTitleOnline } />
        <p className='mx-auto'>{item.movieTitleOnline}</p>
      </a>
    )}
  </div>
)

export default PeliculasOnlineOne;

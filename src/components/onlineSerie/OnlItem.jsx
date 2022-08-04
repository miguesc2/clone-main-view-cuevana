import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const OnlItem = ({ onlineSeries }) => (
  <>
    { onlineSeries.map(( item ) =>
      <a href='#x' key={ item.id } className={ item.classNamesOnlineS }>
        <img src={ item.image } alt={ item.movieTitle } />
        <p className='mb-0'>{ item.movieTitle }</p>
        <p className='seasonOne'>Temporadas</p>
      </a>
    )}  
  </>
)

export default OnlItem
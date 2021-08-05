import React from 'react'
import '../assets/styless/PopularCategories.scss'

function PopularCategorItem(props) {
  const { image, movieTitle, classNamesItem } = props
  return (
    <a href='/' className={classNamesItem}>
      <img className='imgMoreWidth' src={ image } alt={ movieTitle } />
      <p className='text-center'>{ movieTitle }</p>
    </a>
  )
}

export default PopularCategorItem

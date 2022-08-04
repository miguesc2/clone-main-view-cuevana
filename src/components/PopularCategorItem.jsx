import React from 'react'
import '../assets/styless/PopularCategories.scss'

const PopularCategorItem = ({ image, movieTitle, classNamesItem }) => (
  <a href='#x' className={ classNamesItem }>
    <img className='imgMoreWidth' src={ image } alt={ movieTitle } />
    <p className='text-center'>{ movieTitle }</p>
  </a>
)

export default PopularCategorItem

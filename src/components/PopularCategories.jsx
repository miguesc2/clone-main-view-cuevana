import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import PopularCategorItem from './PopularCategorItem';
import '../assets/styless/PopularCategories.scss'

const PopularCategories = ({ popucategory }) => (
  <div className='row'>
    <div className='col-12 col-sm-6 mt-4 text-center text-sm-left mb-sm-0'>
      <h3 className='font-weight-bold'>Categorías Populares</h3>
    </div>
    
    <div className='col-12 text-center col-sm-6 mt-0 mt-sm-4 mb-3 text-right'>
      <a href='#x' className='text-reset btn btn-primary btnRegisterTwo'>VER MAS SERIES</a>
    </div>

    <Carousel className='secondCarousel mb-5 w-100'>
      <Carousel.Item>
        { popucategory.map(item => <PopularCategorItem key={ item.id } { ...item } /> ) }
      </Carousel.Item>
      
      <Carousel.Item>
        { popucategory.map(item => <PopularCategorItem key={ item.id } { ...item } />) }
      </Carousel.Item>
    </Carousel>
  </div>
)

export default PopularCategories;

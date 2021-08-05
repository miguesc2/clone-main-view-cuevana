import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styless/CarouselOne.scss';

const CarouselOne = ({firstCarousel}) => {
    return (
      <Carousel className='principalCarousel vhh-50'>
        {firstCarousel.map(items =>
          <Carousel.Item key={items.id}>
          <img
            src={items.image}
            alt={items.movieTitle}
            className='d-block imgCarouselOne w-100'
          />
          <Carousel.Caption>
            <div className='text-left col-12 vh-50 mx-auto'>
              <h1 className='mb-3'>{items.movieTitle}</h1>
              <p className='d-none d-sm-block'>{items.movieDescription}</p>
              <button type='button' className='btn btn-primary btnRegisterO'>
                Ver Película
                <a href='/'>
                  <img src='https://i.ibb.co/HNh0gM4/playarrow.png' className='playIcon' alt='NotFound' />
                </a>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        )}            
    </Carousel>
  );
}

const mapStateToProps = state => {
  return {
    firstCarousel: state.firstCarousel
  }
}

export default connect(mapStateToProps, null)(CarouselOne);

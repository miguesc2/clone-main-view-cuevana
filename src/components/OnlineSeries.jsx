import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../assets/styless/OnlineSeries.scss';

export class OnlineSeries extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row col-12 col-xl-9 justify-content-center float-left'>
          <div className='col-sm-12 col-lg-4 mt-4 text-center text-sm-left'>
            <h3 className='font-weight-bold'>Series Online</h3>
          </div>

          <div className='d-none d-sm-block col-sm-12 col-lg-8 menuMovieOnline mt-2 mt-lg-4 mb-4 mb-lg-0'>
            <a href='/' className='d-inline text-reset font-weight-bold mr-4'>ÚLTIMAS</a>
            <a href='/' className='d-inline text-reset font-weight-bold mr-4'>ESTRENOS</a>
            <a href='/' className='d-inline text-reset font-weight-bold mr-4'>RANKING</a>
            <a href='/' className='d-inline text-reset font-weight-bold '>MAS VISTAS</a>
          </div>

          <Carousel className='float-left w-100 text-center thirdCarousel'>
            <Carousel.Item className='pOnlineTwo'>
              <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/earth-at-night-in-color-41035-poster-200x300.jpg' alt='' />
                <p className='mb-0'>Earth at Night in Color</p>
                <p className='seasonOne'>Temporadas</p>
              </a>

              <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/big-shot-40978-poster-200x300.jpg' alt='' />
                <p className='mb-0'>Big Shoot</p>
                <p className='seasonOne'>Temporadas</p>
              </a>

              <a href='/' className='float-left d-none d-md-block col-md-4 col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/kung-fu-40963-poster-200x300.jpg' alt='' />
                <p className='mb-0'>Kung Fu</p>
                <p className='seasonOne'>Temporadas</p>
              </a>

              <a href='/' className='float-left d-none d-lg-block col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/atlantic-crossing-40948-poster-200x300.jpg' alt='' />
                <p className='mb-0'>Atlantic Crossing</p>
                <p className='seasonOne'>Temporadas</p>
              </a>
            </Carousel.Item>
            <Carousel.Item className='pOnlineTwo'>
              <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/earth-at-night-in-color-41035-poster-200x300.jpg' alt='' />
                <p className='mb-0'>Earth at Night in Color</p>
                <p className='seasonOne'>Temporadas</p>
              </a>

              <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/big-shot-40978-poster-200x300.jpg' alt='' />
                <p className='mb-0'>Big Shoot</p>
                <p className='seasonOne'>Temporadas</p>
              </a>

              <a href='/' className='float-left d-none d-md-block col-md-4 col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/kung-fu-40963-poster-200x300.jpg' alt='' />
                <p className='text-center mb-0'>Kung Fu</p>
                <p className='text-center seasonOne'>Temporadas</p>
              </a>

              <a href='/' className='float-left d-none d-lg-block col-lg-3 text-reset'>
                <img src='https://cuevana3.io/wp-content/uploads/2021/04/atlantic-crossing-40948-poster-200x300.jpg' alt='' />
                <p className='text-center mb-0'>Atlantic Crossing</p>
                <p className='text-center seasonOne'>Temporadas</p>
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default OnlineSeries;

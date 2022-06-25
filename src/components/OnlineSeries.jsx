import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../assets/styless/OnlineSeries.scss';
import { connect } from 'react-redux';

function OnlineSeries({ onlineSeries }) {
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
            {onlineSeries.map((item, index) =>
              <a href='/' key={ index } className={ item.classNamesOnlineS }>
                <img src={ item.image } alt={ item.movieTitle } />
                <p className='mb-0'>{ item.movieTitle }</p>
                <p className='seasonOne'>Temporadas</p>
              </a>
            )}  
          </Carousel.Item>
          <Carousel.Item className='pOnlineTwo'>
            {onlineSeries.map((item, index) =>
              <a href='/' key={ index } className={ item.classNamesOnlineS }>
                <img src={ item.image } alt={ item.movieTitle } />
                <p className='mb-0'>{ item.movieTitle }</p>
                <p className='seasonOne'>Temporadas</p>
              </a>
            )}  
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    onlineSeries: state.onlineSeries
  }
}

export default connect(mapStateToProps)(OnlineSeries);

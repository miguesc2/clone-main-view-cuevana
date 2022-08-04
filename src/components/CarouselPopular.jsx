import React from 'react';
import { connect } from 'react-redux';
import AsidePremieres from './aside/AsidePremieres';
import PeliculaOne from './peliculasOnline/PeliculaOne';
import PopularCategories from './PopularCategories';
import '../assets/styless/CarouselPopular.scss';

const CarouselPopular = ({ popucategory, onlineMovies, asidePremieres }) => (
  <div className='container'>
    <div className='row col-12 col-xl-9 justify-content-center float-left'>
      <PopularCategories popucategory={ popucategory } />
      
      <div className='col-sm-12 col-lg-4 mt-4 text-center text-sm-left'>
        <h3 className='font-weight-bold'>Películas Online</h3>
      </div>

      <div className='d-none d-sm-block col-sm-12 col-lg-8 menuMovieOnline mt-2 mt-lg-4 mb-4 mb-lg-0'>
        <a href='#x' className='d-inline text-reset font-weight-bold mr-4'>ÚLTIMAS</a>
        <a href='#x' className='d-inline text-reset font-weight-bold mr-4'>ESTRENOS</a>
        <a href='#x' className='d-inline text-reset font-weight-bold mr-4'>RANKING</a>
        <a href='#x' className='d-inline text-reset font-weight-bold'>MAS VISTAS</a>
      </div>

      <PeliculaOne onlineMovies={ onlineMovies } />
      <PeliculaOne onlineMovies={ onlineMovies } />
    </div>

    <div className='row d-none d-sm-block col-sm-12 col-xl-3 float-xl-left mt-4 ml-3'>
      <div className='col-12 col-md-6 col-xl-12'>
        <p className='alignCenterObjects mt-5' id='alignCenterObjectsId'><small>TOP ESTRENOS</small></p>
      </div>

      <AsidePremieres asidePremieres={ asidePremieres } />
    </div>
  </div>
)

const mapStateToProps = state => { 
  return { 
    asidePremieres: state.asidePremieres,
    onlineMovies: state.onlineMovies,
    popucategory: state.popucategory
  } 
}

export default connect( mapStateToProps )(CarouselPopular);
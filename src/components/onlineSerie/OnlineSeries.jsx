import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import OnlItem from './OnlItem';
import '../../assets/styless/OnlineSeries.scss';

const OnlineSeries = ({ onlineSeries }) => (
  <div className='container'>
    <div className='row col-12 col-xl-9 justify-content-center float-left'>
      <div className='col-sm-12 col-lg-4 mt-4 text-center text-sm-left'>
        <h3 className='font-weight-bold'>Series Online</h3>
      </div>

      <div className='d-none d-sm-block col-sm-12 col-lg-8 menuMovieOnline mt-2 mt-lg-4 mb-4 mb-lg-0'>
        <a href='#x' className='d-inline text-reset font-weight-bold mr-4'>ÚLTIMAS</a>
        <a href='#x' className='d-inline text-reset font-weight-bold mr-4'>ESTRENOS</a>
        <a href='#x' className='d-inline text-reset font-weight-bold mr-4'>RANKING</a>
        <a href='#x' className='d-inline text-reset font-weight-bold '>MAS VISTAS</a>
      </div>
      
      <Carousel className='float-left w-100 text-center thirdCarousel'>
        <Carousel.Item className='pOnlineTwo'><OnlItem onlineSeries={ onlineSeries } /></Carousel.Item>
        <Carousel.Item className='pOnlineTwo'><OnlItem onlineSeries={ onlineSeries } /></Carousel.Item>
      </Carousel>
    </div>
  </div>
)

const mapStateToProps = (state) => ({ onlineSeries: state.onlineSeries })
export default connect(mapStateToProps)(OnlineSeries);

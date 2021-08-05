import React from 'react'
import { connect } from 'react-redux'
import '../../assets/styless/CarouselPopular.scss'

function PeliculasOnlineThree({ onlineMoviesRowThree }) {
  return (
    <div className='pOnline text-center'>
      {onlineMoviesRowThree.map(item =>
        <a key={item.id} href='/' className={item.classNamesOnline}>
          <img src={item.image} alt={item.movieTitleOnline} />
          <p className='mx-auto'>{item.movieTitleOnline}</p>
        </a>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    onlineMoviesRowThree: state.onlineMoviesRowThree,
  }
}

export default connect(mapStateToProps, null)(PeliculasOnlineThree)

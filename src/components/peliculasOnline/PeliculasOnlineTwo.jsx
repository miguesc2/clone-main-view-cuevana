import React from 'react'
import { connect } from 'react-redux'
import '../../assets/styless/CarouselPopular.scss'

function PeliculasOnlineTwo({ onlineMoviesRowTwo }) {
  return (
    <div className='pOnline text-center'>
      {onlineMoviesRowTwo.map(item =>
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
    onlineMoviesRowTwo: state.onlineMoviesRowTwo,
  }
}

export default connect(mapStateToProps, null)(PeliculasOnlineTwo)

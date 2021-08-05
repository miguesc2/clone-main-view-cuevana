import React from 'react'
import { connect } from 'react-redux'
import '../../assets/styless/CarouselPopular.scss'

function PeliculasOnlineOne({ onlineMovies }) {
  return (
    <div className='pOnline text-center'>
      {onlineMovies.map(item => 
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
    onlineMovies: state.onlineMovies,
  }
}

export default connect(mapStateToProps, null)(PeliculasOnlineOne)

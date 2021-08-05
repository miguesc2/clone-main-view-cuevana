import React from 'react'
import { connect } from 'react-redux'

function AsidePremieres({ asidePremieres }) {
  return (
    <div className='col-12 w-100 col-md-6 col-xl-12 mt-3 sectionRight'>
      {asidePremieres.map(item => 
        <div key={item.id}>
          <img className='float-left' src={item.image} alt={item.namePremieres} />
          <p className='float-left col-6'>{item.namePremieres}</p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    asidePremieres: state.asidePremieres
  }
}

export default connect(mapStateToProps, null)(AsidePremieres)

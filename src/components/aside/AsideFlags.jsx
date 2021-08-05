import React from 'react'
import { connect } from 'react-redux'

function Aside({ asideFlags }) {
  return (
    <div className='alignCenterObjects mt-4'>
      {asideFlags.map(item =>
        <a key={item.id} href='/' className={item.classNamesItem}><img src={item.image} alt={item.nameFlag} /></a>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    asideFlags: state.asideFlags
  }
}

export default connect(mapStateToProps, null)(Aside)

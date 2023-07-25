import React from 'react'
import Banner from './Banner/Banner'
import Item from './Item/Item'

const Body = () => {
  return (
    <div className='container' style={{background: "#d7f8ff"}}>
      <Banner />
      <Item />
    </div>
  )
}

export default Body
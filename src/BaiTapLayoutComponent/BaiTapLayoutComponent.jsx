import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Body from './Body/Body'

const BaiTapLayoutComponent = () => {
  return (
    <div className='container mt-5'>
        <h1 className='badge rounded-pill text-bg-danger fs-1'>Bài Tập Layout_Component</h1>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default BaiTapLayoutComponent
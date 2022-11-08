import React from 'react'
import './Error.css'
import card from '../../images/img404.png'
import logo1 from '../../images/logo.png'
import logo2 from '../../images/logo-ver.png'

function Error() {
  return (
    <>
    <div className='complete'>
        <img className='mail' src={card} alt="" />
        <p>Page not found</p>
        <button className="backbtn">back</button>
    </div>
        <img className="logo-inc" src={logo1} alt="" />
        <img className="logo-ver" src={logo2} alt="" />
    </>
  )
}

export default Error

import React from 'react'
import card from '../../images/mail-img-1.png'
import './EmailVerify.css'
import logo1 from '../../images/logo.png'
import logo2 from '../../images/logo-ver.png'

function EmialVerify() {
  return (
    <>
    <div className='complete'>
        <img className='mail' src={card} alt="" />
        <h1>EMAIL VERIFIED</h1>
        <p>Your Email address was successfully verified</p>
        <button className="backbtn">back</button>
    </div>
        <img className="logo-inc" src={logo1} alt="" />
        <img className="logo-ver" src={logo2} alt="" />
    </>
  )
}

export default EmialVerify;

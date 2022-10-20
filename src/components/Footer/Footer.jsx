import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>

            <div className="footer-content-left">
                <div className="location-content">
                    <i className="location-icon fa-solid fa-location-dot"></i>
                    <a href="https://www.google.com/maps/place/DIT+University/@30.4001975,78.0764025,17z/data=!3m1!4b1!4m5!3m4!1s0x3908d70603f128a5:0x359bb8f9c7797984!8m2!3d30.4001975!4d78.0789774" target="_blank" rel="noopener noreferrer"><h5>DIT UNIVERSITY,</h5>
                        <h2>Mussoorie - Diversion Road, Village Makkawala,</h2>
                        <h2>Dehradun, Uttarakhand -248009,India</h2></a>
                </div>
                <div className="call-content">
                    <i class="call-icon fa-solid fa-phone"></i>
                    <a href="tel:1800121041000"target="_blank" rel="noopener noreferrer"><h3>1800121041000</h3></a>
                </div>

            </div>
            <div className="footer-content-right">
                <div className="download-app">
                    <a href="/#"><h3>Download Our App:</h3></a>
                    <img src={require('../../images/footer-assets/googleplay-icon.png')} alt="" />
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/school/dit-university/" target="_blank" rel="noopener noreferrer"><img src={require('../../images/footer-assets/linkedin-icon.png')} alt="" /></a>
                    <a href="https://www.instagram.com/dituniversity/" target="_blank" rel="noopener noreferrer"><img src={require('../../images/footer-assets/instagram-icon.png')} alt="" /></a>
                    <a href="https://www.facebook.com/DITUniversity.edu" target="_blank" rel="noopener noreferrer"><img src={require('../../images/footer-assets/facebook-icon.png')} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCUibKytzSf4QnOCZfcZW3fw/" target="_blank" rel="noopener noreferrer"><img src={require('../../images/footer-assets/youtube-icon.png')} alt="" /></a>
                

                </div>
            </div>
        </div>
    )
}

export default Footer

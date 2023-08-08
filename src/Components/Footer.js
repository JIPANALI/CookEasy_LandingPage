import React from 'react'

import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Logo from "../Components/asset_Cook/logo.png"
const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <div className='footer-section-one'>
        <div className='footer-logo-container'>
            <img src={Logo} alt=''/>

        </div>
        <div className='footer-icons'>
            <BsFacebook/>
            <BsTwitter/>
            <BsLinkedin/>
            <BsInstagram/>
            <BsYoutube/>
        </div>

    </div>

    <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
            <span>Testimonals</span>
            <span>Work</span>
        </div>
        <div className='footer-section-columns'>
            <span>9080#####63</span>
            <span>help@food</span>
            <span>contact@food</span>
            <span>Press@food</span>

        </div>
        <div className='footer-section-columns'>
            <span>Terms & Conditions</span>
            <span>Privacy & Policy</span>
        </div>
    </div>

    </div>
  )
}

export default Footer
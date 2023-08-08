import React from 'react'
import AboutBackGround from "../Components/asset_Cook/about-background.png"
import AboutBackGroundImage from "../Components/asset_Cook/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackGround} alt=''/>
        </div>

        <div className='about-section-image-container'>
                <img src={AboutBackGroundImage} alt=''/>

        </div>

        <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>
            Food is Very Important for Balance Diet.
        </h1>
        <p className='primary-text'>
            If you do daily maintain your balance diet in your food you can build a healthy body.
        </p>

        <p className='primary-text'>
                gjgjghjgjghjgjgjgjmgjgjghjgjgjgjjyryffhyryjrugvjjgfmhyfgmjhjgjmgjm
                hjgjhgjhgj,gkkbjjgugb,kbkjbkjnkjbk.

        </p>

        <div className='about-buttons-container'>
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>
                {" "}
            <BsFillPlayCircleFill/> Watch video
            </button>

        </div>

        </div>

    </div>
  )
}

export default About
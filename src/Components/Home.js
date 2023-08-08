import React from 'react'
import Navbar from './Navbar'
import BannerBackGround from "../Components/asset_Cook/home-banner-background.png"
import BannerImage from "../Components/asset_Cook/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackGround}alt=''/>

            </div>


            <div className='home-text-section'>
              <h1 className='primary-heading'>
                Your Favourite Food at your Door Step

              </h1>

              <p className='primary-text'>
                Healthy foods make Healthy Body. Now It's your Turn.
                You can Cook a fresh Food. Your can order from Here. We will delevery in 10 min for your
                 needy Things.

                 This Company comming very soon to you.
                 For Notifying please fill the email and get Notify.
              </p>

              <button className='secondary-button'>
                 Order Now <FiArrowRight/>

              </button>
            </div>

            <div className='home-image-container'>
                <img src={BannerImage} alt=''/>

            </div>


        </div>

    </div>
  )
}

export default Home
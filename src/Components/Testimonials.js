import React from 'react'
import ProfProfilePic from "../Components/asset_Cook/demopic.jpg"
import {AiFillStar} from "react-icons/ai"


const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'> Testimonial</p>
            <h1 className='primary-heading'>
                    What they are saying about it.
             </h1>
             <p className='primary-text'>
                loream jgjbbcjgdsj,hgkfhskhfk.hsdkfkhdsk.fhk.shdlfhlskdhf.
                fdshfkhsd,nfkhsdkfhksnd,fnkshdkfhskfkhskdyfshdnfkshkysf

             </p>


        </div>
        <div className='testimonial-section-bottom'>
                <img src={ProfProfilePic}  width={250} height={250} alt=''/>
                <p>
                    Loream hjgdjgjsjgjsgjbjsgjgfjsgjfsgfjgskjgfdsgkfgdskgfk.
                    
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>

                </div>
                <h2>Jipan Ali</h2>
        </div>

    </div>
  )
}

export default Testimonials
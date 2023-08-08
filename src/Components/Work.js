import React from 'react'

import PickMeals from "../Components/asset_Cook/pick-meals-image.png"
import ChooseMeals from "../Components/asset_Cook/choose-image.png"
import DeliveryMeals from "../Components/asset_Cook/delivery-image.png"

const Work = () => {

    const infoWorkData=[
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"jkhdkkxkjkhkknxkjjxhzkzkcn,nkhclkckhk,c ,xmbckhxkn,xn,nkxnknxxnxn",
        },
        {
            image:ChooseMeals,
            title:"Choose Meals",
            text:"jkhdkkxkjkhkknxkjjxhzkzkcn,nkhclkckhk,c ,xmbckhxkn,xn,nkxnknxxnxn",
        },
        {
            image:DeliveryMeals,
            title:"Delivery Meals",
            text:"jkhdkkxkjkhkknxkjjxhzkzkcn,nkhclkckhk,c ,xmbckhxkn,xn,nkxnknxxnxn",
        },

    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
                <p className='primary-subheading'> Work</p>
                <h1 className='primary-heading'>How It Works</h1>
                <p className='primary-text'>
                    loreamkjdsjsdjnsdjncsnc,hskdnkchdsk.hkcsdkhckhsdkhckhsdk.hclshdk
                    dsjsdnkhkchlsncdhscdshcdddddddddddddddddddd
                </p>
                <div className='work-section-bottom'>
                    {
                        infoWorkData.map((item)=>(
                            <div className='work-section-info'>
                                <div className='info-boxes-img-container'>
                                    <img src={item.image} alt=''/>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>

                            </div>
                        ))
                    }

                </div>

        </div>

    </div>
  )
}

export default Work
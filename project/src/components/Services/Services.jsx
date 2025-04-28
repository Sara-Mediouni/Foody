import React from 'react'
import './Services.css'
import highquality from '../../assets/high-quality.png'
import expressdelivery from '../../assets/express-delivery.png'
import easyorder from '../../assets/list-items.png'
import indian from '../../assets/header.png'
const Services = () => {
  return (
    <div className='Services'>
        <div className='Services-content'>
         <div className='service'>
            <div className='icon-container'><img src={easyorder}/></div> 
           <h2>Easy to order</h2>
            <p>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
            </p>
         </div>
         <div className='service'>

           <div className='icon-container'> <img src={expressdelivery}/></div>
            <h2>Fast Delivery</h2>
            <p>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
            </p>
         </div>
         <div className='service'>
            <div className='icon-container'>
            <img src={highquality}/></div>
            <h2>Best quality</h2>
            <p>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
            </p>
           
         </div>
        
        </div> 
    </div>
  )
}

export default Services
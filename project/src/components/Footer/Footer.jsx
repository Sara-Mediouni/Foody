import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import logo from '../../assets/Foody-Logo.svg.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer' id="footer">
     <div className='footer-content'>
      <div className='footer-content-left'>
       <img src={logo} alt=""/>
       <p >
        Food Delivery App is a food delivery service that brings your favorite meals right to your doorstep. Enjoy delicious food from local restaurants with just a few clicks. Fast, convenient, and reliable delivery at your fingertips.
       <div className='footer-social-icons'>
       <span><FaFacebook color="#c1121f" size={30}/> </span>
       <span><IoLogoTwitter color="#c1121f" size={30}/></span>
       <span><FaInstagramSquare color="#c1121f" size={30}/></span>
         
       </div>
       </p>
      </div>
      <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer-content-right'>
       <h2>Get in touch</h2>
       <ul>
        <li>+216-52-080-243</li>
        <li>contact@foody.com</li>
       </ul>
      </div>
     </div>
     <hr/>
     <p className='footer-copyright'>
        &copy; 2024 Food Delivery App. All rights reserved.

     </p>
    </div>
  )
}

export default Footer
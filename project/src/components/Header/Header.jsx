import React from 'react';
import './Header.css';
import chicken from  '../../assets/chiken.png';
import china from '../../assets/78.png';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
          <h2>Experience<img src={chicken} alt="chicken" /> f Real Recipes Taste</h2>
          <button>View Menu</button>
        </div>
        <img className='image-head' src={china} alt="china" />
    </div>
  );
}

export default Header;

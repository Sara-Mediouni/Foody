import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaBagShopping } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
import logo from '../../assets/Foody-Logo.svg.png';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <Link to='/home'>
        <img src={logo} alt="logo" className='logo' />
      </Link>

      <ul className='navbar-menu'>
        <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact</a>
      </ul>

      <div className='navbar-right'>
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <FaShoppingBasket size={30} color="#c1121f" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className='navbar-profile'>
            <RxAvatar size={30} color="#c1121f" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate("/myorders")}>
                <FaBagShopping size={22} color="#000" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <IoLogOut size={22} color="#c1121f" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Menu burger responsive */}
      <div className='navbar-burger' onClick={() => setShowMenu(!showMenu)}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>

      {/* Menu mobile */}
      {showMenu && (
        <div className="mobile-menu">
          <Link onClick={() => { setMenu("home"); setShowMenu(false); }} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => { setMenu("menu"); setShowMenu(false); }} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href='#footer' onClick={() => { setMenu("contact-us"); setShowMenu(false); }} className={menu === "contact-us" ? "active" : ""}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

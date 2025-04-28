import React from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import { IoAddCircleSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { FaListCheck } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
        <IoAddCircleSharp size={25}/>
         <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option'>
        <FaListAlt size={25}/>
         <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='sidebar-option'>
        <FaListCheck size={25}/>
         <p>Orders</p>
        </NavLink>
    </div>

    </div>
  )
}

export default Sidebar
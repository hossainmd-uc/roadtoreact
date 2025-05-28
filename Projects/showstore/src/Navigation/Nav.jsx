import React from 'react'
import './nav.css';

import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { HiOutlineShoppingCart } from "react-icons/hi";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" />
      </div>
      <div className="profile-container">
        <a href=''>
          <FiHeart className="nav-icons"></FiHeart>
        </a>
        <a href=''>
          <HiOutlineShoppingCart className="nav-icons"></HiOutlineShoppingCart>
        </a>
        <a href=''>
          <AiOutlineUserAdd className="nav-icons"></AiOutlineUserAdd>
        </a>
      </div>
    </nav>

  )
}

export default Nav
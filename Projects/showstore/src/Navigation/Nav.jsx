import React, { useContext } from 'react'
import './nav.css';

import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { HiOutlineShoppingCart } from "react-icons/hi";

import data from '../db/data';

import { InputContext } from '../App';
import { RecommendedContext } from '../App';

const Nav = () => {

  const {setInput} = useContext(InputContext);
  const {setRecFilter} = useContext(RecommendedContext);

  const Search = (e) => {
    const text = e.target.value;
    setRecFilter("All");
    setInput(text);

  }

  return (
    <nav>
      <div className="nav-container">
        <input type="text" onChange={Search} className="search-input" placeholder='Search for an item'/>
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
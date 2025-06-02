import React, { useContext } from 'react'
import './category.css'

import { CategoryContext } from '../../App'

const Category = () => {


  const {setCategoryFilter} = useContext(CategoryContext);

  const changeCategory = (e) => {
    setCategoryFilter(e.target.value);
  }

  return (
    <div class="sidebar">
    <p class="sidebar-title">Category</p>
    <div class="sidebar-items">
      
      <label class="sidebar-label-container">
        <input type="radio" name="price" value="All" onChange={changeCategory}/>
        <span class="checkmark all"></span>
        All
      </label>

      <label class="sidebar-label-container">
        <input type="radio" name="price" value="0-50" onChange={changeCategory}/>
        <span class="checkmark"></span>
        $0 - 50
      </label>

      <label class="sidebar-label-container">
        <input type="radio" name="price" value="50-100" onChange={changeCategory}/>
        <span class="checkmark"></span>
        $50 - 100
      </label>

      <label class="sidebar-label-container">
        <input type="radio" name="price" value="100-150" onChange={changeCategory}/>
        <span class="checkmark"></span>
        $100 - 150
      </label>

      <label class="sidebar-label-container">
        <input type="radio" name="price" value="over-150" onChange={changeCategory}/>
        <span class="checkmark"></span>
        Over $150
      </label>

    </div>
  </div>

  )
}

export default Category
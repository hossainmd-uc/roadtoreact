import React from 'react'
import './category.css'

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test"></input>
        <span className="checkmark">All</span>
        </label>
        
      </div>
    </div>
  )
}

export default Category
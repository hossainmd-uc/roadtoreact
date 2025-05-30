import React, { useContext } from 'react'
import "./recommended.css"

import { RecommendedContext } from '../App'

const Recommended = () => {

  const {filter, setFilter} = useContext(RecommendedContext);


  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <button className='btns' onClick={() => setFilter("All")}>All Products</button>
        <button className='btns' onClick={() => setFilter("Nike")}>Nike</button>
        <button className='btns' onClick={() => setFilter("Adidas")}>Adidas</button>
        <button className='btns' onClick={() => setFilter("Puma")}>Puma</button>
        <button className='btns' onClick={() => setFilter("Vans")}>Vans</button>
      </div>
    </div>
    </>
  )
}

export default Recommended
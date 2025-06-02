import React, { useContext } from 'react'
import "./recommended.css"

import { RecommendedContext } from '../App'
import { InputContext } from '../App'

const Recommended = () => {

  const {setRecFilter} = useContext(RecommendedContext);

  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <button className='btns' onClick={() => setRecFilter("All")}>All Products</button>
        <button className='btns' onClick={() => setRecFilter("Nike")}>Nike</button>
        <button className='btns' onClick={() => setRecFilter("Puma")}>Puma</button>
        <button className='btns' onClick={() => setRecFilter("Vans")}>Vans</button>
      </div>
    </div>
    </>
  )
}

export default Recommended
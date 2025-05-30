import React, { useContext, useState } from 'react'
import './products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

import data from '../db/data'
import { RecommendedContext } from '../App'

const Products = () => {

  const {filter} = useContext(RecommendedContext);

  return (
    <>
    <section className='card-container'>
      {data.map(({img, title, star, reviews, prevPrice, newPrice, company, color, category}, i) => {
        console.log('filter is ' + filter)
        if (filter !== "All" && company !== filter){
          console.log("returning null")
          return null;
        }
        return(
      <section className="card">
        <img src={img} className='card-img'></img>
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>

          <section className="card-reviews">
            {Array.from({ length: star }).map((_, i) => {
              return (
                <AiFillStar key={i} className="ratings-star" />
              )
              }
              )}
            <span className="total-reviews">{reviews} ratings</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='bag-icon'/>
            </div>
          </section>

        </div>

      </section>
        )
      })}


    </section>
    </>
  )
}

export default Products
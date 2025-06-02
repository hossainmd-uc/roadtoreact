import React, { useContext, useState } from 'react'
import './products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

import data from '../db/data'
import { CategoryContext, InputContext, RecommendedContext } from '../App'

const Products = () => {

  const categoryMap = {
    "0-50" : {min: 0, max: 50},
    "50-100" : {min: 50, max: 100},
    "100-150" : {min: 100, max: 150},
    "over-150" : {min: 150, max: 100000},
  }

  const {recfilter} = useContext(RecommendedContext);
  const {input} = useContext(InputContext);
  const {categoryfilter} = useContext(CategoryContext)

  return (
    <>
    <section className='card-container'>
      {data.map(({img, title, star, reviews, prevPrice, newPrice, company, color, category}, i) => {
        /* Checking if filter is applied, returning null if no match*/
        if (recfilter !== "All" && company !== recfilter){
          return null;
        }
        /* Checking to see if input, returning null if not match*/
        if (input !== "" && !title.toLowerCase().includes(input.toLowerCase())){
          return null;
        }
        if (categoryfilter !== "All" && (newPrice < categoryMap[categoryfilter].min || newPrice > categoryMap[categoryfilter].max)){
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
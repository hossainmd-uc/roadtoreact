import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import "./sidebar.css"

import { BiStore } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><BiStore class=""></BiStore></h1>
        </div>
        <Category />
        <Price />
        <Colors />
    </section>
    </>
  )
}

export default Sidebar
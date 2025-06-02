import { createContext, useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'

import "./index.css"
import Sidebar from './Sidebar/Sidebar'

export const RecommendedContext = createContext();
export const InputContext = createContext();
export const CategoryContext = createContext();

function App() {

  const [recfilter, setRecFilter] = useState("All");
  const [input, setInput] = useState("");
  const [categoryfilter, setCategoryFilter] = useState("All");

  return (
    <>
      <CategoryContext.Provider value={{categoryfilter, setCategoryFilter}}>
        <Sidebar />
        <InputContext.Provider value = {{input, setInput}} >
          <RecommendedContext.Provider value={{recfilter, setRecFilter}}>
            <Nav/>
            <Recommended />
            <Products />
          </RecommendedContext.Provider>
        </InputContext.Provider>
      </CategoryContext.Provider>
    </>

  )
}

export default App

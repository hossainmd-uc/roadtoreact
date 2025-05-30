import { createContext, useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'

import "./index.css"
import Sidebar from './Sidebar/Sidebar'

export const RecommendedContext = createContext();

function App() {

  const [filter, setFilter] = useState("All");

  return (
    <>
      <Sidebar />
      <Nav />
      <RecommendedContext.Provider value={{filter, setFilter}}>
        <Recommended />
        <Products />
      </RecommendedContext.Provider>
    </>

  )
}

export default App

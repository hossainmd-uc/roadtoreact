import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './components/UseFetch'

function App() {

  const data = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <div>
        {data && data.map((d, i) => {
          return(
            <div key={i}>
            <strong>{d.title}</strong>
            <p>{d.body}</p>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default App

import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

  const element = useRef(null)

  const value = useRef(0)
  const [count, setCount] = useState(0)

  console.log(element);

  useEffect(() => {
    const intervalID = setInterval(() => setCount((prev) => prev + 1), 1000);
    value.current = intervalID;

    return () => {
      clearInterval(value.current)
    }

  }, []);

  const turnRed = () => {
    element.current.style.color = 'red';
  }

  return (
    <>
     <div ref={element}>{count}</div>
     <button onClick={() => setCount(0)}>Reset</button>
     <button onClick={() => turnRed()}>Make Red</button>
    </>
  )
}

export default App

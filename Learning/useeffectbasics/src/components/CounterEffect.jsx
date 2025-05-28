import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter;
    }, [counter])



  return (
    <div>
        {counter}<br/>
        <button onClick={() => setCounter(prev => prev + 1)}className='hover:border-red-400 p-3 border-1 border-transparent cursor-pointer rounded-lg bg-[#1a1a1a] active:bg-red-400'>Increment</button>
    </div>
  )
}

export default CounterEffect
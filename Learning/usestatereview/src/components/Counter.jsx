import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCount] = useState(0);

  return (
    <div>
        <div>{counter}</div>
        <button onClick={() => setCount(counter + 1)} className=''>Click</button>
    </div>
  )
}

export default Counter
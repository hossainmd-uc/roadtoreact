import React, { useReducer } from 'react';
import {initialState, reducer} from './CounterReducer';


const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <p>{state}</p>
        <button onClick={() => dispatch("decrement")}>Click Me</button>
    </div>
  )
}

export default Counter
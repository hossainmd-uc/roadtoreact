import React, { useState } from 'react'

const TodoList = () => {
    const [toDoList, setToDoList] = useState([]);

    const addItem = (e) => {
        e.preventDefault();
        const item = e.target.elements.iteminput.value
        if (item){
            setToDoList(prev => [...prev, item]);
        }
    }

  return (
    <div className=''>
        {toDoList.map(item => {
            return <li>{item}</li>
        })
        }
        <form onSubmit={addItem} className='flex flex-row gap-2'>
            <label className='w-12'></label>
            <input name="iteminput" className='text-black bg-white rounded-xl'></input>
            <button type="submit" className='hover:bg-blue-600 bg-blue-500 rounded p-1'>Add Item</button>
        </form>
    </div>
  )
}

export default TodoList
import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import Counter from './components/Counter'
import ShoppingList from './components/ShoppingList'

function App() {
  

  return (
    <>
      <div className='flex flex-col gap-4'>
        <Counter />
        <TodoList />
        <Profile />
        <ShoppingList/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import UserProvider from './components/UserContext'

function App() {
 

  return (
    <>
      <UserProvider children={UserProfile}>
        <UserProfile/>
      </UserProvider>

    </>
  )
}

export default App

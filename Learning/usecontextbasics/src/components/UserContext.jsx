import React, { createContext, useContext, useState } from 'react'
import UserProfile from './UserProfile';


export const UserContext = createContext();

const UserProvider = ({children}) => {
  const name= "Thorfinn";
  return (
    <UserContext.Provider value={name}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
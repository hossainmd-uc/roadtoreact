import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {

    const name = useContext(UserContext)

  return (
    <div>name is {name}</div>
  )
}

export default UserProfile
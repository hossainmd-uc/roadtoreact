import React, { useState } from 'react'

const Profile = () => {

  const [user, setUser] = useState({name: "", age: ""});

  const updateUser = (e) => {
    e.preventDefault();
    setUser({name: e.target.elements.name.value, age: e.target.elements.age.value});
  };

  return (
    <div >
        <div className='max-w-40'>
          <h3 className='font-bold text-xl'>User Information</h3>
          <p className='font-bold italic'>User Name: {user.name}</p>
          <p className='font-bold italic'>User Age: {user.age}</p>
        </div>
        <br />
        <form onSubmit={updateUser} className='flex flex-row gap-2  items-center'>
            <div className='flex flex-col gap-3'>
                <div className='flex'>
                    <label className='w-14'>Name</label> 
                    <input name='name' className='text-black bg-white rounded-xl'/>
                </div>
                <div className='flex'>
                    <label className='w-14'>Age</label>
                    <input name='age' className='text-black bg-white rounded-xl'/>
                </div>
            </div>
            <button type='submit' className=' h-15 hover:bg-blue-600 bg-blue-500 rounded p-1'>Update User</button>
        </form>
    </div>
  )
}

export default Profile
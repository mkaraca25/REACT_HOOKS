import React, { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

const User=({user})=> {
  const context=useContext(UserContext);
  console.log(context);
  return (
    <div style={{background:user.color}}>
        <h3>Name :{user.name}</h3>
        <p>Email :{user.email}</p>
        <p>Age :{user.age}</p>
        Color={''}
        <input value={user.color} onChange={e=>context.changeColor(user.id,e.target.value)}/>
    </div>
  )
}

export default User
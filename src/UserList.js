import React,{useContext} from 'react'
import User from './User'
import { UserContext } from './contexts/UserContext'

const UserList = ()=> {
  const context=useContext(UserContext)
  console.log("User List :",context);
  return (
    <>
        <h2>User List</h2>
        {context.users.map(user =>(< User key={user.name} user={user}/>))}
    </>
  )
}

export default UserList
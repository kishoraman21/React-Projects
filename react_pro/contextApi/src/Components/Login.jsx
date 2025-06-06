import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  //sending data through context
  //setUser is defined in the userContextProvider as the usestate 

  const {setUser} = useContext(UserContext)

  const handlesubmit = (e)=>{

    e.preventDefault()
    setUser({username, password})

  }
  return (
    <div>
      <h2 >Login</h2>
      <br></br>
      <input className='border-2' type='text'value={username} 
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username'/>
      {"  "} {'  '}
      <input className='border-2' type='password' value={password} 
      onChange={(e)=> setPassword(e.target.value)}
       placeholder='password'/>
      <button onClick={handlesubmit}  >Submit </button>
    </div>
  )
}

export default Login
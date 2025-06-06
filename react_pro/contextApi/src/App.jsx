import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'



function App() {

  return (
   <UserContextProvider>
   <h1 className='text-3xl bg-red-500 text-center  mt-5 mr-200 ml-10'> Context APi </h1>
   <Login/>
   <br></br>
   <Profile/>
   </UserContextProvider>
  )
}

export default App



import React , {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    //now here fetching or receiving data using "user"
    const {user} = useContext(UserContext);

   if(!user) return <div className='border-2'>Please Login</div>

   return <div className='border-2'> Welcome {user.username}</div>
}

export default Profile
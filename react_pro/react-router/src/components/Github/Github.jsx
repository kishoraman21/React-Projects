// import React, { useEffect, useState, useTransition } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
//     const [data , setData] = useState([])

//    useEffect(() => {
//      fetch('https://api.github.com/users/kishoraman21')
//      .then(res=>res.json())
//      .then(data=>{
//         console.log(data);
//         setData(data)
        
//      })
//    }, [])
   
  return (
   <>
    <div className='text-center m-4 bg-red-400 text-black p-4 text-3xl'>Github followers: {data.followers} 

        <img src={data.avatar_url} alt="Profile Pic " width={300} />
    </div>
    
   </>
  )
}

export default Github

// improving the loading of the github page using loader 
export const githubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/kishoraman21')
    return response.json()
}
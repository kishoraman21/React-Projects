import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-500 text-3xl p-3.5 text-white rounded-2xl'>User: {id}</div>
  )
}

export default User
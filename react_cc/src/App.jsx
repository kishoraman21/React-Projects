import { useState } from 'react'
import './App.css'
import Card from './components/card'

export default function App() {
  const [count, setCount] = useState(0)





  return (
    <>




      <div className="border bg-amber-500  text-black p-4 rounded-4xl mb-10" >This element has a border.</div>

      <Card  heading="first heading " paratext="first card " btntext="first card"/>
      <br />
      <Card  heading="second heading " paratext="second card" btntext="second button "/>





    </>
  )
}



import { useState, useCallback, useEffect, useRef } from 'react'




function App() {
  const [length, setLength] = useState(8)
  const [isnumber, setIsNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook for copying password

  const passwordRef = useRef(null) 


  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isnumber) str += "0123456789"
    if (characters) str += "!@#$%^&*-_+=[]{}~`"

    //loop for generating pass

    for (let i = 1; i <= length; i++) {

      //char stores array index value 
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char) //storing the char value from array

    }
    setPassword(pass)


  }, [length, isnumber, characters, setPassword])

  // copy pass 

  const copyPass = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isnumber, characters, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input

            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black "
            placeholder="Enter Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        {/* div for range */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input type="range"
              min={6}
              max={90}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type='checkbox'
              defaultChecked={isnumber}
              id="numberInput"
              onChange={() => {
                setIsNumber((prev) =>
                  !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type='checkbox'
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                setCharacters((prev) =>
                  !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

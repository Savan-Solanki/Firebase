import React, { useState } from 'react'

export default function Home() {
    const[input, setInput] = useState({
        name: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)

    }

  return (
    <div>
      <form>
        <input type="text" placeholder='Enter Name' value={input.name} onChange={(e)=> setInput(e.target.value)}/><br /><br />
        <input type="password" placeholder='Enter password' value={input.password} onChange={(e)=> setInput(e.target.value)}/><br /><br />
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

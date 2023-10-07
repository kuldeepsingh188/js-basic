import React, { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  console.log(password)
  return (
    <div>
      <form className='py-5'>
        <input type="email" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input className='mt-5' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
    </div>
  )
}

export default Home
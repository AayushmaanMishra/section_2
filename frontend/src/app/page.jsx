import React from 'react'

const Home  = () => {
  return (
    <div>
      
      <a href="/login">Login</a>
      <a href="/about">about</a>
      <a href="/signup">signup</a>
      <a href="/contact">contact</a>
      <h1 style={{color : 'red', fontSize : '3em' }}>My Homepage</h1>
      <hr />
      <button className='my-btn'>Click me</button>
    </div>
  )
}

export default Home 
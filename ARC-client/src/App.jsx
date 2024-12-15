import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Components/Hero'
import Sports from './Sports/Sports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Sports/>
    </>
  )
}

export default App

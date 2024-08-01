import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState("")
  
  let colours = ["red","yellow","green"]


  useEffect(() =>
  {
    let interval = setInterval (() => 
  {let number = Math.floor(Math.random()*3)
    setColour(colours[number])
  }, 3000)
  return (() =>
    clearInterval(interval)    
  )

  }, [])

  return (
    <>
      <div className={colour==="red" ? "red" : ""}>light 1</div>
      <div className={colour==="yellow" ? "yellow" : ""}>light 2</div>
      <div className={colour==="green" ? "green" : ""}>light 3</div>
      </>
  )
}

export default App

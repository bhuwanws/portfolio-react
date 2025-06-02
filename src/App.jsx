import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter2] =useState(0)
  const add=()=>{
    setCount(count+1)
  }
  var sub=()=>{
    setCounter2(counter-1)
  }

  useEffect((
  function multiply2(){
    setCount(count*2)
  }),[counter])

  function multiply(){
    setCount(count*2)
  }

  return (
    <>
    <button onClick={add}>Add</button>
     <button onClick={sub}>Sub</button>
     <button onClick={multiply}>Multiply</button>
     <div>{count}</div>
     <div>{counter}</div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setcounter] = useState(15);
 const addvalue = () =>
 {
  setcounter(counter+1);
 }  
 const substract = () =>
 {
  setcounter(counter-1);
 }

  return (
    <>
    <h1>Rishabh Pandey</h1>
    <h2>{counter}</h2>
    <button onClick={addvalue}>Add</button>
    <br />
    <button onClick={substract}>Substract</button>
    </>
  )
}

export default App

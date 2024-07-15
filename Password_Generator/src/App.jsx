import { useState, useCallback, useEffect , useRef, useReducer} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "1234567890"
    if (charAllow) str += "!@#$^&*(')"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword])

  const copyPswdToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllow,charAllow,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 py-3 my-10 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center py-8 my-4 text-4xl'>PasswordGenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly  ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPswdToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '></div>
        <div className='flex items-center gap-x-1 '>
          <input type="range" min={8} max={16} value={length} className='cursor-pointer' onChange={(e) => {
            setlength(e.target.value)
          }} />
          <label className='px-2'> Length: {length}</label>
          <input type="checkbox" defaultChecked={numAllow} id="numberInput" onChange={() => {
            setnumAllow((prev) => !prev);
          }} />
          <label className='px-2'> Number</label>
          <input type="checkbox" defaultChecked={charAllow} id="charInput" onChange={() => {
            setnumAllow((prev) => !prev);
          }} />
          <label className='px-2'> Character</label>

        </div>


      </div>
    </>
  )
}

export default App

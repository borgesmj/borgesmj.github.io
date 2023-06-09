import { useState } from 'react'
import './App.css'
import Data from './Components/Data'
import Profile from './Components/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <Profile/>
        <Data/>
    

    </div>
  )
}

export default App

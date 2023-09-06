import { useState } from 'react'
// import './App.css'
import Data from './Components/Data'
import Profile from './Components/Profile'
import Modal from './Components/Modal'




function App() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(true)
  const [profile, setProfile] = useState(true)

  return (
    <div className='container modalActiva'>
        {profile && <Profile
          setModal={setModal}
          setData={setData}
          setProfile={setProfile}
        />}
        {data && <Data/>}
        {modal && <Modal
            setModal={setModal}
            setData={setData}
            setProfile={setProfile}/>}
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
// import './App.css'
// import Data from './Components/Data'
import Profile from './Components/Profile/Profile'
// import Modal from './Components/Modal'




function App() {
  const [profileInfo, setProfileInfo] = useState([])
  const [sidebarCheckbox, setSidebarCheckbox] = useState(false)
  const [socialSidebar, setSocialSidebar] = useState(false)
  const [english, setEnglish] = useState(false)

  //Estraer informacion personal desde la API
  useEffect(() => {
    const fetchAPI = () => {
      fetch('https://api.github.com/users/borgesmj')
        .then((res) => res.json())
        .then((json) => {
          setProfileInfo(json);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    };

    fetchAPI();
  }, []);

  //valor del checkbox para el sidebar

  const changeSidebarCheckboxValue = () => {
    setSidebarCheckbox(!sidebarCheckbox)
    if (socialSidebar){
      setSocialSidebar(false)
    }
  }

  const changeSocialSidebarCheckbox = () => {
    setSocialSidebar(!socialSidebar)
    if (sidebarCheckbox){
      setSidebarCheckbox(false)
    }
  }

  const setLanguage = () => {
    setEnglish(!english)
  }

  return (
    <div className='app_container'>
        <Profile
          profileInfo = {profileInfo}
          changeSidebarCheckboxValue = {changeSidebarCheckboxValue}
          sidebarCheckbox = {sidebarCheckbox}
          changeSocialSidebarCheckbox = {changeSocialSidebarCheckbox}
          socialSidebar={socialSidebar}
          setLanguage = {setLanguage}
          english = {english}
        />
    </div>
  )
}

export default App

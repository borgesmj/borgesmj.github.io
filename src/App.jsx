import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

//componentes
import Profile from './Components/Profile/Profile'

//Paginas
import About from './Pages/About'
import Blog from './Pages/Blog'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import ProjectInfo from './Pages/ProjectInfo'


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
        <div className="contenido">
          <Routes>
            <Route
              path='/'
              element={<About/>}
            />
            <Route
              path='/contact/'
              element={<Contact/>}
            />
            <Route
              path='/experience/'
              element={<Experience/>}
            />
            <Route
              path='/projects/'
              element={<Projects
                repos_url = {profileInfo?.repos_url}
              />}
            />
            <Route
              path='/blog/'
              element={<Blog/>}
            />
            <Route
              path='/projects/:name'
              element={<ProjectInfo
                repos_url = {profileInfo?.repos_url}
              />}
            />
          </Routes>
        </div>
    </div>
  )
}

export default App

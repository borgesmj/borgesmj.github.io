import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import ProjectInfo from './Pages/ProjectInfo';
import Navbar from './Components/Navbar/Navbar'
import ProfileInfo from './Components/ProfileInfo/ProfileInfo';
import Socialsbar from './Components/SocialsBar/Socialsbar';

function App() {
  const [profileInfo, setProfileInfo] = useState([]);
  const [sidebarCheckbox, setSidebarCheckbox] = useState(false);
  const [socialSidebar, setSocialSidebar] = useState(false);
  const [english, setEnglish] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const fetchAPI = () => {
      fetch('https://api.github.com/users/borgesmj')
        .then((res) => res.json())
        .then((json) => {
          setProfileInfo(json);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchAPI();
  }, []);

  const changeSidebarCheckboxValue = () => {
    setSidebarCheckbox(!sidebarCheckbox);
    if (socialSidebar) {
      setSocialSidebar(false);
    }
  };

  const changeSocialSidebarCheckbox = () => {
    setSocialSidebar(!socialSidebar);
    if (sidebarCheckbox) {
      setSidebarCheckbox(false);
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (darkTheme) {
      rootElement.classList.add('dark-mode');
    } else {
      rootElement.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  return (
    <div className='app_container'>
      <Navbar
        profileInfo={profileInfo}
        changeSidebarCheckboxValue={changeSidebarCheckboxValue}
        sidebarCheckbox={sidebarCheckbox}
        changeSocialSidebarCheckbox={changeSocialSidebarCheckbox}
        socialSidebar={socialSidebar}
        setEnglish={setEnglish}
        english={english}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        avatar_url = {profileInfo?.avatar_url}
      />
      <ProfileInfo
        profileInfo={profileInfo}
        sidebarCheckbox={sidebarCheckbox}
        english={english}
      />
      <Socialsbar
       changeSocialSidebarCheckbox={changeSocialSidebarCheckbox}
       socialSidebar={socialSidebar}
       profileInfo={profileInfo}
       english={english}
       />
      <div className='contenido'>
        <Routes>
          <Route
            path='/'
            element={<About english={english} />}
          />
          <Route
            path='/contact/'
            element={<Contact />}
          />
          <Route
            path='/experience/'
            element={<Experience english={english} />}
          />
          <Route
            path='/projects/'
            element={<Projects repos_url={profileInfo?.repos_url} />}
          />
          <Route
            path='/blog/'
            element={<Blog />}
          />
          <Route
            path='/projects/:name'
            element={<ProjectInfo repos_url={profileInfo?.repos_url} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

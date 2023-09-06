import { useState, useEffect } from 'react'
import './App.css'
// import Data from './Components/Data'
import Profile from './Components/Profile/Profile'
// import Modal from './Components/Modal'




function App() {
  const [profileInfo, setProfileInfo] = useState([])

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

  return (
    <div>
        <Profile
          profileInfo = {profileInfo}
        />
    </div>
  )
}

export default App

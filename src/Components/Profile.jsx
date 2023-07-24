import React from 'react'
import Links from '../Components/Links'


const Profile = ({setModal, setProfile, setData}) => {

  const handleclick = (e) =>{
    e.preventDefault()
    setModal(true)
    setProfile(false)
    setData(false)
  }
  return (
    <div className='Profile'>
      <h1 className='nombre'>Miguel José</h1>
      <p>Front-End developer</p>
      <form action="">
        <div className='options'>
            <div>
                  <label htmlFor="About"><a href="#about">About.</a></label>
            </div>
            <div>
                  <label htmlFor="Experience"><a href="#experience">Experiencia.</a></label>
            </div>
            <div>
                  <label htmlFor="Projects"><a href="#projects">Proyectos.</a></label>
            </div>
            <div>
                  <label onClick={handleclick}><a>Trabajemos juntos.</a></label>
            </div>
        </div>
      </form>
      <Links />
    </div>
  )
}

export default Profile

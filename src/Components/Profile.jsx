import React from 'react'
import Links from '../Components/Links'


const Profile = () => {
  return (
    <div className='Profile'>
      <h1 className='nombre'>Miguel José</h1>
      <p>Front-End developer</p>
      <form action="">
        <div className='options'>
            <div>
                  <input type="radio" id='About' name="profile"/>
                  <label htmlFor="About"><a href="#about">About</a></label>
            </div>
            <div>
                  <input type="radio" id='Experience' name="profile"/>
                  <label htmlFor="Experience"><a href="#experience">Experience</a></label>
            </div>
            <div>
                  <input type="radio" id='Projects' name="profile"/>
                  <label htmlFor="Projects"><a href="#projects">Projects</a></label>
            </div>
        </div>
      </form>
      <Links />
    

    </div>
  )
}

export default Profile

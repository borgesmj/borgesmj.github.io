import React from 'react'

import { NavLink } from 'react-router-dom'
import './Profile.css'
import Sidebar from '../Sidebar/Sidebar'
import CSS_icon from '../Icons/CSS_icon'
import HTML_icon from '../Icons/HTML_icon'
import JS_icon from '../Icons/JS_icon'
import React_icon from '../Icons/React_icon'
import Tailwind_icon from '../Icons/Tailwind_icon'

const Profile = ({profileInfo, changeSidebarCheckboxValue, sidebarCheckbox, changeSocialSidebarCheckbox, socialSidebar}) => {
  const skillsIcons = [
    <CSS_icon/>,
    <HTML_icon/>,
    <JS_icon/>,
    <React_icon/>,
    <Tailwind_icon/>,  
  ]

  const linksPages = [
    {
      name: 'About',
      to: '/'
    },
    {
      name: 'Experience',
      to: '/experience/'
    },{
      name: 'Projects',
      to: '/projects/'
    },
    {
      name: 'Contact',
      to: '/contact/'
    },
    {
      name: 'Blog',
      to: '/blog/'
    }
  ]

  const handleLinkClick = () => {
    changeSidebarCheckboxValue()
  }


  console.log(profileInfo)
  return (
    <div className='profile__info'>
      <Sidebar
        changeSidebarCheckboxValue = {changeSidebarCheckboxValue}
        sidebarCheckbox={sidebarCheckbox}
        changeSocialSidebarCheckbox = {changeSocialSidebarCheckbox}
        socialSidebar = {socialSidebar}
        avatar = {profileInfo?.avatar_url}
      />
      <input type="checkbox" name="" id="" className='sidebar__checkbox' checked={sidebarCheckbox} readOnly />
      <div className="content_sidebar">
          <h1 className='nombre'>Miguel José</h1>
          <h3>Front-End developer</h3>
          <p>{profileInfo?.bio}</p>
          <p>Skills:</p>
          <ul className="skills_list_grid">
            {skillsIcons.map((item, index) => (
              <li key={index}>{item}</li>) )}
          </ul>
          <ul className='links'>
          {linksPages.map((item, index) => (
  <li key={index}>
    <NavLink 
      to={item.to} 
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : "noactive"
  }
    onClick={handleLinkClick}
    >
      {item.name}
      <span></span>
    </NavLink>
  </li>
))}
          </ul>
      </div>
      <input type="checkbox" name="" id="socials_panel_checkbox" checked={socialSidebar}  readOnly/>
      <div className="socials_panel">
          ddddd
      </div>
    </div>
  )
}

export default Profile

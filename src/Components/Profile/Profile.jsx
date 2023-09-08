import React from 'react'

import { NavLink } from 'react-router-dom'
import './Profile.css'
import Sidebar from '../Sidebar/Sidebar'
import CSS_icon from '../Icons/CSS_icon'
import HTML_icon from '../Icons/HTML_icon'
import JS_icon from '../Icons/JS_icon'
import React_icon from '../Icons/React_icon'
import Tailwind_icon from '../Icons/Tailwind_icon'
import Github_icon from '../Icons/Github_icon'

const Profile = ({english, setEnglish, profileInfo, changeSidebarCheckboxValue, sidebarCheckbox, changeSocialSidebarCheckbox, socialSidebar}) => {
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
      nombre: 'Acerca',
      to: '/'
    },
    {
      name: 'Experience',
      nombre: 'Experiencia',
      to: '/experience/'
    },{
      name: 'Projects',
      nombre: 'Proyectos',
      to: '/projects/'
    },
    {
      name: 'Contact',
      nombre: 'Contacto',
      to: '/contact/'
    },
    {
      name: 'Blog',
      nombre: 'Blog',
      to: '/blog/'
    }
  ]

  const handleLinkClick = () => {
    changeSidebarCheckboxValue()
  }


  return (
    <div className='profile__info'>
      <Sidebar
        changeSidebarCheckboxValue = {changeSidebarCheckboxValue}
        sidebarCheckbox={sidebarCheckbox}
        changeSocialSidebarCheckbox = {changeSocialSidebarCheckbox}
        socialSidebar = {socialSidebar}
        english = {english}
        setEnglish={setEnglish}
        avatar = {profileInfo?.avatar_url}
      />
      <input type="checkbox" name="" id="" className='sidebar__checkbox' checked={sidebarCheckbox} readOnly />
      <div className="content_sidebar">
          <h1 className='nombre'>Miguel José</h1>
          <h3>{english ? 'FrontEnd Web Developer' : 'Desarrollador Web FrontEnd'}</h3>
          <p>{profileInfo?.bio}</p>
          <p>{english ? 'Skills:' : 'Habilidades:'}</p>
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
      {english? item.name : item.nombre}
      <span></span>
    </NavLink>
  </li>
))}
          </ul>
      </div>
      <input type="checkbox" name="" id="socials_panel_checkbox" checked={socialSidebar}  readOnly/>
      <div className="socials_panel">
          <h2>Perfil de github <Github_icon/></h2>
          <div className="github__data">
            <NavLink  href="/projects/" onClick={changeSocialSidebarCheckbox}>
              <span>{profileInfo?.public_repos}</span>
              <span>Repositorios</span>
            </NavLink>
            <a href="https://github.com/borgesmj?tab=followers" target='_blank' onClick={changeSocialSidebarCheckbox}>
              <span>{profileInfo?.followers}</span>
              <span>Followers</span>
            </a>
            <a href="https://github.com/borgesmj?tab=following" target='_blank' onClick={changeSocialSidebarCheckbox}>
              <span>{profileInfo?.following}</span>
              <span>Following</span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Profile

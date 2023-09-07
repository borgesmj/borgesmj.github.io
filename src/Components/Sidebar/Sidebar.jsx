import React from 'react'
import './Sidebar.css'

const Sidebar = ({changeSidebarCheckboxValue, sidebarCheckbox, avatar, changeSocialSidebarCheckbox, socialSidebar}) => {
  
  const handleInputChange = () => {
    changeSidebarCheckboxValue()
  }

  const handleSocialChange = () => {
    changeSocialSidebarCheckbox()
  }

  console.log(avatar)
    return (
    <div id='sidebar'>
      <input type="checkbox" name="" id="sidebar__checkbox" className='sidebar__checkbox' onChange={handleInputChange} checked={sidebarCheckbox} />
      <label htmlFor="sidebar__checkbox" className='sidebar__burger'>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <input type="checkbox" name="" id="socials_sidebar" className='socials_sidebar'  onChange={handleSocialChange} checked={socialSidebar}/>
      <label htmlFor="socials_sidebar" id='socials_btn' >
        <img src={avatar} alt="" />
      </label>
    </div>
  )
}

export default Sidebar

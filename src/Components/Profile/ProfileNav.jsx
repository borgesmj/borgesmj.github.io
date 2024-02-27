import React from 'react'

const ProfileNav = () => {
    const profileNavLinks = [
        {
            href: "/",
            name: "Stack"
        },{
            href: "/files/",
            name: "Downloads"
        },{
            href: "/certificates/",
            name: "Certificates"
        },{
            href: "/work-together/",
            name: "Work with me"
        },
    ]
  return (
    <ul className='absolute top-[27rem] flex flex-row w-fit'>
      {
        profileNavLinks.map((item, index) => (
            <li key={`pnl_${index}`} className='border-b-solid border-b-[2px] border-b-white px-4 w-fit'><a href={item.href}>{item.name}</a></li>
        ))
      }
    </ul>
  )
}

export default ProfileNav

import React from 'react'
import { FaGithub, FaLink } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Links = () => {
  const links =[
    {icono:<FaGithub/>,  link:'https://github.com/borgesmj'},
    {icono:<FaCodepen/>,  link:'https://codepen.io/borgesmj'},
    {icono:<FaFreeCodeCamp/>,  link:'https://www.freecodecamp.org/borgesmj19'},
    {icono:<FaLinkedin/>,  link:'https://www.freecodecamp.org/borgesmj19'},
    {icono:<FaWhatsapp/>,  link:'https://api.whatsapp.com/send?phone=573205092268'},
  ]
  return (
    <div className='links' id='inicio'> 
      {links.map((item, index) => (
        <a className='profiles-links' key={index} href={item.link}>{item.icono}</a>
      ))}
    </div>
  )
}

export default Links

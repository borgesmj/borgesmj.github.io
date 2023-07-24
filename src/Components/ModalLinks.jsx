import React from 'react'
import { SiFreelancer } from "react-icons/si";
import { SiBuymeacoffee } from "react-icons/si";
import { SiBehance } from "react-icons/si";

const ModalLinks = () => {
  return (
    <div className='modalLinks'>
        
      <a href="https://www.freelancer.com.co/u/mborges1909" target='blank'><SiFreelancer/></a>
      <a href="https://www.buymeacoffee.com/borgesmj19" target='blank'><SiBuymeacoffee/></a>
      <a href="https://www.behance.net/borgesmj" target='blank'><SiBehance/></a>
    </div>
  )
}

export default ModalLinks

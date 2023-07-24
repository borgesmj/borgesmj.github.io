import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Telefono = () => {
  return (
    <div className='telefono'>
      <div className="pantallatelefono">
        <div className="franjanombre">
            <FaArrowLeft/>
            <div className="franjaopciones usuario"><FaUserAlt/></div>
            <div className="franjaopciones persona">
                <span>Miguel</span>
                <span>En linea</span>
            </div>
            <div className="franjaopciones"><FaVideo/></div>
            <div className="franjaopciones"><BiDotsVerticalRounded/></div>
        </div>
      </div>
    </div>
  )
}

export default Telefono
